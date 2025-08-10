import { ChangeEvent, useState } from 'react';
import { useAppSelector } from '../app/hooks'
import MovieCard from "../components/MovieCard";
import { InputText } from 'primereact/inputtext';
import { useGetMoviesByNameQuery } from '../app/api';
import { debounce } from "lodash";
import { Skeleton } from 'primereact/skeleton';
import { IMovie } from '../utils/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { SerializedError } from '@reduxjs/toolkit';
import { LABEL } from '../utils/constants';
import { getMoviesCatalog } from '../app/slices/movieSlice';

const handleStatus = (error: FetchBaseQueryError | SerializedError | undefined, isLoading: boolean, items: IMovie[]) => {
  if (isLoading)
    return <>
      <Skeleton width="250px" height="552px"></Skeleton>
      <Skeleton width="250px" height="552px"></Skeleton>
      <Skeleton width="250px" height="552px"></Skeleton>
      <Skeleton width="250px" height="552px"></Skeleton>
    </>
  else if (error)
    return <span>{LABEL.ERROR}</span>
  else if (!items?.length) return <span>{LABEL.NO_RESULT}</span>
  else return items.map(item => <MovieCard key={item.imdbID} data={item} />);
}

export default function MovieCatalogPage() {
  const [name, setName] = useState<string>("");
  const movies = useAppSelector(getMoviesCatalog)
  const { error, isLoading } = useGetMoviesByNameQuery(name, { skip: (!name || name === '') });

  const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => setName(e.target.value), 500);

  return (
    <section className="container catalog-page">
      <InputText
        style={{ width: "100%", marginBottom: "2rem" }}
        placeholder={LABEL.CATALOG_INPUT_PLACEHOLDER}
        onChange={handleChange}
      />
      <ul className="catalog-list">
        {handleStatus(error, isLoading, movies)}
      </ul>
    </section>
  )
}
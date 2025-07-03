import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../app/api";
import { Divider } from 'primereact/divider';
import { Card } from "primereact/card";
import { IMovie, IMovieDetailed } from "../utils/types";
import LikeButton from "../components/LikeButton";
import { Tag } from "primereact/tag";
import { getStatusMetascore } from "../utils/helpers";
import { Skeleton } from "primereact/skeleton";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react";
import { SerializedError } from "@reduxjs/toolkit";
import { LABEL } from "../utils/constants";

const handleStatus = (error: FetchBaseQueryError | SerializedError | undefined, isLoading: boolean, item: IMovieDetailed) => {
  if (isLoading)
    return <>
      <Skeleton height="500px"></Skeleton>
      <Skeleton height="587px"></Skeleton>
    </>
  else if (error)
    return <span>{LABEL.ERROR}</span>
  else return <>
    <div>
      <img src={item?.Poster} />
      <LikeButton data={item as IMovie} />
    </div>
    <Card
      title={item?.Title}
      subTitle={item?.Year}
      footer={<>
        <Divider />
        <code>{item.imdbID}</code></>}
    >
      {item?.Plot}
      <Divider />
      <div className="brief-info">
        {/* можно пройтись циклов по Object.keys(data),
          ниже - частный случай */}
        <span>Released</span>
        <span>{item?.Released}</span>

        <span>Country</span>
        <span>{item?.Country}</span>

        <span>Genre</span>
        <span>{item?.Genre}</span>

        <span>Runtime</span>
        <span>{item?.Runtime}</span>

        <span>Director</span>
        <span>{item?.Director}</span>

        <span>Writer</span>
        <span>{item?.Writer}</span>

        <span>Metascore</span>
        <span>{
          <Tag
            value={item?.Metascore}
            severity={getStatusMetascore(parseInt(item?.Metascore as string))}
          />}
        </span>
      </div>
    </Card>
  </>
}

export default function DetailsPage() {
  const params = useParams();

  const { data, error, isLoading } = useGetMovieByIdQuery(params.movieId as string)

  return (
    <section className="container details-page">
      {handleStatus(error, isLoading, data as IMovieDetailed)}
    </section>
  )
}
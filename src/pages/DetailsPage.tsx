import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../app/api";
import { Divider } from 'primereact/divider';
import { Card } from "primereact/card";
import LikeButton from "../components/LikeButton";
import { Skeleton } from "primereact/skeleton";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react";
import { SerializedError } from "@reduxjs/toolkit";
import { LABEL } from "../utils/constants";
import { IMovieDetailed } from "../utils/types";
import { Fragment } from "react/jsx-runtime";

const detailedItem = <T extends IMovieDetailed | undefined>
  (error: FetchBaseQueryError | SerializedError | undefined, isLoading: boolean, item: T) => {
  if (isLoading)
    return <>
      <Skeleton height="500px"></Skeleton>
      <Skeleton height="587px"></Skeleton>
    </>
  else if (error)
    return <span>{LABEL.ERROR}</span>
  else if (!item)
    return <span>{LABEL.NO_DATA}</span>
  else return <>
    <div>
      <img src={item.Poster} />
      <LikeButton data={item} />
    </div>
    <Card
      title={item.Title}
      subTitle={item.Year}
      footer={<>
        <Divider />
        <code>{item.imdbID}</code></>}
    >
      {item?.Plot && item.Plot !== "N/A" &&
        <>
          <p>{item.Plot}</p>
          <Divider />
        </>
      }
      <div className="brief-info">
        {Object.entries(item.details).map(([key, value]) =>
        (<Fragment key={key}>
          <span>{key}</span>
          <span>{value}</span>
        </Fragment>))}
      </div>
    </Card>
  </>
}

export default function DetailsPage() {
  const params = useParams();
  const { data, error, isLoading } = useGetMovieByIdQuery(params.movieId as string)

  return (
    <section className="container details-page">
      {detailedItem(error, isLoading, data)}
    </section>
  )
}
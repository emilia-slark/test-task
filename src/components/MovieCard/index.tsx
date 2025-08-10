import { Card } from "primereact/card";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { MovieCardProps } from "./types";
import styles from "./styles.module.css";
import LikeButton from "../LikeButton";
import { IMovie } from "../../utils/types";
import { LABEL } from "../../utils/constants";

const posterCard = (poster?: string, id?: string) => (
  <NavLink to={`/movies/${id}`}>
    <img src={poster} />
  </NavLink>
);
const detailsButton = (item: IMovie) => (
  <>
    <NavLink to={`/movies/${item.imdbID}`}>
      <Button label={LABEL.MORE_DETAILS} />
    </NavLink>
    <LikeButton data={item} />
  </>
);

export default function MovieCard({ data }: MovieCardProps) {
  return (
    <li>
      <Card
        className={`md:w-25rem ${styles.movieCard}`}
        title={data.Title}
        subTitle={data.Year}
        header={posterCard(data.Poster, data.imdbID)}
        footer={detailsButton(data)}
      />
    </li>
  );
}

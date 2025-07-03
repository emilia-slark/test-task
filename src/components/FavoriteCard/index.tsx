import "./styles.css"
import { FavoriteCardProps } from "./types";
import LikeButton from "../LikeButton";
import { NavLink } from "react-router-dom";

export default function FavoriteCard({ data, index }: FavoriteCardProps) {
  return (
    <li>
      <div className="md:w-25rem favorite-card">
        <header className="favorite-card__header">
          {index + 1}
        </header>
        <div className="favorite-card__body">
          <NavLink to={`/movies/${data.imdbID}`}>
            <span className="favorite-card__title">{data.Title}</span>
          </NavLink>
          <span className="favorite-card__year">{data.Year}</span>
        </div>
        <footer className="favorite-card__footer">
          <LikeButton data={data} />
        </footer>
      </div>
    </li>
  )
}
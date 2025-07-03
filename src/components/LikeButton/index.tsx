import { LikeButtonProps } from "./types";
import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from "../../app/hooks";
import { addItem, deleteItem } from "../../app/slices/favoritesSlice";
import { Button } from "primereact/button";

export default function LikeButton({ data }: LikeButtonProps) {
  const isFavorite = useAppSelector(state => state.favorites.items).some(item => item.imdbID === data.imdbID);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (isFavorite)
      dispatch(deleteItem({ id: data.imdbID }));
    else dispatch(addItem({ ...data }));
  }

  return (
    <Button
      icon={isFavorite ? 'pi pi-heart-fill' : 'pi pi-heart'}
      className={`p-button-rounded p-button-text ${isFavorite ? 'p-button-danger' : ''}`}
      onClick={handleChange}
      aria-label={isFavorite ? 'Unlike' : 'Like'}
    />
  )
}
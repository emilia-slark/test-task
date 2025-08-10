import { useAppSelector } from "../app/hooks"
import { getFavorites } from "../app/slices/favoritesSlice"
import FavoriteCard from "../components/FavoriteCard"
import { LABEL } from "../utils/constants"
import { IMovie } from "../utils/types"

const handleStatus = (favorites: IMovie[]) => {
  if (!favorites?.length) return <span>{LABEL.NO_RESULT}</span>
  else return favorites.map((item, index) =>
    <FavoriteCard
      key={item.imdbID}
      index={index}
      data={item}
    />)
}

export default function FavoritesPage() {
  const favorites = useAppSelector(getFavorites)

  return (
    <section className="container favorites-list-page">
      <ul className="favorites-list">
        {handleStatus(favorites)}
      </ul>
    </section>
  )
}
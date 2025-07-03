import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom"
import MovieCatalogPage from "./pages/CatalogPage";
import FavoritesPage from './pages/FavoritesPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieCatalogPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='movies/:movieId' element={<DetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

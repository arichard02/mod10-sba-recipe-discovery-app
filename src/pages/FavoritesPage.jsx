import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

// import './App.css'

function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet!</p>
  }
 
  return (
    
      <div>
        <h2>Your Favorites</h2>
        <ul>
          {favorites.map((id) => (
            <li key={id}>
              <Link to={` /recipe/${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
        {/* <p></p>
        <button>Remove Favorite</button> */}
      </div>
  );
}

export default FavoritesPage
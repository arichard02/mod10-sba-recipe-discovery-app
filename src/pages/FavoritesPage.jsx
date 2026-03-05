import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// optional CSS for styling

function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet! Browse recipes and add some.</p>;
  }

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((id) => (
          <FavoriteRecipeCard key={id} id={id} removeFavorite={removeFavorite} />
        ))}
      </div>
    </div>
  );
}

function FavoriteRecipeCard({ id, removeFavorite }) {
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const recipe = data?.meals?.[0];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe {id}</div>;
  if (!recipe) return null;

  return (
    <div className="favorite-card">
      <Link to={`/recipe/${id}`}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h3>{recipe.strMeal}</h3>
      </Link>
      <button onClick={() => removeFavorite(id)}>Remove Favorite</button>
    </div>
  );
}

export default FavoritesPage;
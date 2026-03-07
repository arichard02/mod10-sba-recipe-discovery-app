import { useLocation, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SearchPage() {

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const { data, loading, error } = useFetch(
    query
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      : null
  );

  const results = data?.meals || [];

  if (!query) return <p>Please enter a search term.</p>;
  if (loading) return <div className="loader">Searching...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!results.length) return <p>No recipes found for "{query}"</p>;

  return (
    <div>
      <h2>Search results for "{query}"</h2>

      <ul className="category-grid">
        {results.map((recipe) => (
          <li className="category-card" key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width="200"
              />
              <h3>{recipe.strMeal}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
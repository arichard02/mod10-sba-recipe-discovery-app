import useFetch from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";

// import '..App.css'

function CategoryPage() {
  // const [recipes, setRecipes] = useState([]);
  const {categoryName} = useParams();

  const { data, loading, error } = useFetch(
     `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  const recipes = data?.meals || [];

  if (loading) return <div className="loader">Loading Recipes....</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <h2> {categoryName} Recipes</h2>
      
      <ul className="category-grid">
      {recipes.map((recipe) => (
        <li className="category-card" key={recipe.idMeal}>
         <Link to={`/recipe/${recipe.idMeal}`}>
          <img src={recipe.strMealThumb} alt={`Photo of ${recipe.strMeal}`} />
          <div className="recipe-info">
            <h3>{recipe.strMeal}</h3>
          </div>
        </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default CategoryPage;

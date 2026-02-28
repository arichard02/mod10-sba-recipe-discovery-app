import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

// import '..App.css'

function CategoryPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryName} = useParams();

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
        );
        const data = await response.json();

        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fecting recipes: ", error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  if (loading) return <div className="loader">Loading Recipes....</div>;

  return (
    <div>
      <div className="categorypage"> </div>
      <h2>Recipe Categories</h2>

      {recipes.map((recipe) => (
         <Link to={`/recipe/${recipe.idMeal}`}>
          <img src={recipe.strMealThumb} alt={`Photo of ${recipe.strMeal}`} />
          <div className="recipe-info">
            <h3>{recipe.strMeal}</h3>
            <h4>{recipe.idMeal}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;

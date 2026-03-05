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

  // useEffect(() => {
  //   const getRecipes = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
  //       );
  //       const data = await response.json();

  //       setRecipes(data.meals || []);
  //     } catch (error) {
  //       console.error("Error fecting recipes: ", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getRecipes();
  // }, []);

  if (loading) return <div className="loader">Loading Recipes....</div>;
  if (error) return <div className="error">Error: {error}</div>;



  return (
    <div>
      <div className="categorypage"> </div>
      <h2> {categoryName}Recipe</h2>

      {recipes.map((recipe) => (
        <li key={recipe.idMeal}>
         <Link to={`/recipe/${recipe.idMeal}`}>
          <img src={recipe.strMealThumb} alt={`Photo of ${recipe.strMeal}`} />
          <div className="recipe-info">
            <h3>{recipe.strMeal}</h3>
            <h4>{recipe.idMeal}</h4>
          </div>
        </Link>
        </li>
      ))}
    </div>
  );
}

export default CategoryPage;

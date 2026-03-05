import { useParams } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";

function RecipeDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
    // const [recipe, setRecipe] = useState({});
    // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getRecipeDetails = async () => {
  //     const response = await fetch(
  //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  //     );
  //     const data = await response.json();
  //   //   after you get data back from a server, you have to 
  //   // use state variable setter that will redraw the screen
  //     console.log(data);
  //     setRecipe(data.meals[0])
  //   };
  //   getRecipeDetails();
  // }, []);

  // console.log(recipe);

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const recipe = data?.meals?.[0];
  // <button onClick={() => isFavorite(recipe.idMeal) ? removeFavorite(recipe.idMeal) : "Add to Favorites"}></button>

  if (loading) return <div className="loader">Loading Recipe...</div>
  if (error) return <div className="error">Error: {error}</div>
  if (!recipe) return <div>No recipe found.</div>;

  
  
  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1>

      <button onClick={() => 
        isFavorite(recipe.idMeal) 
        ? removeFavorite(recipe.idMeal) 
        : addFavorite(recipe.idMeal)}>

          {isFavorite(recipe.idMeal) ? "remove Favorite" : "Add Favorite"}
        </button>
        
    {/* <div>Recipe Detail Page</div> */}
    <img src={recipe.strMealThumb} alt={recipe.strMeal} width={250} />
    <p>{recipe.strInstructions}</p>
    {recipe.strYoutube}

     

    </div>
  );
}

export default RecipeDetailPage;

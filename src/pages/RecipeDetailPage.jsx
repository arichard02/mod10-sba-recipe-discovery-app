import { useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";


function RecipeDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
 
  

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const recipe = data?.meals?.[0];
   const navigate = useNavigate();
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

         <button onClick={() => navigate(-1)}>⬅ Back</button>

          {isFavorite(recipe.idMeal) ? "remove Favorite" : "Add Favorite"}
        </button>
       <div>
    {/* <div>Recipe Detail Page</div> */}
    <img src={recipe.strMealThumb} alt={recipe.strMeal} width={250} />
   
    <h3>Ingredients:</h3>
<ul>
  {Array.from({ length: 20 }).map((_, i) => {
    const ingredient = recipe[`strIngredient${i+1}`];
    const measure = recipe[`strMeasure${i+1}`];
    return ingredient ? <li key={i}>{ingredient} - {measure}</li> : null;
  })}
</ul>
  <h3>Directions:</h3>
   <p>{recipe.strInstructions}</p>
   </div> 

   <div>
   <h3>YouTube Video:</h3>
<p>{recipe.strYoutube}</p>
    
</div>
     

    </div>
  );
}

export default RecipeDetailPage;

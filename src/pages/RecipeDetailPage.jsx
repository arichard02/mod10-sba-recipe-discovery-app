import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetailPage() {
  const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      const data = await response.json();
    //   after you get data back from a server, you have to 
    // use state variable setter that will redraw the screen
      console.log(data);
      setRecipe(data.meals[0])
    };
    getRecipeDetails();
  }, []);

  console.log(recipe);

  return (
    <>
    <div>Recipe Detail Page</div>
    <img src={recipe.strMealThumb} alt="" />
    <p>{recipe.strInstructions}</p>
    {recipe.strYoutube}

    </>
  )
}

export default RecipeDetailPage;

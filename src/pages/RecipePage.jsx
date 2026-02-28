import { Link } from "react-router-dom"
import { useState, useEffect } from "react"




function RecipePage() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
         
        const getPosts = async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            const data = await response.json()
            console.log(data)
    } 
        
        getPosts()
}, [])


    return(
        <div>
            RecipePage
            <ul>
                {meal.map(meal =>

                <li key={meal.id}><Link>{meal.strName}</Link></li>

                )}
                <li></li>

            </ul>
        </div>

    )
}

export default RecipePage
import { useEffect } from 'react'
import { useParams } from "react-router-dom"



function RecipeDetailPage() {

    const { id } = useParams()

    useEffect(() => {
        const getReciprDetails = async () => {
            const response = await fetch()
            const data = await response.json()
            console.log(data)
        }
        getReciprDetails
    }
)
 
  return (
      <div>
        Recipe Detail Page
      </div>
  )
}

export default RecipeDetailPage

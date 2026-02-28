import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

// import './App.css'

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );
        const data = await response.json();

        setCategories(data.categories || []);
      } catch (error) {
        console.error("Error fecting categories: ", error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) return <div className="loader">Loading Categories....</div>;

  return (
    <div className="homepage">
      <h2>Recipe Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.idCategory}>
            <Link to={`category/${category.strCategory}`}>
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

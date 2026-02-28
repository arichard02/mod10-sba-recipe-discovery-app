import { Link } from "react-router-dom"

function Navbar() {

return(

         <nav>
            <h1>Recipe API</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category Page</Link>
          </li>
          <li>
            <Link to="/recipe">Recipe Page</Link>
          </li>
          <li>
            <Link to="/recipeDetailPage">Recipe Detail Page</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites Page</Link>
          </li>
          <li>
            <Link to="/search">Search Page</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
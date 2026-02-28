import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          {/* <Route path="/recipePage" element={<RecipePage />} /> */}
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/favoritesPage" element={<FavoritesPage />} />
          <Route path="/searchPage" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

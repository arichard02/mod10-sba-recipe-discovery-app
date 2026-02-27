import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/homePage">Home</Link></li>
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/recipeDetail" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;

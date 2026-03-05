import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

        const addFavorite = (id) => setFavorites([...favorites, id]);
        const removeFavorite = (id) => setFavorites(favorites.filter(f => f !== id));
        const isFavorite = (id) => favorites.includes(id);

        return (
            <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
                {children}
                </FavoritesContext.Provider>
        );
}

export const useFavorites = () => useContext(FavoritesContext)
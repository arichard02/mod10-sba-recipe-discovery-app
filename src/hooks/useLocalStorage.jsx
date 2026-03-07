import { useState } from "react";


function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : initialValue;
      });

      const setStoreValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
      };

      const addFavorite = (id) => {
  if (!favorites.includes(id)) setFavorites([...favorites, id]);
};

    return [value, setStoreValue];
}

export default useLocalStorage
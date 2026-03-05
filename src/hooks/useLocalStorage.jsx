import { useState } from "react";


function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);
        return stored / JSON.parse(storedData) ; initialValue;
      });

      const setStoreValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
      };

    return [value, setStoreValue];
}

export default useLocalStorage
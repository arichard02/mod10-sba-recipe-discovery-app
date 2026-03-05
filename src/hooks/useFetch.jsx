import { useState, useEffect, useState } from "react"

function useEffect(url) {
    const [date, setDate] = useState(null);
    const [loadind, setLoading] = useState(true);
    const [error, useState] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setDate(json);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchData();
    }, [url]);


     
    return { data, loading, error };
}



export default useFetch
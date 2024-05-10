import { useState, useEffect } from "react";
import { API_URL } from "../config";


const initialState = {
    response: []
}

export const useFetchData = () => {
    
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => { 
        try{
            setError(false)
            setIsLoading(true)

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error('Network not responding ok', error)
            }

            const weatherData = await response.json();
        
            setState (() => ({
                response: weatherData   
            }))
        }
    catch(error) {
        console.error("error fetching stuff", error)
        setError(true);
        setIsLoading(false);
    } 
    finally{
        setIsLoading(false);
    } 

};

useEffect(() => {
    fetchData()
},[]);

return {state, error, isLoading};
}
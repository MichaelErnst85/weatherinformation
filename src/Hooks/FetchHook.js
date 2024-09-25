import { useState, useEffect, useRef } from "react";
import { API_URL } from "../config";
import axios from "axios";
import axiosRetry from "axios-retry";


const initialState = {
    response: []
}

export const useFetchData = () => {
    
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRetrying, setIsRetrying] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const retryCountRef = useRef(0);

    axiosRetry(axios, 
        { retries: 5, 
            retryDelay: (retryCount) => 
            {console.log(`retry attempt: ${ retryCount }`); 
            return retryCount * 2000 },
        onRetry:() => {
            retryCountRef.current += 1;
            setRetryCount(retryCountRef.current)
            setIsRetrying(true);
            }
        })

    const fetchData = async () => { 
        try{
            setError(false);
            setIsLoading(true);
            setIsRetrying(false);
            setRetryCount(0);
            retryCountRef.current = 0;

            const response = await axios.get(API_URL);

            const weatherData = response.data;

            setState (() => ({
                response: weatherData 
            }));
        }
    catch(error) {
        setError(true);
    } 
    finally{
        setIsLoading(false);
        setIsRetrying(false)

    } 
};

useEffect(() => {
    fetchData();
}, []);

return {state, error, isLoading, isRetrying, retryCount};
}
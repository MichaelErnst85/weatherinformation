// import component
import Grid from "./Grid"
import Thumb from './Thumb';
import NoImage from '../images/NoImage.jpg'

// import hook
import { useFetchData } from '../Hooks/FetchHook';

// import picture

const App = () => {
    const {state, error, isLoading, isRetrying, retryCount} = useFetchData();

    if (error) 
      {
        return <Grid header = 'Something is not correct'></Grid>
      }

    if (isLoading) 
    {
        if (isRetrying)
        {
          return<Grid header = {`Retrying to connect Attempt: ${retryCount}`}></Grid>
        }
        return <Grid header = 'Loading...'></Grid>
      }
    
    //const cities = [...state.response]

    const LoadImage = (city) => {
      try{
        return require(`../images/${city}.jpg`) 
      } 
      catch(error){
          return NoImage;
      }
    }

    const ConvertTime = (validTime) => {
      try{
        const dateString = validTime;
        const date = new Date(dateString);

        return date.toLocaleTimeString("sv-SE");
      }
      catch(error){
        console.log(error);
        return 'Error when converting'
      }
    }

    const AddCountry = (country) => {
      
      if(country === 'Sweden')
      {
        country = 'SE'
      }
      else{
        country= 'DK'
      }
      return country
    }

    const sortedCities = [...state.response].sort((a,b) => {
      const countryComparison = a.country.localeCompare(b.country);

      if (countryComparison !== 0) {
        return countryComparison;
      }

      return b.temperature - a.temperature;
    });

    return(
    <>
    <Grid header = 'Weather Information'>
      {sortedCities.map(weather => (
        <Thumb
          key = { weather.city }  
          image= { LoadImage(weather.city) } 
          city = { weather.city }
          country = { AddCountry(weather.country) } 
          temperature={ weather.temperature }
          validtime = { ConvertTime(weather.validTime) }
        />
      ))}
    </Grid>
    </>
  );
};

export default App;
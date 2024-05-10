// import component
import Grid from "./Grid"
import Thumb from './Thumb';

// import hook
import { useFetchData } from '../Hooks/FetchHook';

// import picture

const App = () => {
    const {state, error, isLoading} = useFetchData();

    if (error) return <div>Something is not correct</div>

    if (isLoading) return <div>Loading..</div>
    
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
          image= { require(`../images/${weather.city}.jpg`) } 
          city = { weather.city }
          temperature={ weather.temperature }
        />
      ))}
    </Grid>
    </>
  );
};

export default App;
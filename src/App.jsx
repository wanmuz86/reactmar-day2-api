
import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import {useState} from 'react';
import axios from 'axios';

function App() {
  
  // Weather will be used in Weather Component
  // It is modified by Search Component
  // The nearest common parent is App Component
  // THe weather state will be in this component

const [weather,setWeather] = useState(null);
const [error, setError] = useState('');

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiId = "9fd7a449d055dba26a982a3220f32aa2";

// async keyword indicate that this method will have an asynchronous call
const handleSearch = async (cityName) => {
  console.log(cityName);
  /// WHERE THE API CALL WILL HAPPEN
  try {

    // Handling the data
    const response = await axios.get(`${apiUrl}?q=${cityName}&appid=${apiId}`);
    console.log(response.data);
    setWeather(response.data);
    setError('');
  }
  catch (error){
    console.log(error);
    setError(`Something is wrong ${error}`);
    setWeather(null)
  }

}


  return (
    <div className='container'>
     <Search onSearchPressed={handleSearch}/>
     { weather ? <Weather weatherData={weather}/> : <div><p>No weather at the moment</p></div>}
    </div>
  )
}

export default App

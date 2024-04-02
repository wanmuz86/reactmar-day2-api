
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
  }
  catch (error){
    console.log(error);
  }

}


  return (
    <div className='container'>
     <Search onSearchPressed={handleSearch}/>
     <Weather/>
    </div>
  )
}

export default App

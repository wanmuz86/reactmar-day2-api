
import './App.css'
import Search from './components/Search'
import Weather from './components/Weather'
import {useState} from 'react';

function App() {
  
  // Weather will be used in Weather Component
  // It is modified by Search Component
  // The nearest common parent is App Component
  // THe weather state will be in this component

const [weather,setWeather] = useState(null);

const handleSearch = (cityName) => {
  console.log(cityName);
  /// WHERE THE API CALL WILL HAPPEN
  
}
  return (
    <div className='container'>
     <Search onSearchPressed={handleSearch}/>
     <Weather/>
    </div>
  )
}

export default App

import React from 'react'


const Weather = ({weatherData}) => {
  return (
    <div className='card bg-light my-3 p-3'>
        <div className='row'>
            <div className='col-4'>
                <img src="https://openweathermap.org/img/w/10d.png" alt="" 
                style={{height:'180px'}}/>
            </div>
            <div className='col-8'>
                <h3>{weatherData.weather[0].main} - {weatherData.weather[0].description}</h3>
                <p>{Math.round(weatherData.main.temp -273.15)} &deg;C</p>
                <p>{weatherData.main.humidity}% - {weatherData.main.pressure} hPa</p>
                <p>{new Date(weatherData.sys.sunrise).toLocaleTimeString()} - {new Date(weatherData.sys.sunset).toLocaleTimeString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Weather
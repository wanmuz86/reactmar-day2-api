import React from 'react'

const Weather = () => {
  return (
    <div className='card bg-light my-3 p-3'>
        <div className='row'>
            <div className='col-4'>
                <img src="https://openweathermap.org/img/w/10d.png" alt="" 
                style={{height:'180px'}}/>
            </div>
            <div className='col-8'>
                <h3>Weather</h3>
                <p>Temperature</p>
                <p>Humidity - Pressure</p>
                <p>Sunset time - Sunrise time</p>
            </div>
        </div>
    </div>
  )
}

export default Weather
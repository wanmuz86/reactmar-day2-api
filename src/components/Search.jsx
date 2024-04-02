import React from 'react'
import { useState } from 'react';

const Search = ({onSearchPressed}) => {

    const [cityName, setCityName] = useState('');
    const handleCityChange = (e) => setCityName(e.target.value);

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className='col-8'>
                    <input className='form-control' type="text" 
                    placeholder='Enter city name' name='city' 
                    value={cityName} onChange={handleCityChange}/>
                </div>
                <div className='col-4'>
                    <button className='btn btn-primary' style={{width:'100%'}} 
                    onClick={()=>onSearchPressed(cityName)}>Search Weather</button>
                </div>
        </div>
        </div>
    )
}

export default Search
import React from 'react'

const Search = () => {
    return (
        <div className='mt-3'>
            <div className='row'>
                <div className='col-8'>
                    <input className='form-control' type="text" placeholder='Enter city name' name='city' />
                </div>
                <div className='col-4'>
                    <button className='btn btn-primary' style={{width:'100%'}}>Search Weather</button>
                </div>
        </div>
        </div>
    )
}

export default Search
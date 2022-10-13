import React, {useState} from 'react';


function Autocomplete({country}) {


    return (
        <div>
            <ul className='autocomplete'>
                <li className='autocomplete_value'>
                    {country}
                </li>
            </ul>
        </div>
    );
}

export default Autocomplete;
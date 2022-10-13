import React from 'react';
import '../App.css'

function AutoComplete({filteredCompanies}) {
    return (
        <div className='autocomplete-container'>
            {filteredCompanies.map(item => (
                <div className='autocomplete_default_value'>
                    <div className="autocomplete_default_data">
                        <img src={item.logo} />
                        <div className="autocomplete_default_name">{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AutoComplete;
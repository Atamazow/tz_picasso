import React, {useState} from 'react';


function Autocomplete({isOpen,companyClickHandler, filterCompany}) {


    return (
        <div>
            {isOpen
                ? filterCompany.map((data,index) => {
                    return (
                        <li
                            onClick={() => companyClickHandler(index)}
                            className="autocomplete_value"
                            key={index}
                        >
                            <img src={data.logo} />
                            <div className="autocomplete_data">
                                <div className="autocomplete_name">{data.name}</div>
                                <span className="autocomplete_domain">{data.domain}</span>
                            </div>
                        </li>
                    );
                })
                : null}
        </div>
    );
}

export default Autocomplete;
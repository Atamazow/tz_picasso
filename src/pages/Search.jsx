import React, { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";
import axios from "axios";

function Search(props) {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const getCountries = () => {
    axios
      .get(
        "https://autocomplete.clearbit.com/v1/companies/suggest?query=segment"
      )
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCountries();
  }, []);

  const filterCompany = countries.filter((country) => {
    return country.name.toLowerCase().includes(value.toLowerCase());
  });

    const companyClickHandler = (event) => {
    setValue(event.target.textContent);
    setIsOpen(!isOpen);
    console.log(setValue(event.target.textContent), 'console')
  };

  const inputIsOpenClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="search_input">
      <form action="">
        <input
          className="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onClick={inputIsOpenClick}
          type="text"
        />
      </form>
      <ul className="autocomplete">
        {isOpen
          ? filterCompany.map((data,index) => {
              return (
                <li
                  onClick={companyClickHandler}
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
      </ul>
    </div>
  );
}

export default Search;

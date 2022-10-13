import React, { useEffect, useState } from "react";
import axios from "axios";
import AutoComplete from "./AutoComplete";

function Search(props) {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
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
  }, []);

  const filteredCompanies = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(value.toLowerCase()) ||
      country.domain.toLowerCase().includes(value.toLowerCase())
    );
  });

  const companyClickHandler = (id) => {
    setValue(filteredCompanies.find((item, index) => index === id).name);
    setIsOpen(!isOpen);
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
         { value && isOpen
          && filteredCompanies.map((data, index) => {
              return (
                <li
                  onClick={() => companyClickHandler(index)}
                  className="autocomplete_value"
                  key={index}
                >
                  <img src={data.logo} />
                  <div className="autocomplete_search">
                    <div className="autocomplete_name">{data.name}</div>
                    <span className="autocomplete_domain">{data.domain}</span>
                  </div>
                </li>
              );
            })}
      </ul>
      <AutoComplete filteredCompanies={filteredCompanies} />
    </div>
  );
}

export default Search;

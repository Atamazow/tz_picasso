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
    if (country.name.toLowerCase().includes(value.toLowerCase())) {
      return country.name
    } if (country.domain.toLowerCase().includes(value.toLowerCase())) {
      return country.domain
    }
  });

    const companyClickHandler = (id) => {
    setValue(filterCompany.find((item, index) => index === id).name);
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
        <Autocomplete isOpen={isOpen} companyClickHandler={companyClickHandler} filterCompany={filterCompany}/>
      </ul>
    </div>
  );
}

export default Search;

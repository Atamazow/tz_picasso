import React  from 'react';
import axios from "axios";

const GetCountries = () => {
        axios
            .get("https://autocomplete.clearbit.com/v1/companies/suggest?query=segment")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error);
            });

}
export default GetCountries;
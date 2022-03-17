import { RadioBrowserApi } from 'radio-browser-api';
import React, { useEffect, useState } from 'react';

const SearchCountries = ({selectAction}) => {
    const api = new RadioBrowserApi('BeduReactFinalsDEFQ/1.0');

    let [countries, setCountries] = useState([]);

    useEffect(() => {
        api.getCountries()
            .then(data => setCountries(data))
            .catch(error => console.error(error))
    }, []);

    const updateFilter = (event) => {
        let selectedValue = event.target.value;
        let countryName = '';
        if(selectedValue != -1){
            countryName = countries[selectedValue].name;
        }
        selectAction(countryName);
    }
    
    return <div className='search-countries'>
        <label htmlFor='searchCountry'>Pais:</label>
        <select id='searchCountry' name='searchCountry' onChange={updateFilter}>
            <option value={-1}>-- Pais --</option>
            {countries.map((country, i) => (<option key={i} value={i}>{country.name}({country.stationcount})</option>))}
        </select>
    </div>
}

export default SearchCountries;
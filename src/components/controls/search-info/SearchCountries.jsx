import React from 'react';

const SearchCountries = ({selectAction}) => {
    const RadioBrowser = require('radio-browser')

    let [countries, setCountries] = useState([]);

    useEffect(() => {
        RadioBrowser.getCategory('countries')
            .then(data => setCountries(data))
            .catch(error => console.error(error))
    }, []);

    const updateFilter = (event) => {
        let selectedValue = event.target.value;
        let countryName = '';
        if(selectedValue != -1){
            countryName = country[selectedValue].name;
        }
        selectAction(countryName);
    }
    
    return <div className='search-countries'>
        <label htmlFor='searchCountry'>Pais:</label>
        <select id='searchCountry' name='searchCountry' onChange={updateFilter}>
            <option value={-1}>-- Pais --</option>
            {countries.map((country, i) => (<option value={i}>{country.name}({country.stationcount})</option>))}
        </select>
    </div>
}

export default SearchCountries;
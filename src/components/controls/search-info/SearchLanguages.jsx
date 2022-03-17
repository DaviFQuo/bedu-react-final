import { RadioBrowserApi } from 'radio-browser-api';
import React, { useEffect, useState } from 'react';

const SearchLanguages = ({selectAction}) => {
    const api = new RadioBrowserApi('BeduReactFinalsDEFQ/1.0');

    let [languages, setLanguages] = useState([]);

    useEffect(() => {
        api.getLanguages()
            .then(data => setLanguages(data))
            .catch(error => console.error(error))
    }, []);

    const updateFilter = (event) => {
        let selectedValue = event.target.value;
        let languageName = '';
        if(selectedValue != -1){
            languageName = languages[selectedValue].name;
        }
        selectAction(languageName);
    }
    
    return <div className='search-languages'>
        <label htmlFor='searchLanguages'>Lenguaje:</label>
        <select id='searchLanguages' name='searchLanguages' onChange={updateFilter}>
            <option value={-1}>-- Lenguaje --</option>
            {languages.map((language, i) => (<option key={i} value={i}>{language.name}({language.stationcount})</option>))}
        </select>
    </div>
}

export default SearchLanguages;
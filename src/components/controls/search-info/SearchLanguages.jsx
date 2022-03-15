import React from 'react';

const SearchLanguages = (props) => {
    const RadioBrowser = require('radio-browser')

    let [languages, setLanguages] = useState([]);

    useEffect(() => {
        RadioBrowser.getCategory('languages')
            .then(data => setLanguages(data))
            .catch(error => console.error(error))
    }, []);

    const updateFilter = (event) => {
        let selectedValue = event.target.value;
        let languageName = '';
        if(selectedValue != -1){
            languageName = language[selectedValue].name;
        }
        selectAction(languageName);
    }
    
    return <div className='search-languages'>
        <label htmlFor='searchLanguages'>Lenguaje:</label>
        <select id='searchLanguages' name='searchLanguages' onChange={updateFilter}>
            <option value={-1}>-- Lenguaje --</option>
            {languages.map((language, i) => (<option value={i}>{language.name}({language.stationcount})</option>))}
        </select>
    </div>
}

export default SearchLanguages;
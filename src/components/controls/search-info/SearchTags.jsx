import { RadioBrowserApi } from 'radio-browser-api';
import React, { useEffect, useState } from 'react';

const SearchTags = ({selectAction}) => {
    const api = new RadioBrowserApi('BeduReactFinalsDEFQ/1.0');

    let [tags, setTags] = useState([]);

    useEffect(() => {
        api.getTags()
            .then(data => setTags(data))
            .catch(error => console.error(error))
    }, []);

    const updateFilter = (event) => {
        let inputValue = event.target.value;
        selectAction(inputValue);
    }
    
    return <div className='search-tags'>
        <label htmlFor='searchTag'>Palabra clave:</label>
        <input type="text" name="searchTag" id="searchTag" list="tagSuggestions" onChange={updateFilter}/>
        <datalist id="tagSuggestions">
            {tags.map((tag, i) => (<option key={i}>{tag.name}</option>))}
        </datalist>
    </div>
}

export default SearchTags;
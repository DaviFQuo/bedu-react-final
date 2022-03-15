import React from 'react';

const SearchTags = (props) => {
    const RadioBrowser = require('radio-browser')

    let [tags, setTags] = useState([]);

    useEffect(() => {
        RadioBrowser.getCategory('tags')
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
            {tags.map((tag) => (<option>{tag.name}</option>))}
        </datalist>
    </div>
}

export default SearchTags;
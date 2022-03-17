import React, { useState } from 'react';
import SearchCodecs from './search-info/SearchCodecs';
import SearchLanguages from './search-info/SearchLanguages';
import SearchTags from './search-info/SearchTags';

const SearchForm = ({submitAction}) => {
    let [codecFilter, setCodecFilter] = useState('');
    let [languageFilter, setLanguageFilter] = useState('');
    let [tagFilter, setTagFilter] = useState('');

    const updateFilter = () => {
        let filter = {}

        if(codecFilter && codecFilter.trim().length){
            filter = {
                ...filter,
                codec: codecFilter
            }
        }

        if(languageFilter && languageFilter.trim().length){
            filter = {
                ...filter,
                language: languageFilter
            }
        }

        if(tagFilter && tagFilter.trim().length){
            filter = {
                ...filter,
                tag: tagFilter
            }
        }
        console.log(filter);

        submitAction(filter)
    }
    
    return <div className='search-form'>
        <SearchTags selectAction={setTagFilter} />
        <SearchCodecs selectAction={setCodecFilter} />
        <SearchLanguages selectAction={setLanguageFilter} />

        <button onClick={() => updateFilter()}>Buscar</button>
    </div>
}

export default SearchForm;
import React, { useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
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
    
    return  <>
                <Grid.Row>
                    <Grid.Column>
                        <SearchTags selectAction={setTagFilter} />
                    </Grid.Column>
                    <Grid.Column>
                        <SearchCodecs selectAction={setCodecFilter} />
                    </Grid.Column>
                    <Grid.Column>
                        <SearchLanguages selectAction={setLanguageFilter} />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Button primary onClick={() => updateFilter()}>Buscar</Button>
                </Grid.Row>
            </>
}

export default SearchForm;
import React, { useState } from 'react';
import SearchForm from './SearchForm';

const DirectoryBrowser = () => {
    const RadioBrowser = require('radio-browser')

    let [filter, setFilter] = useState({});
    let [radioList, setRadioList] = useState([]);
    let [limitStations, setLimitStations] = useState(10);

    useEffect(() => {
        let params = {
            limit: limitStations
        }
        if(Object.entries(filter).length === 0){
            RadioBrowser.getStations(params)
                .then(data => setRadioList(data))
                .catch(error => console.error(error))
        }else{
            params = {...params, ...filter};
            RadioBrowser.searchStations(params)
                .then(data => setRadioList(data))
                .catch(error => console.error(error))
        }
    }, [filter]);
    
    return <div className='search-form'>
        <SearchForm submitAction={setFilter} />

        <div className='radio-list'>
            {radioList.map((station) => {
                return <div className='radio-station'>
                    <p>{station.name}</p>
                    <p>{station.url}</p>
                    <p>{station.homepage}</p>
                    <p>{station.favicon}</p>
                    <p>{station.tags}</p>
                    <p>{station.country}</p>
                    <p>{station.language}</p>
                    <p>{station.codec}</p>
                </div>
            })}
        </div>
    </div>
}

export default DirectoryBrowser;
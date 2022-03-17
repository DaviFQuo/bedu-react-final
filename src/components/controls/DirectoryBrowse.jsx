import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import { RadioBrowserApi } from 'radio-browser-api';
import { useDispatch } from 'react-redux';
import { updateStation } from '../../redux/stationSlice';

const DirectoryBrowser = () => {
    const api = new RadioBrowserApi('BeduReactFinalsDEFQ/1.0');
    const dispatch = useDispatch()

    let [filter, setFilter] = useState({});
    let [radioList, setRadioList] = useState([]);
    let [limitStations, setLimitStations] = useState(10);

    useEffect(() => {
        let params = {
            limit: limitStations
        }
        if(Object.entries(filter).length === 0){
            api.getAllStations(params)
                .then(data => setRadioList(data))
                .catch(error => console.error(error))
        }else{
            params = {...params, ...filter};
            api.searchStations(params)
                .then(data => setRadioList(data))
                .catch(error => console.error(error))
        }
    }, [filter]);

    const selectStation = (index) => {
        let selectedStation = radioList[index];
        dispatch(updateStation(JSON.stringify(selectedStation)));
    }
    
    return <div className='search-form'>
        <SearchForm submitAction={setFilter} />

        <div className='radio-list'>
            {radioList.map((station, i) => {
                return <div className='radio-station' key={i}>
                    <p>{station.name}</p>
                    <p>{station.url}</p>
                    <p>{station.homepage}</p>
                    <p>{station.urlResolved}</p>
                    <p>{station.tags}</p>
                    <p>{station.country}</p>
                    <p>{station.language}</p>
                    <p>{station.codec}</p>
                    <button onClick={() => selectStation(i)}>Cargar estación</button>
                </div>
            })}
        </div>
    </div>
}

export default DirectoryBrowser;
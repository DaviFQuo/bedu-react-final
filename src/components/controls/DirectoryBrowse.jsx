import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import { RadioBrowserApi } from 'radio-browser-api';
import { useDispatch } from 'react-redux';
import { updateStation } from '../../redux/stationSlice';
import { Button, Container, Grid, Item } from 'semantic-ui-react';

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
    
    return  <Container>
                <Grid columns={3} className='search-form'>
                    <SearchForm submitAction={setFilter} />
                </Grid>
                <Item.Group>
                    {radioList.map((station, i) => {
                        return <Item key={i}>
                            <Item.Image size='tiny' src={station.favicon} alt='Sin imagen' />
                            <Item.Content>
                                {station.name && <Item.Header>Nombre: {station.name}</Item.Header>}
                                {station.url && <Item.Meta>URL: {station.url}</Item.Meta>}
                                {station.homepage && <Item.Meta>Página web: {station.homepage}</Item.Meta>}
                                {station.urlResolved && <Item.Meta>URL de transmisión: {station.urlResolved}</Item.Meta>}
                                {station.tags && <Item.Meta>Palabras clave: {station.tags.toString()}</Item.Meta>}
                                {station.country && <Item.Meta>País: {station.country}</Item.Meta>}
                                {station.language && <Item.Meta>Lenguaje: {station.language}</Item.Meta>}
                                {station.codec && <Item.Meta>Codec: {station.codec}</Item.Meta>}
                                <Item.Extra>
                                    <Button secondary floated='right' onClick={() => selectStation(i)}>Cargar estación</Button>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    })}
                </Item.Group>
            </Container>
}

export default DirectoryBrowser;
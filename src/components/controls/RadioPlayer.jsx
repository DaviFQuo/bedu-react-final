import React, { useState } from 'react';
import RadioImage from './media-control/RadioImage';
import RadioInfo from './media-control/RadioInfo';
import RadioPlay from './media-control/RadioPlay';
import RadioStop from './media-control/RadioStop';
import { useSelector } from 'react-redux';
import { Menu } from 'semantic-ui-react';

const RadioPlayer = () => {
    const station = useSelector((state) => state.stationState);

    let [ isPlaying, setPlaying ] = useState(false);

    const playStation = (playAudio) => {
        if(station.name.length > 0){
            console.log(station)
        }
        setPlaying(playAudio);
    }

    return <Menu fixed='bottom' icon='labeled'>
        {!isPlaying && <RadioPlay playAudio={playStation} />}
        {isPlaying && <RadioStop playAudio={playStation} />}
        {station.url.length > 0 && <RadioImage url={station.favicon} />}
        {station.url.length > 0 ? <RadioInfo station={station} /> : <div>Favor de seleccionar una estación para reproducirlo</div>}

        {station.url.length > 0 && <audio>
            <source src={station.urlResolved ? station.urlResolved : station.url} />
        </audio>}
    </Menu>
}

export default RadioPlayer;
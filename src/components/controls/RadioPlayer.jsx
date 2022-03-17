import React, { useState } from 'react';
import RadioImage from './media-control/RadioImage';
import RadioInfo from './media-control/RadioInfo';
import RadioPlay from './media-control/RadioPlay';
import RadioStop from './media-control/RadioStop';
import { useSelector } from 'react-redux';

const RadioPlayer = () => {
    const station = useSelector((state) => state.stationState);

    let [ isPlaying, setPlaying ] = useState(false);

    const playStation = (playAudio) => {
        if(station.name.length > 0){
            console.log(station)
        }
        setPlaying(playAudio);
    }

    return <div className='radio-player'>
        {!isPlaying && <RadioPlay playAudio={playStation} />}
        {isPlaying && <RadioStop playAudio={playStation} />}
        {station.url.length > 0 && <RadioImage url={station.url} />}
        {station.url.length > 0 ? <RadioInfo station={station} /> : <div>Favor de seleccionar una estación para reproducirlo</div>}

        {station.url.length > 0 && <audio>
            <source src={station.urlResolved ? station.urlResolved : station.url} />
        </audio>}
    </div>
}

export default RadioPlayer;
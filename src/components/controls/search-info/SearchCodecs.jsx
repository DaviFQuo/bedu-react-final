import React, { useEffect, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api'

const SearchCodecs = ({selectAction}) => {
    const api = new RadioBrowserApi('BeduReactFinalsDEFQ/1.0');

    let [codecs, setCodecs] = useState([]);

    useEffect(() => {
        api.getCodecs()
            .then(data => setCodecs(data))
            .catch(error => console.error(error))
    }, []);

    const updateFilter = (event) => {
        let selectedValue = event.target.value;
        let codecName = '';
        if(selectedValue != -1){
            codecName = codecs[selectedValue].name;
        }
        selectAction(codecName);
    }
    
    return <div className='search-codecs'>
        <label htmlFor='searchCodec'>Codec:</label>
        <select id='searchCodec' name='searchCodec' onChange={updateFilter}>
            <option value={-1}>-- Codecs --</option>
            {codecs.map((codec, i) => (<option key={i} value={i}>{codec.name}({codec.stationcount})</option>))}
        </select>
    </div>
}

export default SearchCodecs;
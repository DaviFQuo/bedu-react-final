import React from 'react';

const SearchCodecs = ({selectAction}) => {
    const RadioBrowser = require('radio-browser')

    let [codecs, setCodecs] = useState([]);

    useEffect(() => {
        RadioBrowser.getCategory('codecs')
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
            {codecs.map((codec, i) => (<option value={i}>{codec.name}({codec.stationcount})</option>))}
        </select>
    </div>
}

export default SearchCodecs;
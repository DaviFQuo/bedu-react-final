import React from 'react';

const RadioInfo = (props) => {
    return <div className='radio-info'>
        <div id='radio-name'>
            Nombre: {props.station.name}
        </div>
        <div id='radio-tags'>
            Tags: {props.station.tags.toString()}
        </div>
    </div>
}

export default RadioInfo;
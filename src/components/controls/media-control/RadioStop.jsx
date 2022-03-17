import React from 'react';

const RadioStop = ({playAudio}) => {
    return <button onClick={() => playAudio(false)}>Stop</button>
}

export default RadioStop;
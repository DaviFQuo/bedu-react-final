import React from 'react';

const RadioPlay = ({playAudio}) => {
    return <button onClick={() => playAudio(true)}>Play</button>
}

export default RadioPlay;
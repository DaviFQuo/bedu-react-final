import React from 'react';

const RadioImage = ({url}) => {
    return <div id='radio-image' className='radio-image-slot'>
        <img src={url} className='radio-image' alt='radio' />
    </div>
}

export default RadioImage;
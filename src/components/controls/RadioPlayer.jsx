import React from 'react';
import RadioImage from './media-control/RadioImage';
import RadioInfo from './media-control/RadioInfo';
import RadioPlay from './media-control/RadioPlay';
import RadioRandom from './media-control/RadioRandom';

class RadioPlayer extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }

    render(){
        return <div className='radio-player'>
            <RadioPlay />
            <RadioStop />
            <RadioImage />
            <RadioInfo />
            <RadioRandom />

            <audio>
                <source src="http://relay.publicdomainradio.org/classical.mp3" type="audio/mpeg" />
            </audio>
        </div>
    }
    
}

export default RadioPlayer;
import React from 'react';

class RadioImage extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }

    render(){
        return <div id='radio-image' className='radio-image-slot'>
            <img src='${this.props.radio.img}' className='radio-image' />
        </div>
    }
    
}

export default RadioImage;
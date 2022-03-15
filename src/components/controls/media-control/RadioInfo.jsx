import React from 'react';

class RadioInfo extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }

    render(){
        return <div className='radio-info'>
            <div id='radio-name' className='row'>
                {this.props.radio.name}
            </div>
            <div id='radio-desc' className='row'>
                {this.props.radio.desc}
            </div>
            <div id='radio-tags' className='row'>
                {this.props.radio.tags}
            </div>
        </div>
    }
    
}

export default RadioInfo;
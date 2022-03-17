import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RadioStop = ({playAudio}) => {
    return  <Menu.Item name='playAudio' onClick={() => playAudio(false)}>
                <Icon name='stop circle outline' />
                Stop
            </Menu.Item>
}

RadioStop.propTypes = {
    station: PropTypes.func
}

export default RadioStop;
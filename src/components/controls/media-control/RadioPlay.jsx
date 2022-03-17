import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RadioPlay = ({playAudio}) => {
    return  <Menu.Item name='playAudio' onClick={() => playAudio(true)}>
                <Icon name='play circle outline' />
                Play
            </Menu.Item>
}

RadioPlay.propTypes = {
    station: PropTypes.func
}

export default RadioPlay;
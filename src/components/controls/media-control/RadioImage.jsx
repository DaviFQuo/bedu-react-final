import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RadioImage = ({url}) => {
    return  <Menu.Item>
                <img src={url} alt='radio' />
            </Menu.Item>
}

RadioImage.propTypes = {
    url: PropTypes.string
}

export default RadioImage;
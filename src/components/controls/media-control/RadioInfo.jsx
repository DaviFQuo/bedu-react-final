import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const RadioInfo = (props) => {
    return <>
            <Menu.Item>
                Nombre: {props.station.name}
            </Menu.Item>
            <Menu.Item>
                Tags: {props.station.tags.toString()}
            </Menu.Item>
        </>
}

RadioInfo.propTypes = {
    station: PropTypes.object
}

export default RadioInfo;
import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';


const Buttons = ({ children, className, type }) => {
    return (
        <Button 
            className={className}
            type={type}
        >
            {children}
        </Button>
    );
};

Buttons.propTypes = {
    children: PropTypes.node, 
    className: PropTypes.string,
    type: PropTypes.string
};

Buttons.defaultProps = {
    className: '',
    type: 'default'
};


export default Buttons;


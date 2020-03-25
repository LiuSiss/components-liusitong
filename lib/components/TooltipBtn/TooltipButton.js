import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from 'antd';

const TooltipButton = props => {
    const { children, tip, placement, ...restProps } = props;
    return (
        <Tooltip 
            placement={placement}
            title={tip} 
        >
            <Button {...restProps} >{children}</Button>
        </Tooltip>
    );
};

TooltipButton.propTypes = {
    children: PropTypes.string,
    placement: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired
};

TooltipButton.defaultProps = {
    placement: 'top'
};

export default TooltipButton;

import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

// restProps：所有antd默认的属性全部接受
const Tooltips = ({ children, title, placement }) => {
    return (
        <Tooltip 
            placement={placement} 
            title={title}
        >
            { children }
        </Tooltip>
    );
};

Tooltips.propTypes = {
    children: PropTypes.element, // 一个 React 元素
    placement: PropTypes.string,
    title: PropTypes.node // 任何可被渲染的元素（包括数字、字符串、子元素或数组）。
};

Tooltips.defaultProps = {
    placement: 'top',
    title: ''
};


export default Tooltips;

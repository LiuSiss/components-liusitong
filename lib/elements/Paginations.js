import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

// restProps：所有antd默认的属性全部接受
const Paginations = ({ pageSizeOptions, pagination, onChange, ...restProps }) => {
    return (
        <Pagination
            current={pagination.current} 
            onChange={onChange}
            onShowSizeChange={onChange}
            pageSize={pagination.pageSize}
            pageSizeOptions={pageSizeOptions}
            showQuickJumper
            showSizeChanger
            showTotal={(e)=>{return "共 "+e+" 条";}}
            {...restProps}
        />
    );
};
  
Paginations.propTypes = {
    onChange: PropTypes.func.isRequired,
    pageSizeOptions: PropTypes.array, // 表头定义
    pagination: PropTypes.shape({
        current: PropTypes.number.isRequired, // 当前第几页
        pageSize: PropTypes.number.isRequired // 一页多少条
    }).isRequired
};
  
Paginations.defaultProps = {
    pageSizeOptions: ['10', '50', '100', '200', '500'],
    pagination: {
        current: 1,
        pageSize: 10
    }
};

export default Paginations;

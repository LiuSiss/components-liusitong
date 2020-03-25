import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

// restProps：所有antd默认的属性全部接受
const Tables = ({ columns, dataSource, rowKey, isShowPagination, onChange, ...restProps }) => {
    return (
        <Table 
            {...restProps}
            columns={columns} 
            dataSource={dataSource}
            onChange={onChange}
            pagination={isShowPagination}
            rowKey={(data) => data.id || data.key || data[rowKey]}
        />
    );
};

Tables.propTypes = {
    columns: PropTypes.array.isRequired, // 表头定义
    dataSource: PropTypes.array.isRequired, // 数据
    isShowPagination: PropTypes.bool, // 默认不显示分页，分页单写
    onChange: PropTypes.func.isRequired,
    rowKey: PropTypes.string // 唯一表示 ，如果不传则去dataSource列表中的id
};

Tables.defaultProps = {
    columns: [],
    dataSource: [],
    isShowPagination: false
};


export default Tables;


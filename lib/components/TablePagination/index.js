import React from 'react';
import PropTypes from 'prop-types';
import Tables from '../../elements/Tables';
import Paginations from '../../elements/Paginations';
import Tooltips from '../../elements/Tooltips';
import moment from 'moment';
import 'moment/locale/zh-cn';

class TablePagination extends React.Component {
    constructor(props) {
        super(props);
        this.getNewColumn = this.getNewColumn.bind(this);
        this._columnRender = this._columnRender.bind(this);
        this._requireSetDefaultWidth = this._requireSetDefaultWidth.bind(this);
        this.state = {
            newColumns: [],
            isRender: 0 // 渲染次数
        };
    }
    componentDidMount() {
        this.getNewColumn();
    }
    _columnRender(text, record, index, item) {
        if (item.render ) {
            return item.render(text, record,index);
        } else if (typeof text !== 'object') {
            let content = text, tipText = text;
            if (typeof text === 'undefined' || text.length === 0 || (text !== 0 && !text) ) {
                content = '--';
            }
            // TODO: 在业务组件用装饰者再包一层 //需要字典翻译  renderDic指字典code
            // if (item.renderDic) {
            //     content = getItemforLabel(item.renderDic, text) || '--';
            //     tipText = getItemforLabel(item.renderDic, text);
            
            // } else 
            //需要日期翻译  dateFormat指日期格式
            if (item.dateFormat) {
                let { dateFormat } = item;
                content = (text && moment(text).format(dateFormat)) || '--';
                tipText = text && moment(text).format(dateFormat);
            } else if (item.numberToFixed){
                content = ((text || text===0) && Number(text).toFixed(item.numberToFixed)) || '--';
                tipText = (text || text===0) && Number(text).toFixed(item.numberToFixed);
            }
            return (
                <Tooltips 
                    placement="topLeft" 
                    title={tipText}
                >
                    <span 
                        onClick={() => item.clickEve && item.clickEve(record)}
                        style={this.props.itemClickStyle && this.props.itemClickStyle(item)}
                    >{content}</span>
                </Tooltips>
            );
        } else {
            return <span>--</span>;
        }
    }
    _requireSetDefaultWidth(columns) {
        let requireSetDefaultWidth = false, noWidthColumnsNum = 0 ;//未设置宽度的项数目
        let wholeWidth = this.tablePaginationRef && this.tablePaginationRef.clientWidth; // tabel总宽度
        columns.forEach(item => {
            if (item.width && Number(item.width)) {
                wholeWidth -= Number(item.width);
            } else {
                noWidthColumnsNum++;
            }
        });
        if (wholeWidth && (wholeWidth/noWidthColumnsNum < 120)) {
            requireSetDefaultWidth = true;
        }
        return requireSetDefaultWidth;
    }
    // TODO: 在业务组件用装饰者再包一层 
    itemStyle(item) {
        if (item.clickEve) {
            return {
                color: '#0264FF',
                textDecoration: 'underline'
            };
        } else if (item.color) {
            return {
                color: item.color
            };
        } else {
            return {};
        }
    }
    getNewColumn() {
        let { columns, optionPermission, fixed, opRender } = this.props;
        let _fixed = (fixed === false && fixed !== 'right') ? fixed : 'right';
        if (optionPermission && optionPermission === true) {
            // 确保只渲染一次 
            if (this.state.isRender < 2) {
                this.setState({ isRender: this.state.isRender + 1 }, () => {
                    columns.push({
                        title: '操作',
                        dataIndex: 'op',
                        key: 'op',
                        fixed: _fixed,
                        width: 200,
                        render: (text, record) => opRender && opRender('inner', record)
                    });
                });
            }
        }
        //计算页面宽度和列宽度，是否需要设置宽度，若平均值大于120则不设置
        let newColumns = columns.map(item => {
            if (this._requireSetDefaultWidth(columns)) {
                return {
                    ...item, align: item.align || 'center', ellipsis: true, width: item.width || 120,
                    render: (text, record, index) => this._columnRender(text, record, index, item)
                };
            } else {
                return { 
                    ...item, align: item.align || 'center', ellipsis: true,
                    render: (text, record, index) => this._columnRender(text, record, index, item)
                };
            }
        });
        this.setState({ newColumns });
    }
    
    render() {
        const { isShowPagination } = this.props;
        return (
            <div ref={ref => this.tablePaginationRef = ref}>
                <Tables 
                    {...this.props} 
                    columns={this.state.newColumns}
                    isShowPagination={isShowPagination}
                />
                {
                    !isShowPagination &&
                    <Paginations {...this.props} />
                }
            </div>
        );
    }
}
TablePagination.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            numberToFixed: PropTypes.number, // 数字保留几位小数
            dateFormat: PropTypes.string, // 日期转为什么格式
            clickEve: PropTypes.func // 连接点击事件
        })
    ).isRequired, // 表头定义
    
    fixed: PropTypes.string,
    isShowPagination: PropTypes.bool, // 默认不显示分页，分页单写
    itemClickStyle: PropTypes.func, // 点击事件的样式
    opRender: PropTypes.func, // 操作列表对应操作
    optionPermission: PropTypes.bool, // 根据权限看是否有操作列
};

TablePagination.defaultProps = {
    fixed: 'right', // 某一列是否固定
    isShowPagination: false,
    optionPermission: false
};

export default TablePagination;

"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tables = _interopRequireDefault(require("../../elements/Tables"));

var _Paginations = _interopRequireDefault(require("../../elements/Paginations"));

var _Tooltips = _interopRequireDefault(require("../../elements/Tooltips"));

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/zh-cn");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; (0, _forEach.default)(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context5; (0, _forEach.default)(_context5 = ownKeys(Object(source))).call(_context5, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var TablePagination = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TablePagination, _React$Component);

  function TablePagination(props) {
    var _context, _context2, _context3;

    var _this;

    (0, _classCallCheck2.default)(this, TablePagination);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TablePagination).call(this, props));
    _this.getNewColumn = (0, _bind.default)(_context = _this.getNewColumn).call(_context, (0, _assertThisInitialized2.default)(_this));
    _this._columnRender = (0, _bind.default)(_context2 = _this._columnRender).call(_context2, (0, _assertThisInitialized2.default)(_this));
    _this._requireSetDefaultWidth = (0, _bind.default)(_context3 = _this._requireSetDefaultWidth).call(_context3, (0, _assertThisInitialized2.default)(_this));
    _this.state = {
      newColumns: [],
      isRender: 0 // 渲染次数

    };
    return _this;
  }

  (0, _createClass2.default)(TablePagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNewColumn();
    }
  }, {
    key: "_columnRender",
    value: function _columnRender(text, record, index, item) {
      if (item.render) {
        return item.render(text, record, index);
      } else if ((0, _typeof2.default)(text) !== 'object') {
        var content = text,
            tipText = text;

        if (typeof text === 'undefined' || text.length === 0 || text !== 0 && !text) {
          content = '--';
        } // TODO: 在业务组件用装饰者再包一层 //需要字典翻译  renderDic指字典code
        // if (item.renderDic) {
        //     content = getItemforLabel(item.renderDic, text) || '--';
        //     tipText = getItemforLabel(item.renderDic, text);
        // } else 
        //需要日期翻译  dateFormat指日期格式


        if (item.dateFormat) {
          var dateFormat = item.dateFormat;
          content = text && (0, _moment.default)(text).format(dateFormat) || '--';
          tipText = text && (0, _moment.default)(text).format(dateFormat);
        } else if (item.numberToFixed) {
          content = (text || text === 0) && Number(text).toFixed(item.numberToFixed) || '--';
          tipText = (text || text === 0) && Number(text).toFixed(item.numberToFixed);
        }

        return _react.default.createElement(_Tooltips.default, {
          placement: "topLeft",
          title: tipText
        }, _react.default.createElement("span", {
          onClick: function onClick() {
            return item.clickEve && item.clickEve(record);
          },
          style: this.props.itemClickStyle && this.props.itemClickStyle(item)
        }, content));
      } else {
        return _react.default.createElement("span", null, "--");
      }
    }
  }, {
    key: "_requireSetDefaultWidth",
    value: function _requireSetDefaultWidth(columns) {
      var requireSetDefaultWidth = false,
          noWidthColumnsNum = 0; //未设置宽度的项数目

      var wholeWidth = this.tablePaginationRef && this.tablePaginationRef.clientWidth; // tabel总宽度

      (0, _forEach.default)(columns).call(columns, function (item) {
        if (item.width && Number(item.width)) {
          wholeWidth -= Number(item.width);
        } else {
          noWidthColumnsNum++;
        }
      });

      if (wholeWidth && wholeWidth / noWidthColumnsNum < 120) {
        requireSetDefaultWidth = true;
      }

      return requireSetDefaultWidth;
    } // TODO: 在业务组件用装饰者再包一层 

  }, {
    key: "itemStyle",
    value: function itemStyle(item) {
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
  }, {
    key: "getNewColumn",
    value: function getNewColumn() {
      var _this2 = this;

      var _this$props = this.props,
          columns = _this$props.columns,
          optionPermission = _this$props.optionPermission,
          fixed = _this$props.fixed,
          opRender = _this$props.opRender;

      var _fixed = fixed === false && fixed !== 'right' ? fixed : 'right';

      if (optionPermission && optionPermission === true) {
        // 确保只渲染一次 
        if (this.state.isRender < 2) {
          this.setState({
            isRender: this.state.isRender + 1
          }, function () {
            columns.push({
              title: '操作',
              dataIndex: 'op',
              key: 'op',
              fixed: _fixed,
              width: 200,
              render: function render(text, record) {
                return opRender && opRender('inner', record);
              }
            });
          });
        }
      } //计算页面宽度和列宽度，是否需要设置宽度，若平均值大于120则不设置


      var newColumns = (0, _map.default)(columns).call(columns, function (item) {
        if (_this2._requireSetDefaultWidth(columns)) {
          return _objectSpread({}, item, {
            align: item.align || 'center',
            ellipsis: true,
            width: item.width || 120,
            render: function render(text, record, index) {
              return _this2._columnRender(text, record, index, item);
            }
          });
        } else {
          return _objectSpread({}, item, {
            align: item.align || 'center',
            ellipsis: true,
            render: function render(text, record, index) {
              return _this2._columnRender(text, record, index, item);
            }
          });
        }
      });
      this.setState({
        newColumns: newColumns
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isShowPagination = this.props.isShowPagination;
      return _react.default.createElement("div", {
        ref: function ref(_ref) {
          return _this3.tablePaginationRef = _ref;
        }
      }, _react.default.createElement(_Tables.default, (0, _extends2.default)({}, this.props, {
        columns: this.state.newColumns,
        isShowPagination: isShowPagination
      })), !isShowPagination && _react.default.createElement(_Paginations.default, this.props));
    }
  }]);
  return TablePagination;
}(_react.default.Component);

TablePagination.propTypes = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    numberToFixed: _propTypes.default.number,
    // 数字保留几位小数
    dateFormat: _propTypes.default.string,
    // 日期转为什么格式
    clickEve: _propTypes.default.func // 连接点击事件

  })).isRequired,
  // 表头定义
  fixed: _propTypes.default.string,
  isShowPagination: _propTypes.default.bool,
  // 默认不显示分页，分页单写
  itemClickStyle: _propTypes.default.func,
  // 点击事件的样式
  opRender: _propTypes.default.func,
  // 操作列表对应操作
  optionPermission: _propTypes.default.bool // 根据权限看是否有操作列

};
TablePagination.defaultProps = {
  fixed: 'right',
  // 某一列是否固定
  isShowPagination: false,
  optionPermission: false
};
var _default = TablePagination;
exports.default = _default;
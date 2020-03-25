"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("antd/lib/table/style/css");

var _table = _interopRequireDefault(require("antd/lib/table"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// restProps：所有antd默认的属性全部接受
var Tables = function Tables(_ref) {
  var columns = _ref.columns,
      dataSource = _ref.dataSource,
      _rowKey = _ref.rowKey,
      isShowPagination = _ref.isShowPagination,
      onChange = _ref.onChange,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["columns", "dataSource", "rowKey", "isShowPagination", "onChange"]);
  return _react.default.createElement(_table.default, (0, _extends2.default)({}, restProps, {
    columns: columns,
    dataSource: dataSource,
    onChange: onChange,
    pagination: isShowPagination,
    rowKey: function rowKey(data) {
      return data.id || data.key || data[_rowKey];
    }
  }));
};

Tables.propTypes = {
  columns: _propTypes.default.array.isRequired,
  // 表头定义
  dataSource: _propTypes.default.array.isRequired,
  // 数据
  isShowPagination: _propTypes.default.bool,
  // 默认不显示分页，分页单写
  onChange: _propTypes.default.func.isRequired,
  rowKey: _propTypes.default.string // 唯一表示 ，如果不传则去dataSource列表中的id

};
Tables.defaultProps = {
  columns: [],
  dataSource: [],
  isShowPagination: false
};
var _default = Tables;
exports.default = _default;
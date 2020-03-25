"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("antd/lib/pagination/style/css");

var _pagination = _interopRequireDefault(require("antd/lib/pagination"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// restProps：所有antd默认的属性全部接受
var Paginations = function Paginations(_ref) {
  var pageSizeOptions = _ref.pageSizeOptions,
      pagination = _ref.pagination,
      onChange = _ref.onChange,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["pageSizeOptions", "pagination", "onChange"]);
  return _react.default.createElement(_pagination.default, (0, _extends2.default)({
    current: pagination.current,
    onChange: onChange,
    onShowSizeChange: onChange,
    pageSize: pagination.pageSize,
    pageSizeOptions: pageSizeOptions,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: function showTotal(e) {
      return "共 " + e + " 条";
    }
  }, restProps));
};

Paginations.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  pageSizeOptions: _propTypes.default.array,
  // 表头定义
  pagination: _propTypes.default.shape({
    current: _propTypes.default.number.isRequired,
    // 当前第几页
    pageSize: _propTypes.default.number.isRequired // 一页多少条

  }).isRequired
};
Paginations.defaultProps = {
  pageSizeOptions: ['10', '50', '100', '200', '500'],
  pagination: {
    current: 1,
    pageSize: 10
  }
};
var _default = Paginations;
exports.default = _default;
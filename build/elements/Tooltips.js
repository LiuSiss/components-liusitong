"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("antd/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// restProps：所有antd默认的属性全部接受
var Tooltips = function Tooltips(_ref) {
  var children = _ref.children,
      title = _ref.title,
      placement = _ref.placement;
  return _react.default.createElement(_tooltip.default, {
    placement: placement,
    title: title
  }, children);
};

Tooltips.propTypes = {
  children: _propTypes.default.element,
  // 一个 React 元素
  placement: _propTypes.default.string,
  title: _propTypes.default.node // 任何可被渲染的元素（包括数字、字符串、子元素或数组）。

};
Tooltips.defaultProps = {
  placement: 'top',
  title: ''
};
var _default = Tooltips;
exports.default = _default;
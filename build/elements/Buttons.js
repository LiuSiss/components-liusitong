"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Buttons = function Buttons(_ref) {
  var children = _ref.children,
      className = _ref.className,
      type = _ref.type;
  return _react.default.createElement(_button.default, {
    className: className,
    type: type
  }, children);
};

Buttons.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  type: _propTypes.default.string
};
Buttons.defaultProps = {
  className: '',
  type: 'default'
};
var _default = Buttons;
exports.default = _default;
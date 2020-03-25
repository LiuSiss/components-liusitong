"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

require("antd/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var TooltipButton = function TooltipButton(props) {
  var children = props.children,
      tip = props.tip,
      placement = props.placement,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "tip", "placement"]);
  return _react.default.createElement(_tooltip.default, {
    placement: placement,
    title: tip
  }, _react.default.createElement(_button.default, restProps, children));
};

TooltipButton.propTypes = {
  children: _propTypes.default.string,
  placement: _propTypes.default.string.isRequired,
  tip: _propTypes.default.string.isRequired
};
TooltipButton.defaultProps = {
  placement: 'top'
};
var _default = TooltipButton;
exports.default = _default;
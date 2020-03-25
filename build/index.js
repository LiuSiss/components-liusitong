"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Buttons = _interopRequireDefault(require("./elements/Buttons"));

var _Tables = _interopRequireDefault(require("./elements/Tables"));

var _Paginations = _interopRequireDefault(require("./elements/Paginations"));

var _TablePagination = _interopRequireDefault(require("./components/TablePagination"));

var _Tooltips = _interopRequireDefault(require("./elements/Tooltips"));

var _TooltipButton = _interopRequireDefault(require("./components/TooltipBtn/TooltipButton"));

module.exports = {
  Buttons: _Buttons.default,
  Tables: _Tables.default,
  Paginations: _Paginations.default,
  TablePagination: _TablePagination.default,
  Tooltips: _Tooltips.default,
  TooltipButton: _TooltipButton.default
};
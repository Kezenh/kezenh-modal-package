"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
exports.openModal = openModal;

require("./style.css");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(_ref) {
  let {
    text
  } = _ref;

  function closeModal() {
    document.getElementById("modalMask").style.display = "none";
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "modalMask"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement("div", {
    className: "closeBox",
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "close",
    fill: "white",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
  })))));
}

function openModal() {
  document.getElementById("modalMask").style.display = "flex";
}
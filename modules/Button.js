"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _react = _interopRequireDefault(require("react"));

var _photon = require("../src/js/photon.js");

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 * @param {string} props.variant - Type of button to use
 * @param {string} props.color - Color of the button, ColorQuery
 * @param {string} props.textColor - Text color of the button, ColorQuery
 * @param {string} props.size - Size class of the button, dense | large
 * @param {boolean} props.disabled - Disable the button
 * @param {string|boolean} props.waves - Waves, if false no waves, else color query
 */
function Button(_ref) {
  var _classnames;

  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "raised" : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "" : _ref$color,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? "" : _ref$textColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "" : _ref$size,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$waves = _ref.waves,
      waves = _ref$waves === void 0 ? true : _ref$waves,
      props = _objectWithoutProperties(_ref, ["className", "children", "variant", "color", "textColor", "size", "disabled", "waves"]);

  // Get element class
  var classes = (0, _classnames2["default"])("btn", (_classnames = {}, _defineProperty(_classnames, variant, variant !== ""), _defineProperty(_classnames, color, color !== ""), _defineProperty(_classnames, (0, _photon.prefixColorQuery)("text", textColor), textColor !== ""), _defineProperty(_classnames, size, size !== ""), _defineProperty(_classnames, "disabled", disabled), _defineProperty(_classnames, "waves-effect", waves !== false), _defineProperty(_classnames, (0, _photon.prefixColorQuery)("waves", typeof waves === "string" ? waves : ""), typeof waves === "string"), _classnames), className).replace(/\s\s+/g, " "); // Render component

  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: classes
  }, props), children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = Banner;
exports.BannerActions = BannerActions;
exports.BannerContent = BannerContent;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 */
function Banner(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  // Get element class
  var classes = (0, _classnames["default"])("banner", className).replace(/\s\s+/g, " "); // Render component

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: classes
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container row"
  }, children));
}
/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 */


function BannerActions(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? "" : _ref2$className,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      props = _objectWithoutProperties(_ref2, ["className", "children"]);

  // Get element class
  var classes = (0, _classnames["default"])("banner-actions", className).replace(/\s\s+/g, " "); // Render component

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: classes
  }, props), children);
}
/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 */


function BannerContent(_ref3) {
  var _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? "" : _ref3$className,
      _ref3$children = _ref3.children,
      children = _ref3$children === void 0 ? null : _ref3$children,
      props = _objectWithoutProperties(_ref3, ["className", "children"]);

  // Get element class
  var classes = (0, _classnames["default"])("banner-content", className).replace(/\s\s+/g, " "); // Render component

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: classes
  }, props), children);
}
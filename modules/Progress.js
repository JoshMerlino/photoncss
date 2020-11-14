"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = Progress;
exports.Indeterminate = Indeterminate;
exports.Spinner = void 0;

var _react = _interopRequireDefault(require("react"));

var _photon = _interopRequireDefault(require("../src/js/photon.js"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner = /*#__PURE__*/function (_React$Component) {
  _inherits(Spinner, _React$Component);

  var _super = _createSuper(Spinner);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _super.apply(this, arguments);
  }

  _createClass(Spinner, [{
    key: "serialize",
    // Define default props
    // Serialize the props object into a series of classes
    value: function serialize() {
      var _this$props = this.props,
          color = _this$props.color,
          size = _this$props.size,
          width = _this$props.width,
          rest = _objectWithoutProperties(_this$props, ["color", "size", "width"]);

      this.rest = rest;
      return ["spinner"].concat(_toConsumableArray((rest.className || "").split(" ")), [color]).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "spinner-wrapper ".concat(this.props.size || "")
      }, /*#__PURE__*/_react["default"].createElement("svg", _extends({
        className: this.serialize()
      }, this.rest, {
        width: "65",
        height: "65",
        viewBox: "0 0 66 66",
        xmlns: "http://www.w3.org/2000/svg"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        className: "path",
        fill: "none",
        strokeWidth: this.props.width,
        strokeLinecap: "round",
        cx: "33",
        cy: "33",
        r: "30"
      })));
    }
  }]);

  return Spinner;
}(_react["default"].Component);

exports.Spinner = Spinner;

_defineProperty(Spinner, "defaultProps", {
  color: "primary",
  size: 64,
  width: 6
});

function Progress(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? .5 : _ref$value,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "primary" : _ref$variant;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("progress", variant)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "determinate",
    style: {
      width: "".concat(value * 100, "%")
    }
  }));
}

function Indeterminate(_ref2) {
  var _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? "primary" : _ref2$variant;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("progress", variant)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "indeterminate"
  }));
}
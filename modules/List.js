"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subheader = exports.ListItem = exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

var _photon = _interopRequireDefault(require("../src/js/photon.js"));

var _Checkbox = require("./Checkbox");

var _Radio = require("./Radio");

var _Switch = require("./Switch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "serialize",
    // Serialize the props object into a series of classes
    value: function serialize() {
      var _this$props = this.props,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["className"]);

      this.rest = rest;
      return ["list"].concat(_toConsumableArray((className || "").split(" "))).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("ul", _extends({
        className: this.serialize()
      }, this.rest), this.props.children);
    }
  }]);

  return List;
}(_react["default"].Component);

exports.List = List;

var ListItem = /*#__PURE__*/function (_React$Component2) {
  _inherits(ListItem, _React$Component2);

  var _super2 = _createSuper(ListItem);

  function ListItem() {
    var _this;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "uuid", _photon["default"].guid());

    return _this;
  }

  _createClass(ListItem, [{
    key: "serialize",
    // Serialize the props object into a series of classes
    value: function serialize() {
      var _this$props2 = this.props,
          subtitle = _this$props2.subtitle,
          waves = _this$props2.waves,
          leadingIcon = _this$props2.leadingIcon,
          trailingIcon = _this$props2.trailingIcon,
          meta = _this$props2.meta,
          checkbox = _this$props2.checkbox,
          radio = _this$props2.radio,
          rounded = _this$props2.rounded,
          active = _this$props2.active,
          rest = _objectWithoutProperties(_this$props2, ["subtitle", "waves", "leadingIcon", "trailingIcon", "meta", "checkbox", "radio", "rounded", "active"]);

      this.rest = rest;
      return ["list-item"].concat(_toConsumableArray((rest.className || "").split(" ")), [subtitle ? "contains-subtitle" : "", rounded ? "rounded" : "", active ? "active" : "", waves !== false ? "waves-effect".concat(waves !== true ? " ".concat(_photon["default"].prefixColorQuery("waves", waves)) : "") : ""]).join(" ").replace(/\s+(?=\s)/g, "").trim();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $("#".concat(this.props.id || this.uuid)).click(this.props.onClick);
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("li", _extends({
        className: this.serialize()
      }, this.rest, {
        id: this.props.id || this.uuid
      }), this.props.leadingIcon && /*#__PURE__*/_react["default"].createElement("i", {
        className: "material-icons"
      }, this.props.leadingIcon), /*#__PURE__*/_react["default"].createElement("div", {
        className: "item-name"
      }, this.props.children, this.props.subtitle && /*#__PURE__*/_react["default"].createElement("div", {
        className: "subtitle"
      }, this.props.subtitle)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "meta"
      }, this.props.checkbox && /*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox, this.props.checkbox !== true ? this.props.checkbox : {}), this.props.radio && /*#__PURE__*/_react["default"].createElement(_Radio.Radio, this.props.radio !== true ? this.props.radio : {}), this.props["switch"] && /*#__PURE__*/_react["default"].createElement(_Switch.Switch, this.props["switch"] !== true ? this.props["switch"] : {}), this.props.meta, this.props.trailingIcon && /*#__PURE__*/_react["default"].createElement("i", {
        className: "material-icons"
      }, this.props.trailingIcon)));
    }
  }]);

  return ListItem;
}(_react["default"].Component);

exports.ListItem = ListItem;

_defineProperty(ListItem, "defaultProps", {
  waves: true,
  subtitle: false
});

var Subheader = /*#__PURE__*/function (_React$Component3) {
  _inherits(Subheader, _React$Component3);

  var _super3 = _createSuper(Subheader);

  function Subheader() {
    _classCallCheck(this, Subheader);

    return _super3.apply(this, arguments);
  }

  _createClass(Subheader, [{
    key: "serialize",
    // Serialize the props object into a series of classes
    value: function serialize() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          rest = _objectWithoutProperties(_this$props3, ["className"]);

      this.rest = rest;
      return ["subheader"].concat(_toConsumableArray((className || "").split(" "))).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("li", _extends({
        className: this.serialize()
      }, this.rest), this.props.children);
    }
  }]);

  return Subheader;
}(_react["default"].Component);

exports.Subheader = Subheader;
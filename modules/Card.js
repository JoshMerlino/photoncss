"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardActions = exports.CardMedia = exports.CardTitle = exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _photon = _interopRequireDefault(require("../src/js/photon.js"));

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

var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card() {
    _classCallCheck(this, Card);

    return _super.apply(this, arguments);
  }

  _createClass(Card, [{
    key: "serialize",
    // Define default props
    // Serialize the props object into a series of classes
    value: function serialize() {
      var _this$props = this.props,
          variant = _this$props.variant,
          width = _this$props.width,
          rest = _objectWithoutProperties(_this$props, ["variant", "width"]);

      this.rest = rest;
      return ["card"].concat(_toConsumableArray((rest.className || "").split(" ")), [variant ? variant : ""]).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: this.serialize()
      }, this.rest), this.props.children);
    }
  }]);

  return Card;
}(_react["default"].Component);

exports.Card = Card;

_defineProperty(Card, "defaultProps", {
  variant: false
});

var CardTitle = /*#__PURE__*/function (_React$Component2) {
  _inherits(CardTitle, _React$Component2);

  var _super2 = _createSuper(CardTitle);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _super2.apply(this, arguments);
  }

  _createClass(CardTitle, [{
    key: "serialize",
    // Define default props
    // Serialize the props object into a series of classes
    value: function serialize() {
      return ["card-title"].concat(_toConsumableArray((this.props.className || "").split(" ")), [this.props.textColor !== false ? _photon["default"].prefixColorQuery(this.props.textColor) : "", this.props.subtitle !== false ? "contains-subtitle" : "", this.props.leadingImage !== false ? "contains-image" : ""]).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: this.serialize(),
        style: this.props.style || {}
      }, this.props.leadingImage && /*#__PURE__*/_react["default"].createElement("img", {
        src: this.props.leadingImage,
        alt: ""
      }), /*#__PURE__*/_react["default"].createElement("div", null, this.props.children), this.props.subtitle !== false ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "subtitle"
      }, this.props.subtitle) : null);
    }
  }]);

  return CardTitle;
}(_react["default"].Component);

exports.CardTitle = CardTitle;

_defineProperty(CardTitle, "defaultProps", {
  subtitle: false,
  textColor: false,
  leadingImage: false
});

var CardMedia = /*#__PURE__*/function (_React$Component3) {
  _inherits(CardMedia, _React$Component3);

  var _super3 = _createSuper(CardMedia);

  function CardMedia() {
    _classCallCheck(this, CardMedia);

    return _super3.apply(this, arguments);
  }

  _createClass(CardMedia, [{
    key: "serialize",
    // Serialize the props object into a series of classes
    value: function serialize() {
      return ["card-media"].concat(_toConsumableArray((this.props.className || "").split(" "))).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("img", _extends({
        className: this.serialize()
      }, this.props));
    }
  }]);

  return CardMedia;
}(_react["default"].Component);

exports.CardMedia = CardMedia;

var CardActions = /*#__PURE__*/function (_React$Component4) {
  _inherits(CardActions, _React$Component4);

  var _super4 = _createSuper(CardActions);

  function CardActions() {
    _classCallCheck(this, CardActions);

    return _super4.apply(this, arguments);
  }

  _createClass(CardActions, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card-actions"
      }, this.props.children);
    }
  }]);

  return CardActions;
}(_react["default"].Component);

exports.CardActions = CardActions;
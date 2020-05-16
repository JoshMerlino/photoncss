"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerContent = exports.BannerActions = exports.Banner = void 0;

var _react = _interopRequireDefault(require("react"));

var _photon = _interopRequireDefault(require("../src/js/photon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Banner = /*#__PURE__*/function (_React$Component) {
  _inherits(Banner, _React$Component);

  var _super = _createSuper(Banner);

  function Banner() {
    _classCallCheck(this, Banner);

    return _super.apply(this, arguments);
  }

  _createClass(Banner, [{
    key: "serialize",
    // Serialize the props object into a series of classes
    value: function serialize() {
      var rest = _extends({}, this.props);

      this.rest = rest;
      return ["banner"].concat(_toConsumableArray((rest.className || "").split(" "))).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: this.serialize()
      }, this.rest), /*#__PURE__*/_react["default"].createElement("div", {
        className: "container row"
      }, this.props.children));
    }
  }]);

  return Banner;
}(_react["default"].Component);

exports.Banner = Banner;

var BannerActions = /*#__PURE__*/function (_React$Component2) {
  _inherits(BannerActions, _React$Component2);

  var _super2 = _createSuper(BannerActions);

  function BannerActions() {
    _classCallCheck(this, BannerActions);

    return _super2.apply(this, arguments);
  }

  _createClass(BannerActions, [{
    key: "serialize",
    // Serialize the props object into a series of classes
    value: function serialize() {
      var rest = _extends({}, this.props);

      this.rest = rest;
      return ["banner-actions"].concat(_toConsumableArray((rest.className || "").split(" "))).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: this.serialize()
      }, this.rest), this.props.children);
    }
  }]);

  return BannerActions;
}(_react["default"].Component);

exports.BannerActions = BannerActions;

var BannerContent = /*#__PURE__*/function (_React$Component3) {
  _inherits(BannerContent, _React$Component3);

  var _super3 = _createSuper(BannerContent);

  function BannerContent() {
    _classCallCheck(this, BannerContent);

    return _super3.apply(this, arguments);
  }

  _createClass(BannerContent, [{
    key: "serialize",
    // Serialize the props object into a series of classes
    value: function serialize() {
      var rest = _extends({}, this.props);

      this.rest = rest;
      return ["banner-content"].concat(_toConsumableArray((rest.className || "").split(" "))).join(" ").replace(/\s+(?=\s)/g, "").trim();
    } // Render component

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: this.serialize()
      }, this.rest), this.props.children);
    }
  }]);

  return BannerContent;
}(_react["default"].Component);

exports.BannerContent = BannerContent;
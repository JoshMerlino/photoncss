"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardActions = exports.CardOverline = exports.CardBody = exports.CardSubtitle = exports.CardSubheader = exports.CardTitle = exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
/* ****************************************** */
function Card(_a) {
    var children = _a.children, display = _a.display, variant = _a.variant, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "display", "variant", "className"]);
    var classes = classnames_1.default("photon-card", "variant-" + variant, "display-" + display, className);
    return react_1.default.createElement("div", __assign({ tabIndex: 0, className: classes }, props), children);
}
exports.Card = Card;
Card.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    variant: prop_types_1.default.oneOf(["raised", "outlined"]),
    display: prop_types_1.default.oneOf(["inline", "block"]),
};
Card.defaultProps = {
    children: null,
    variant: "raised",
    display: "block",
};
/* ****************************************** */
function CardTitle(_a) {
    var children = _a.children, subtitle = _a.subtitle, seperated = _a.seperated, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "subtitle", "seperated", "className"]);
    var classes = classnames_1.default("card-title", seperated && "seperated", className);
    return (react_1.default.createElement("div", __assign({ className: classes }, props),
        react_1.default.createElement("h1", null, children),
        subtitle !== "" && react_1.default.createElement("h2", null, subtitle)));
}
exports.CardTitle = CardTitle;
CardTitle.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    subtitle: prop_types_1.default.string,
    seperated: prop_types_1.default.bool
};
CardTitle.defaultProps = {
    children: null,
    subtitle: "",
    seperated: true
};
/* ****************************************** */
function CardSubheader(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("secondary", className);
    return react_1.default.createElement("p", __assign({ className: classes }, props), children);
}
exports.CardSubheader = CardSubheader;
CardSubheader.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardSubheader.defaultProps = {
    children: null
};
/* ****************************************** */
function CardSubtitle(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("card-subtitle", className);
    return react_1.default.createElement("h2", __assign({ className: classes }, props), children);
}
exports.CardSubtitle = CardSubtitle;
CardSubtitle.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardSubtitle.defaultProps = {
    children: null
};
/* ****************************************** */
function CardBody(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("card-body", className);
    return react_1.default.createElement("p", __assign({ className: classes }, props), children);
}
exports.CardBody = CardBody;
CardBody.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardBody.defaultProps = {
    children: null
};
/* ****************************************** */
function CardOverline(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("overline", className);
    return react_1.default.createElement("p", __assign({ className: classes }, props), children);
}
exports.CardOverline = CardOverline;
CardOverline.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardOverline.defaultProps = {
    children: null
};
/* ****************************************** */
function CardActions(_a) {
    var children = _a.children, direction = _a.direction, seperated = _a.seperated, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "direction", "seperated", "className"]);
    var classes = classnames_1.default("card-actions", "direction-" + direction, seperated && "seperated", className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
}
exports.CardActions = CardActions;
CardActions.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    direction: prop_types_1.default.oneOf(["left", "right"]),
    seperated: prop_types_1.default.bool
};
CardActions.defaultProps = {
    children: null,
    direction: "left",
    seperated: true
};
//# sourceMappingURL=Card.js.map
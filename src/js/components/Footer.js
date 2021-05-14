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
exports.FooterCopyright = exports.Footer = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
/* ****************************************** */
function Footer(_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("footer", className);
    return react_1.default.createElement("footer", __assign({ className: classes }, props), children);
}
exports.Footer = Footer;
Footer.propTypes = {
    children: prop_types_1.default.any
};
Footer.defaultProps = {
    children: null
};
/* ****************************************** */
function FooterCopyright(_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("footer-copyright", className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
}
exports.FooterCopyright = FooterCopyright;
FooterCopyright.propTypes = {
    children: prop_types_1.default.any
};
FooterCopyright.defaultProps = {
    children: null
};
//# sourceMappingURL=Footer.js.map
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
exports.FooterBody = exports.FooterHeader = exports.FooterCopyright = exports.Footer = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var Layout_1 = require("./Layout");
var guid_1 = __importDefault(require("../util/guid"));
/* ****************************************** */
function Footer(_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var id = guid_1.default();
    var classes = classnames_1.default("footer", className);
    function resize() {
        var footer = $("#" + id);
        var main = footer.siblings("main");
        if (main.length === 0)
            return;
        main.css("min-height", window.innerHeight - footer[0].clientHeight - 24);
    }
    setImmediate(function () {
        (function frame() {
            if ($("#" + id).length === 0)
                return;
            resize();
            requestAnimationFrame(frame);
        }());
    });
    return react_1.default.createElement("footer", __assign({ className: classes }, props, { id: id }), children);
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
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("footer-copyright", className);
    return (react_1.default.createElement("div", __assign({ className: classes }, props),
        react_1.default.createElement(Layout_1.Container, null, children)));
}
exports.FooterCopyright = FooterCopyright;
FooterCopyright.propTypes = {
    children: prop_types_1.default.any
};
FooterCopyright.defaultProps = {
    children: null
};
/* ****************************************** */
function FooterHeader(_a) {
    var children = _a.children;
    return (react_1.default.createElement(Layout_1.Container, null,
        react_1.default.createElement("h2", { style: { marginLeft: 0 } }, children)));
}
exports.FooterHeader = FooterHeader;
FooterHeader.propTypes = {
    children: prop_types_1.default.any
};
FooterHeader.defaultProps = {
    children: null
};
/* ****************************************** */
function FooterBody(_a) {
    var children = _a.children;
    return (react_1.default.createElement(Layout_1.Container, { style: { marginBottom: 16 } }, children));
}
exports.FooterBody = FooterBody;
FooterBody.propTypes = {
    children: prop_types_1.default.any
};
FooterBody.defaultProps = {
    children: null
};
//# sourceMappingURL=Footer.js.map
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
exports.VHCenter = exports.Col = exports.Row = exports.Container = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
/* ****************************************** */
function Container(_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("container", className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
}
exports.Container = Container;
Container.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
Container.defaultProps = {
    children: null
};
/* ****************************************** */
function Row(_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("row", className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
}
exports.Row = Row;
Row.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
Row.defaultProps = {
    children: null
};
/* ****************************************** */
function Col(_a) {
    var children = _a.children, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, className = _a.className, props = __rest(_a, ["children", "sm", "md", "lg", "xl", "className"]);
    var classes = classnames_1.default("col", sm && "s" + sm, "m" + md, "l" + lg, "xl" + xl, className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
}
exports.Col = Col;
Col.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    sm: prop_types_1.default.number,
    md: prop_types_1.default.number,
    lg: prop_types_1.default.number,
    xl: prop_types_1.default.number
};
Col.defaultProps = {
    children: null,
    sm: 12
};
/* ****************************************** */
function VHCenter(_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("vh-center", className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
}
exports.VHCenter = VHCenter;
VHCenter.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
VHCenter.defaultProps = {
    children: null
};
//# sourceMappingURL=Layout.js.map
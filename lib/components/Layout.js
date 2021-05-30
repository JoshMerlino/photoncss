"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VHCenter = exports.Col = exports.Row = exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
function Container({ children, className, ...props }) {
    const classes = classnames_1.default("container", className);
    return react_1.default.createElement("div", { className: classes, ...props }, children);
}
exports.Container = Container;
Container.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
Container.defaultProps = {
    children: null
};
function Row({ children, className, ...props }) {
    const classes = classnames_1.default("row", className);
    return react_1.default.createElement("div", { className: classes, ...props }, children);
}
exports.Row = Row;
Row.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
Row.defaultProps = {
    children: null
};
function Col({ children, sm, md, lg, xl, className, ...props }) {
    const classes = classnames_1.default("col", sm && `s${sm}`, `m${md}`, `l${lg}`, `xl${xl}`, className);
    return react_1.default.createElement("div", { className: classes, ...props }, children);
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
function VHCenter({ children, className, ...props }) {
    const classes = classnames_1.default("vh-center", className);
    return react_1.default.createElement("div", { className: classes, ...props }, children);
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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogBody = exports.DialogActions = exports.DialogTitle = exports.Dialog = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
function Dialog({ children, type, transition, size, className = "", ...props }) {
    const classes = classnames_1.default("photon-dialog", `size-${size}`, `transition-${transition}`, `type-${type}`, className);
    return (react_1.default.createElement("div", { className: classes, ...props }, children));
}
exports.Dialog = Dialog;
Dialog.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    type: prop_types_1.default.oneOf(["alert"]),
    transition: prop_types_1.default.oneOf(["grow"]),
    size: prop_types_1.default.oneOf(["fullscreen", "small", "normal", "large"])
};
Dialog.defaultProps = {
    children: null,
    type: "alert",
    transition: "grow",
    size: "normal"
};
function DialogTitle({ children, subtitle, seperated, className = "", ...props }) {
    const classes = classnames_1.default("dialog-title", seperated && "seperated", className);
    return (react_1.default.createElement("div", { className: classes, ...props },
        react_1.default.createElement("h1", null, children),
        subtitle !== "" && react_1.default.createElement("h2", null, subtitle)));
}
exports.DialogTitle = DialogTitle;
DialogTitle.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    subtitle: prop_types_1.default.string,
    seperated: prop_types_1.default.bool
};
DialogTitle.defaultProps = {
    children: null,
    subtitle: "",
    seperated: false
};
function DialogActions({ children, direction, seperated, className = "", ...props }) {
    const classes = classnames_1.default("dialog-actions", `direction-${direction}`, seperated && "seperated", className);
    return react_1.default.createElement("div", { className: classes, ...props }, children);
}
exports.DialogActions = DialogActions;
DialogActions.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    direction: prop_types_1.default.oneOf(["left", "right"]),
    seperated: prop_types_1.default.bool
};
DialogActions.defaultProps = {
    children: null,
    direction: "right",
    seperated: false
};
function DialogBody({ children, className = "", ...props }) {
    const classes = classnames_1.default("dialog-body", className);
    return react_1.default.createElement("div", { className: classes, ...props }, children);
}
exports.DialogBody = DialogBody;
DialogBody.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
DialogBody.defaultProps = {
    children: null
};
//# sourceMappingURL=Dialog.js.map
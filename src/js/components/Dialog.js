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
exports.DialogBody = exports.DialogActions = exports.DialogTitle = exports.Dialog = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
/* ****************************************** */
function Dialog(_a) {
    var children = _a.children, type = _a.type, transition = _a.transition, size = _a.size, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "type", "transition", "size", "className"]);
    var classes = classnames_1.default("photon-dialog", "size-" + size, "transition-" + transition, "type-" + type, className);
    return (react_1.default.createElement("div", __assign({ className: classes }, props), children));
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
/* ****************************************** */
function DialogTitle(_a) {
    var children = _a.children, subtitle = _a.subtitle, seperated = _a.seperated, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "subtitle", "seperated", "className"]);
    var classes = classnames_1.default("dialog-title", seperated && "seperated", className);
    return (react_1.default.createElement("div", __assign({ className: classes }, props),
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
/* ****************************************** */
function DialogActions(_a) {
    var children = _a.children, direction = _a.direction, seperated = _a.seperated, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "direction", "seperated", "className"]);
    var classes = classnames_1.default("dialog-actions", "direction-" + direction, seperated && "seperated", className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
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
/* ****************************************** */
function DialogBody(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("dialog-body", className);
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
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
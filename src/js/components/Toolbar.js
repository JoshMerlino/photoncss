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
exports.ToolbarActions = exports.ToolbarTitle = exports.Toolbar = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var guid_1 = __importDefault(require("../util/guid"));
var jquery_1 = __importDefault(require("jquery"));
/* ****************************************** */
function Toolbar(_a) {
    var children = _a.children, color = _a.color, variant = _a.variant, size = _a.size, position = _a.position, id = _a.id, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "color", "variant", "size", "position", "id", "className"]);
    id = id || guid_1.default();
    setImmediate(function () {
        var toolbar = jquery_1.default("#" + id);
        toolbar.siblings(".photon-toolbar-spacer").remove();
        toolbar.before("<div class=\"photon-toolbar-spacer\" data-toolbar=\"" + id + "\"></div>");
        var spacer = jquery_1.default("[data-toolbar=\"" + id + "\"]");
        spacer.height(toolbar.height() || 0);
        if (variant === "float") {
            jquery_1.default(document).on("scroll", function () {
                var scroll = jquery_1.default(document).scrollTop();
                if (scroll > 0) {
                    toolbar.removeClass("variant-flat").addClass("variant-raised");
                }
                else {
                    toolbar.addClass("variant-flat").removeClass("variant-raised");
                }
            });
        }
    });
    var classes = classnames_1.default("photon-toolbar", "variant-" + variant, "position-" + position, "color-" + color, "size-" + size, className);
    return react_1.default.createElement("header", __assign({ id: id, className: classes }, props), children);
}
exports.Toolbar = Toolbar;
Toolbar.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    size: prop_types_1.default.oneOf(["normal", "dense", "large"]),
    variant: prop_types_1.default.oneOf(["flat", "raised", "float"]),
    position: prop_types_1.default.oneOf(["top", "bottom"]),
    id: prop_types_1.default.string
};
Toolbar.defaultProps = {
    children: null,
    color: "none",
    variant: "float",
    size: "normal",
    position: "top",
};
/* ****************************************** */
function ToolbarTitle(_a) {
    var children = _a.children, subtitle = _a.subtitle, props = __rest(_a, ["children", "subtitle"]);
    var classes = classnames_1.default("photon-toolbartitle", subtitle !== null && "contains-subtitle");
    return (react_1.default.createElement("div", __assign({ className: classes }, props),
        children,
        subtitle !== null && react_1.default.createElement("div", { className: "subtitle" }, subtitle)));
}
exports.ToolbarTitle = ToolbarTitle;
ToolbarTitle.propTypes = {
    children: prop_types_1.default.any,
    subtitle: prop_types_1.default.any
};
ToolbarTitle.defaultProps = {
    children: null,
    subtitle: null
};
/* ****************************************** */
function ToolbarActions(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var classes = classnames_1.default("photon-toolbaractions");
    return react_1.default.createElement("div", __assign({ className: classes }, props), children);
}
exports.ToolbarActions = ToolbarActions;
ToolbarActions.propTypes = {
    children: prop_types_1.default.any
};
ToolbarActions.defaultProps = {
    children: null
};
//# sourceMappingURL=Toolbar.js.map
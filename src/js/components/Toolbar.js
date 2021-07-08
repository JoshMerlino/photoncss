"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarActions = exports.ToolbarTitle = exports.Toolbar = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const guid_1 = __importDefault(require("../util/guid"));
const jquery_1 = __importDefault(require("jquery"));
function Toolbar({ children, color, variant, size, position, id, className = "", ...props }) {
    id = id || guid_1.default();
    setImmediate(function () {
        const toolbar = jquery_1.default(`#${id}`);
        toolbar.siblings(".photon-toolbar-spacer").remove();
        toolbar.before(`<div class="photon-toolbar-spacer" data-toolbar="${id}"></div>`);
        const spacer = jquery_1.default(`[data-toolbar="${id}"]`);
        spacer.height(toolbar.height() || 0);
        if (variant === "float") {
            jquery_1.default(document).on("scroll", () => {
                const scroll = jquery_1.default(document).scrollTop();
                if (scroll > 0) {
                    toolbar.removeClass("variant-flat").addClass("variant-raised");
                }
                else {
                    toolbar.addClass("variant-flat").removeClass("variant-raised");
                }
            });
        }
    });
    const classes = classnames_1.default("photon-toolbar", `variant-${variant}`, `position-${position}`, `color-${color}`, `size-${size}`, className);
    return react_1.default.createElement("header", { id: id, className: classes, ...props }, children);
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
function ToolbarTitle({ children, subtitle, ...props }) {
    const classes = classnames_1.default("photon-toolbartitle", subtitle !== null && "contains-subtitle");
    return (react_1.default.createElement("div", { className: classes, ...props },
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
function ToolbarActions({ children, ...props }) {
    const classes = classnames_1.default("photon-toolbaractions");
    return react_1.default.createElement("div", { className: classes, ...props }, children);
}
exports.ToolbarActions = ToolbarActions;
ToolbarActions.propTypes = {
    children: prop_types_1.default.any
};
ToolbarActions.defaultProps = {
    children: null
};
//# sourceMappingURL=Toolbar.js.map
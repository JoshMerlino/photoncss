"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const Waves_1 = __importDefault(require("../util/Waves"));
function Button({ children, color, display, variant, size, waves, className = "", ...props }) {
    const classes = classnames_1.default("photon-btn", `variant-${variant}`, `display-${display}`, `color-${color}`, `size-${size}`, waves && "waves-effect", className);
    if (waves)
        setImmediate(Waves_1.default.init);
    return react_1.default.createElement("button", { className: classes, ...props }, children);
}
exports.Button = Button;
Button.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    size: prop_types_1.default.oneOf(["normal", "dense", "large"]),
    variant: prop_types_1.default.oneOf(["contained", "flat", "outlined", "raised"]),
    display: prop_types_1.default.oneOf(["inline", "block"]),
    waves: prop_types_1.default.bool
};
Button.defaultProps = {
    children: null,
    color: "none",
    variant: "contained",
    size: "normal",
    display: "inline",
    waves: true
};
//# sourceMappingURL=Button.js.map
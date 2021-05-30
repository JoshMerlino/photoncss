"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
function Spinner({ size, color, className = "", ...props }) {
    const classes = classnames_1.default("photon-spinner", `color-${color}`, `size-${size}`, className);
    return (react_1.default.createElement("svg", { className: classes, width: "65px", height: "65px", viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg", ...props },
        react_1.default.createElement("circle", { className: "path", fill: "none", cx: "33", cy: "33", r: "30" })));
}
exports.Spinner = Spinner;
Spinner.propTypes = {
    className: prop_types_1.default.any,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    size: prop_types_1.default.oneOf(["small", "normal", "large"])
};
Spinner.defaultProps = {
    color: "none",
    size: "normal"
};
//# sourceMappingURL=Progress.js.map
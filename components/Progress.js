"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = exports.IndeterminateProgress = exports.Spinner = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
function Spinner({ size = "normal", color = "none", className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-spinner", `color-${color}`, `size-${size}`, className);
    return (react_1.default.createElement("svg", { className: classes, width: "65px", height: "65px", viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg", ...props },
        react_1.default.createElement("circle", { className: "path", fill: "none", cx: "33", cy: "33", r: "30" })));
}
exports.Spinner = Spinner;
function IndeterminateProgress({ color = "none", className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-progress", `color-${color}`, className);
    return (react_1.default.createElement("div", { className: classes, ...props },
        react_1.default.createElement("div", { className: "indeterminate" })));
}
exports.IndeterminateProgress = IndeterminateProgress;
function Progress({ max = 1, min = 0, value = 0.5, color = "none", className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-progress", `color-${color}`, className);
    return (react_1.default.createElement("div", { className: classes, ...props },
        react_1.default.createElement("div", { className: "determinate", style: { width: `${(max - min) * value / max}%` } })));
}
exports.Progress = Progress;
//# sourceMappingURL=Progress.js.map
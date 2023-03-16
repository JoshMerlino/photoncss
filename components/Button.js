"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Waves_1 = __importDefault(require("../util/Waves"));
function Button({ children, color = "none", display = "inline", variant = "contained", size = "normal", waves = true, className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-btn", `variant-${variant}`, `display-${display}`, `color-${color}`, `size-${size}`, waves && "waves-effect", className);
    if (waves)
        setImmediate(Waves_1.default.init);
    return (react_1.default.createElement("button", { className: classes, ...props }, children));
}
exports.Button = Button;
//# sourceMappingURL=Button.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
function Snackbar({ children, className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-snackbar", className);
    return (react_1.default.createElement("div", { className: classes, ...props }, children));
}
exports.Snackbar = Snackbar;
//# sourceMappingURL=Snackbar.js.map
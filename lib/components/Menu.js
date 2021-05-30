"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const List_1 = require("./List");
function Menu({ children, className = "", ...props }) {
    const classes = classnames_1.default("photon-menu", className);
    return (react_1.default.createElement("div", { className: classes, ...props },
        react_1.default.createElement(List_1.List, null, children)));
}
exports.Menu = Menu;
Menu.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
Menu.defaultProps = {
    children: null
};
//# sourceMappingURL=Menu.js.map
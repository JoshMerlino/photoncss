"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const List_1 = require("./List");
function Drawer({ children, from, swipe, className = "", ...props }) {
    const classes = classnames_1.default("photon-drawer", swipe && "swipe-enabled", `from-${from}`, className);
    return (react_1.default.createElement("aside", { className: classes, ...props },
        react_1.default.createElement(List_1.List, null, children),
        swipe && react_1.default.createElement("div", { className: "photon-swipe_target" })));
}
exports.Drawer = Drawer;
Drawer.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    from: prop_types_1.default.oneOf(["left", "right", "top", "bottom"]),
    swipe: prop_types_1.default.bool
};
Drawer.defaultProps = {
    children: null,
    swipe: true,
    from: "left"
};
//# sourceMappingURL=Drawer.js.map
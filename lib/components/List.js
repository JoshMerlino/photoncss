"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubheader = exports.ListItem = exports.List = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
function List({ children, className = "", ...props }) {
    const classes = classnames_1.default("photon-list", className);
    return react_1.default.createElement("ul", { className: classes, ...props }, children);
}
exports.List = List;
List.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
List.defaultProps = {
    children: null
};
function ListItem({ children, round, waves, active, icon, iconEnd, className = "", ...props }) {
    const classes = classnames_1.default("photon-list-item", round && "round", active && "active", waves && "waves-effect", className);
    return (react_1.default.createElement("li", { className: classes, ...props },
        react_1.default.createElement("div", { className: "list-item-name" },
            icon,
            children),
        react_1.default.createElement("div", { className: "list-item-meta" }, iconEnd)));
}
exports.ListItem = ListItem;
ListItem.propTypes = {
    children: prop_types_1.default.any,
    icon: prop_types_1.default.any,
    iconEnd: prop_types_1.default.any,
    className: prop_types_1.default.string,
    round: prop_types_1.default.bool,
    active: prop_types_1.default.bool,
    waves: prop_types_1.default.bool,
};
ListItem.defaultProps = {
    children: null,
    icon: null,
    iconEnd: null,
    round: false,
    active: false,
    waves: true
};
function ListSubheader({ children, className = "", ...props }) {
    const classes = classnames_1.default("photon-subheader", className);
    return react_1.default.createElement("li", { className: classes, ...props }, children);
}
exports.ListSubheader = ListSubheader;
ListSubheader.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
ListSubheader.defaultProps = {
    children: null
};
//# sourceMappingURL=List.js.map
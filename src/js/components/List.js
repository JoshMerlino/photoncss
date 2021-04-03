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
exports.ListSubheader = exports.ListItem = exports.List = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
/* ****************************************** */
function List(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("photon-list", className);
    return react_1.default.createElement("ul", __assign({ className: classes }, props), children);
}
exports.List = List;
List.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
List.defaultProps = {
    children: null
};
/* ****************************************** */
function ListItem(_a) {
    var children = _a.children, round = _a.round, waves = _a.waves, icon = _a.icon, iconEnd = _a.iconEnd, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "round", "waves", "icon", "iconEnd", "className"]);
    var classes = classnames_1.default("photon-list-item", round && "round", waves && "waves-effect", className);
    return (react_1.default.createElement("li", __assign({ className: classes }, props),
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
    waves: prop_types_1.default.bool,
};
ListItem.defaultProps = {
    children: null,
    icon: null,
    iconEnd: null,
    round: false,
    waves: true
};
/* ****************************************** */
function ListSubheader(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "className"]);
    var classes = classnames_1.default("photon-subheader", className);
    return react_1.default.createElement("li", __assign({ className: classes }, props), children);
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
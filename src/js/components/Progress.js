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
exports.Spinner = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
/* ****************************************** */
function Spinner(_a) {
    var size = _a.size, color = _a.color, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["size", "color", "className"]);
    var classes = classnames_1.default("photon-spinner", "color-" + color, "size-" + size, className);
    return (react_1.default.createElement("svg", __assign({ className: classes, width: "65px", height: "65px", viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg" }, props),
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
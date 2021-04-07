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
exports.Input = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var guid_1 = __importDefault(require("../util/guid"));
/* ****************************************** */
function Input(_a) {
    var children = _a.children, variant = _a.variant, _b = _a.type, type = _b === void 0 ? "text" : _b, color = _a.color, id = _a.id, _c = _a.className, className = _c === void 0 ? "" : _c, props = __rest(_a, ["children", "variant", "type", "color", "id", "className"]);
    var classes = classnames_1.default("photon-input", "variant-" + variant, "color-" + color, className);
    id = id || guid_1.default();
    return (react_1.default.createElement("div", { className: classes },
        react_1.default.createElement("input", __assign({ tabIndex: 0, type: type ? type : "text", id: id }, props)),
        react_1.default.createElement("label", { htmlFor: id }, children)));
}
exports.Input = Input;
Input.propTypes = {
    children: prop_types_1.default.any,
    type: prop_types_1.default.any,
    className: prop_types_1.default.string,
    id: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    variant: prop_types_1.default.oneOf(["normal", "round"]),
};
Input.defaultProps = {
    children: null,
    color: "none",
    variant: "normal",
};
//# sourceMappingURL=Input.js.map
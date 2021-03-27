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
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var waves_js_1 = __importDefault(require("../mixin/waves.js"));
function Button(_a) {
    var children = _a.children, color = _a.color, variant = _a.variant, waves = _a.waves, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "color", "variant", "waves", "className"]);
    var classes = classnames_1.default("photon-btn", "variant-" + variant, "color-" + color, waves && "waves-effect", className);
    if (waves)
        setImmediate(waves_js_1.default.init);
    return react_1.default.createElement("button", __assign({ className: classes }, props), children);
}
exports.Button = Button;
Button.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    variant: prop_types_1.default.oneOf(["contained", "flat", "outlined", "raised"]),
    waves: prop_types_1.default.bool
};
Button.defaultProps = {
    children: null,
    color: "none",
    variant: "contained",
    waves: true
};
//# sourceMappingURL=Button.js.map
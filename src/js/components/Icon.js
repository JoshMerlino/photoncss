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
exports.Icon = exports.TextIcon = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var Waves_js_1 = __importDefault(require("../util/Waves.js"));
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("../util/guid"));
/* ****************************************** */
function TextIcon(_a) {
    var children = _a.children, variant = _a.variant, props = __rest(_a, ["children", "variant"]);
    var classes = classnames_1.default("material-icons", "variant-" + variant, "text-icon");
    return react_1.default.createElement("i", __assign({ className: classes }, props), children);
}
exports.TextIcon = TextIcon;
TextIcon.propTypes = {
    children: prop_types_1.default.any,
    variant: prop_types_1.default.oneOf(["normal", "outlined", "round", "sharp", "two-tone"])
};
TextIcon.defaultProps = {
    children: null,
    variant: "normal"
};
/* ****************************************** */
function Icon(_a) {
    var children = _a.children, variant = _a.variant, ink = _a.ink, props = __rest(_a, ["children", "variant", "ink"]);
    var classes = classnames_1.default("material-icons", "variant-" + variant, ink && "waves-effect waves-ink");
    var id = guid_1.default();
    setImmediate(function () {
        jquery_1.default("#" + id).on("mousedown touchstart", function (event) {
            event.stopPropagation();
            Waves_js_1.default.calm(this);
            Waves_js_1.default.ripple(this, { wait: 1e10, ink: true });
        });
        jquery_1.default("#" + id).on("mouseup mouseleave", function () {
            Waves_js_1.default.calm(this);
        });
    });
    return react_1.default.createElement("i", __assign({ id: id, className: classes }, props), children);
}
exports.Icon = Icon;
Icon.propTypes = {
    children: prop_types_1.default.any,
    variant: prop_types_1.default.oneOf(["normal", "outlined", "round", "sharp", "two-tone"]),
    ink: prop_types_1.default.bool
};
Icon.defaultProps = {
    children: null,
    variant: "normal",
    ink: true
};
//# sourceMappingURL=Icon.js.map
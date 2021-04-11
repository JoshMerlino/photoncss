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
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var guid_1 = __importDefault(require("../util/guid"));
var jquery_1 = __importDefault(require("jquery"));
var Waves_1 = __importDefault(require("../util/Waves"));
/* ****************************************** */
function Checkbox(_a) {
    var children = _a.children, labelPosition = _a.labelPosition, style = _a.style, variant = _a.variant, color = _a.color, waves = _a.waves, id = _a.id, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "labelPosition", "style", "variant", "color", "waves", "id", "className"]);
    var classes = classnames_1.default("photon-checkbox", props.indeterminate === "true" && "indeterminate", "variant-" + variant, "color-" + color, "labelposition-" + labelPosition, className);
    id = id || guid_1.default();
    setImmediate(function () {
        // Define elements
        var input = jquery_1.default("#" + id);
        var wrapper = input.parent();
        var ripple = jquery_1.default("#" + id + "-ripple")[0];
        wrapper.off("mousedown").on("mousedown", function () {
            Waves_1.default.ripple(ripple, { wait: 1e6, ink: true });
            wrapper.addClass("active");
        });
        wrapper.off("mouseup").on("mouseup", function () {
            Waves_1.default.calm(ripple);
            wrapper.removeClass("active");
        });
    });
    return (react_1.default.createElement("div", __assign({ className: classes }, { style: style }),
        labelPosition === "before" && children && react_1.default.createElement("label", { htmlFor: id }, children),
        react_1.default.createElement("input", __assign({ tabIndex: 0, type: "checkbox", id: id }, props)),
        react_1.default.createElement("div", { id: id + "-ripple", className: classnames_1.default("ripple", waves && "waves-effect waves-ink") }),
        labelPosition === "after" && children && react_1.default.createElement("label", { htmlFor: id }, children)));
}
exports.Checkbox = Checkbox;
Checkbox.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    style: prop_types_1.default.any,
    id: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    labelPosition: prop_types_1.default.oneOf(["before", "after"]),
    variant: prop_types_1.default.oneOf(["normal", "round"]),
    waves: prop_types_1.default.bool,
    indeterminate: prop_types_1.default.oneOf(["true", "false"])
};
Checkbox.defaultProps = {
    children: null,
    color: "none",
    variant: "normal",
    labelPosition: "after",
    waves: true,
    indeterminate: "false"
};
//# sourceMappingURL=Checkbox.js.map
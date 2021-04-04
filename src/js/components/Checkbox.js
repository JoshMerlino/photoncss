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
/* ****************************************** */
function Checkbox(_a) {
    var children = _a.children, labelPosition = _a.labelPosition, color = _a.color, waves = _a.waves, id = _a.id, _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["children", "labelPosition", "color", "waves", "id", "className"]);
    var classes = classnames_1.default("photon-checkbox", "color-" + color, "labelposition-" + labelPosition, className);
    id = id || guid_1.default();
    /*

    // Define elements
    const wrapper = $(`#${id}`).parent();
    const ripple = wrapper.children(".ripple")[0];
    wrapper.on("mousedown", () => Waves.ripple(ripple, { duration: 1e6, ink: true }));

    */
    return (react_1.default.createElement("div", { className: classes },
        labelPosition === "before" && children && react_1.default.createElement("label", { htmlFor: id }, children),
        react_1.default.createElement("input", __assign({ tabIndex: 0, type: "checkbox", id: id }, props)),
        waves && react_1.default.createElement("div", { className: classnames_1.default("ripple", waves && "waves-effect waves-ink") }),
        labelPosition === "after" && children && react_1.default.createElement("label", { htmlFor: id }, children)));
}
exports.Checkbox = Checkbox;
Checkbox.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    id: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    labelPosition: prop_types_1.default.oneOf(["before", "after"]),
    waves: prop_types_1.default.bool
};
Checkbox.defaultProps = {
    children: null,
    color: "none",
    labelPosition: "after",
    waves: true
};
//# sourceMappingURL=Checkbox.js.map
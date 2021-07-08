"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const guid_1 = __importDefault(require("../util/guid"));
const jquery_1 = __importDefault(require("jquery"));
const Waves_1 = __importDefault(require("../util/Waves"));
function Checkbox({ children, labelPosition, style, variant, color, waves, id, className = "", ...props }) {
    const classes = classnames_1.default("photon-checkbox", props.indeterminate === "true" && "indeterminate", `variant-${variant}`, `color-${color}`, `labelposition-${labelPosition}`, className);
    id = id || guid_1.default();
    setImmediate(function () {
        const input = jquery_1.default(`#${id}`);
        const wrapper = input.parent();
        const ripple = jquery_1.default(`#${id}-ripple`)[0];
        wrapper.off("mousedown").on("mousedown", () => {
            Waves_1.default.ripple(ripple, { wait: 1e6, ink: true });
            wrapper.addClass("active");
        });
        wrapper.off("mouseup").on("mouseup", () => {
            Waves_1.default.calm(ripple);
            wrapper.removeClass("active");
        });
    });
    return (react_1.default.createElement("div", { className: classes, ...{ style } },
        labelPosition === "before" && children && react_1.default.createElement("label", { htmlFor: id }, children),
        react_1.default.createElement("input", { tabIndex: 0, type: "checkbox", id: id, ...props }),
        react_1.default.createElement("div", { id: `${id}-ripple`, className: classnames_1.default("ripple", waves && "waves-effect waves-ink") }),
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
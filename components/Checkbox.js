"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const classnames_1 = __importDefault(require("classnames"));
const jquery_1 = __importDefault(require("jquery"));
const react_1 = __importDefault(require("react"));
const guid_1 = __importDefault(require("../util/guid"));
const Waves_1 = __importDefault(require("../util/Waves"));
function Checkbox({ children = null, labelPosition = "after", style, variant = "normal", indeterminate = false, color = "none", waves = true, id, className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-checkbox", indeterminate && "indeterminate", `variant-${variant}`, `color-${color}`, `labelposition-${labelPosition}`, className);
    id = id || (0, guid_1.default)();
    setImmediate(function () {
        const input = (0, jquery_1.default)(`#${id}`);
        const wrapper = input.parent();
        const ripple = (0, jquery_1.default)(`#${id}-ripple`)[0];
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
        react_1.default.createElement("div", { id: `${id}-ripple`, className: (0, classnames_1.default)("ripple", waves && "waves-effect waves-ink") }),
        labelPosition === "after" && children && react_1.default.createElement("label", { htmlFor: id }, children)));
}
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map
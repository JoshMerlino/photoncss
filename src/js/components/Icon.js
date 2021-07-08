"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.TextIcon = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const Waves_1 = __importDefault(require("../util/Waves"));
const jquery_1 = __importDefault(require("jquery"));
const guid_1 = __importDefault(require("../util/guid"));
function TextIcon({ children, variant, ...props }) {
    const classes = classnames_1.default("material-icons", `variant-${variant}`, "text-icon");
    return react_1.default.createElement("i", { className: classes, ...props }, children);
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
function Icon({ children, variant, ink, ...props }) {
    const classes = classnames_1.default("material-icons", `variant-${variant}`, ink && "waves-effect waves-ink");
    const id = guid_1.default();
    setImmediate(function () {
        jquery_1.default(`#${id}`)
            .not(".waves-attached")
            .addClass("waves-attached")
            .on("mousedown touchstart", function (event) {
            event.stopPropagation();
            Waves_1.default.calm(this);
            Waves_1.default.ripple(this, { wait: 1e10, ink: true });
        })
            .on("mouseup mouseleave", function () {
            Waves_1.default.calm(this);
        });
    });
    return react_1.default.createElement("i", { id: id, className: classes, ...props }, children);
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
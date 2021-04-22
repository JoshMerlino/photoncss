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
exports.InputField = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var guid_1 = __importDefault(require("../util/guid"));
var jquery_1 = __importDefault(require("jquery"));
var getPointer_1 = __importDefault(require("../util/getPointer"));
var Menu_1 = require("./Menu");
var List_1 = require("./List");
var Menu_2 = require("../util/class/Menu");
/* ****************************************** */
function InputField(_a) {
    var children = _a.children, variant = _a.variant, dropdown = _a.dropdown, prefix = _a.prefix, suffix = _a.suffix, readOnly = _a.readOnly, subtitle = _a.subtitle, _b = _a.type, type = _b === void 0 ? "text" : _b, color = _a.color, id = _a.id, _c = _a.className, className = _c === void 0 ? "" : _c, props = __rest(_a, ["children", "variant", "dropdown", "prefix", "suffix", "readOnly", "subtitle", "type", "color", "id", "className"]);
    var classes = classnames_1.default("photon-input", dropdown !== null && "photon-dropdown", "type-" + type, "variant-" + variant, "color-" + color, className);
    id = id || guid_1.default();
    setImmediate(function () {
        // Define elements
        var input = jquery_1.default("#" + id);
        var wrapper = input.parent();
        var bar = wrapper.children(".bar");
        var label = wrapper.children("label");
        var suffix = wrapper.children(".suffix");
        var prefix = wrapper.children(".prefix");
        input.off("blur").on("blur", function () {
            bar.addClass("transitioning").css({ opacity: 0 });
        });
        input.off("keyup keydown mouseleave").on("keyup keydown mouseleave", function () {
            var containsContent = input.val() !== "";
            input[containsContent ? "addClass" : "removeClass"]("contains-content");
        }).trigger("keydown");
        input.off("focus").on("focus", function () {
            // Bar
            var x = getPointer_1.default().x;
            var left = wrapper.offset().left;
            bar.removeClass("transitioning").css({ opacity: 1, width: 0, left: Math.min(x - left, wrapper.width()) });
            setImmediate(function () {
                bar.addClass("transitioning").css({ width: "calc(100% - 2px)", left: 1 });
            });
        });
        if (wrapper.hasClass("variant-normal")) {
            if (prefix.length === 1) {
                input.css({ paddingLeft: prefix.width() !== 0 ? prefix.width() + 8 : 0 });
                label.css({ marginLeft: prefix.width() !== 0 ? prefix.width() + 8 : 0 });
            }
            if (suffix.length === 1) {
                input.css({ paddingRight: suffix.width() !== 0 ? suffix.width() + 8 : 0 });
            }
        }
        else if (wrapper.hasClass("variant-outlined")) {
            if (prefix.length === 1) {
                input.css({ paddingLeft: prefix.width() !== 0 ? prefix.width() + 23.5 : 15.5 });
                label.css({ marginLeft: prefix.width() !== 0 ? prefix.width() + 23.5 : 15.5 });
            }
            if (suffix.length === 1) {
                input.css({ paddingRight: suffix.width() !== 0 ? suffix.width() + 23.5 : 15.5 });
            }
        }
        else {
            if (prefix.length === 1) {
                input.css({ paddingLeft: prefix.width() !== 0 ? prefix.width() + 24 : 16 });
                label.css({ marginLeft: prefix.width() !== 0 ? prefix.width() + 24 : 16 });
            }
            if (suffix.length === 1) {
                input.css({ paddingRight: suffix.width() !== 0 ? suffix.width() + 24 : 16 });
            }
        }
        // Menu stuff
        if (dropdown === null)
            return;
        var menu = new Menu_2.Menu(jquery_1.default("#" + id + "-dropdown"));
        input.on("focus", function () {
            menu.anchor(input);
            menu.open();
        });
        input.on("blur", function () {
            var isMouseDown = getPointer_1.default().isMouseDown;
            if (!isMouseDown)
                menu.close();
        });
    });
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes },
            react_1.default.createElement("input", __assign({ tabIndex: 0, type: type, readOnly: dropdown !== null || readOnly, id: id }, props)),
            prefix !== "" && react_1.default.createElement("span", { className: "prefix" }, prefix),
            suffix !== "" && react_1.default.createElement("span", { className: "suffix" }, suffix),
            react_1.default.createElement("label", { htmlFor: id }, children || "\u00A0"),
            react_1.default.createElement("div", { className: "bar" }),
            subtitle !== "" && react_1.default.createElement("p", { className: "subtitle" }, subtitle)),
        dropdown !== null &&
            react_1.default.createElement(Menu_1.Menu, { id: id + "-dropdown" }, dropdown && dropdown.map(function (item, key) { return react_1.default.createElement(List_1.ListItem, { tabIndex: key, key: key, onClick: function () {
                    var input = jquery_1.default("#" + id);
                    input.val(item);
                    input.addClass("contains-content");
                    "onChange" in props && props.onChange({ target: input[0], value: item });
                } }, item); })));
}
exports.InputField = InputField;
InputField.propTypes = {
    children: prop_types_1.default.any,
    type: prop_types_1.default.any,
    className: prop_types_1.default.string,
    subtitle: prop_types_1.default.string,
    suffix: prop_types_1.default.string,
    prefix: prop_types_1.default.string,
    id: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(["none", "primary", "secondary"]),
    variant: prop_types_1.default.oneOf(["normal", "filled", "outlined"]),
    dropdown: prop_types_1.default.array,
    readOnly: prop_types_1.default.bool
};
InputField.defaultProps = {
    children: null,
    color: "none",
    variant: "normal",
    suffix: "",
    prefix: "",
    subtitle: "",
    dropdown: null,
    readOnly: false
};
//# sourceMappingURL=InputField.js.map
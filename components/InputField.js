"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputField = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const guid_1 = __importDefault(require("../util/guid"));
const jquery_1 = __importDefault(require("jquery"));
const getPointer_1 = __importDefault(require("../util/getPointer"));
const Menu_1 = require("./Menu");
const List_1 = require("./List");
const Menu_2 = require("../util/class/Menu");
function InputField({ children, variant = "normal", dropdown = null, prefix = "", suffix = "", readOnly = false, subtitle = "", type = "text", color = "none", id, className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-input", dropdown !== null && "photon-dropdown", `type-${type}`, `variant-${variant}`, `color-${color}`, className);
    id = id || (0, guid_1.default)();
    if (dropdown !== null)
        readOnly = true;
    setImmediate(function () {
        const input = (0, jquery_1.default)(`#${id}`);
        const wrapper = input.parent();
        const bar = wrapper.children(".bar");
        const label = wrapper.children("label");
        const suffix = wrapper.children(".suffix");
        const prefix = wrapper.children(".prefix");
        input.off("blur").on("blur", () => {
            bar.addClass("transitioning").css({ opacity: 0 });
        });
        input.off("keyup keydown mouseleave").on("keyup keydown mouseleave", () => {
            const containsContent = input.val() !== "";
            input[containsContent ? "addClass" : "removeClass"]("contains-content");
        })
            .trigger("keydown");
        input.off("focus").on("focus", () => {
            const { x } = (0, getPointer_1.default)();
            const { left } = wrapper.offset();
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
        if (dropdown === null)
            return;
        const menu = new Menu_2.Menu((0, jquery_1.default)(`#${id}-dropdown`));
        input.on("focus", () => {
            menu.anchor(input);
            menu.open();
        });
        input.on("blur", () => {
            const { isMouseDown } = (0, getPointer_1.default)();
            if (!isMouseDown)
                menu.close();
        });
    });
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes },
            react_1.default.createElement("input", { tabIndex: 0, type: type, readOnly: readOnly, id: id, ...props }),
            prefix !== "" && react_1.default.createElement("span", { className: "prefix" }, prefix),
            suffix !== "" && react_1.default.createElement("span", { className: "suffix" }, suffix),
            react_1.default.createElement("label", { htmlFor: id }, children || "\u00A0"),
            react_1.default.createElement("div", { className: "bar" }),
            subtitle !== "" && react_1.default.createElement("p", { className: "subtitle" }, subtitle)),
        dropdown !== null &&
            react_1.default.createElement(Menu_1.Menu, { id: `${id}-dropdown` }, dropdown && dropdown.map((item, key) => react_1.default.createElement(List_1.ListItem, { tabIndex: key, key: key, onClick: () => {
                    const input = (0, jquery_1.default)(`#${id}`);
                    input.val(item);
                    input.addClass("contains-content");
                    if ("onChange" in props) {
                        props.onChange({ target: input[0], value: item });
                    }
                } }, item))));
}
exports.InputField = InputField;
//# sourceMappingURL=InputField.js.map
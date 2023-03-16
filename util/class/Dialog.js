"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const jquery_1 = __importDefault(require("jquery"));
const react_dom_1 = require("react-dom");
const guid_1 = __importDefault(require("../guid"));
class Dialog {
    constructor(dialog, options) {
        this.options = {
            id: (0, guid_1.default)(),
            closeOnBlur: true,
            ...options
        };
        const { id } = this.options;
        const wrapper = (0, jquery_1.default)("body").append(`<div id="${id}" class="photon-dialog-wrapper hidden"></div>`)
            .children(`#${id}`);
        (0, react_dom_1.render)(dialog, wrapper[0]);
        this.target = wrapper;
        (0, jquery_1.default)(document.body).on("click", (event) => {
            if (event.target === wrapper[0]) {
                if (this.options.closeOnBlur) {
                    this.close();
                }
            }
        });
    }
    close() {
        const wrapper = this.target;
        wrapper.addClass("hidden");
        setTimeout(() => wrapper.remove(), 500);
        return this;
    }
    open() {
        const wrapper = this.target;
        setTimeout(() => wrapper.removeClass("hidden"), 1);
        return this;
    }
    get isOpen() {
        const wrapper = this.target;
        return !wrapper.hasClass("hidden");
    }
}
exports.Dialog = Dialog;
function default_1(target, options) {
    return new Dialog(target, options);
}
exports.default = default_1;
//# sourceMappingURL=Dialog.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const jquery_1 = __importDefault(require("jquery"));
const guid_1 = __importDefault(require("../guid"));
const react_dom_1 = require("react-dom");
class Dialog {
    constructor(dialog, options) {
        this.options = {
            ...options,
            id: guid_1.default()
        };
        if (dialog.hasOwnProperty("$$typeof")) {
            const { id } = this.options;
            const wrapper = jquery_1.default("body").append(`<div id="${id}" class="photon-dialog-wrapper hidden"></div>`)
                .children(`#${id}`);
            react_dom_1.render(dialog, wrapper[0]);
            this.target = wrapper;
            jquery_1.default(document.body).on("click", (event) => {
                if (event.target === wrapper[0]) {
                    this.close();
                }
            });
        }
        else {
            this.target = jquery_1.default(dialog).parents(".photon-dialog-wrapper");
        }
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
//# sourceMappingURL=Dialog.js.map
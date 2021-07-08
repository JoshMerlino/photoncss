"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = void 0;
const jquery_1 = __importDefault(require("jquery"));
const guid_1 = __importDefault(require("../guid"));
const react_dom_1 = require("react-dom");
function getNotificationContainer() {
    if (jquery_1.default("#photon-notification-container").length === 0)
        jquery_1.default("body").append("<div id=\"photon-notification-container\"></div>");
    return jquery_1.default("#photon-notification-container");
}
class Snackbar {
    constructor(element, options) {
        this.options = {
            ...options,
            duration: null,
            id: guid_1.default()
        };
        const container = getNotificationContainer();
        const notification = container.append(`<div id="${this.options.id}" class="photon-snackbar-wapper hidden"></div>`).children(`#${this.options.id}`);
        react_dom_1.render(element, notification[0]);
        this.snackbar = jquery_1.default(`#${this.options.id}`);
        setTimeout(() => this.hide(), this.options.duration ?? 1e10);
        this.show();
    }
    show() {
        setTimeout(() => {
            this.snackbar.removeClass("hidden");
        }, 50);
        return this;
    }
    hide() {
        setTimeout(() => {
            this.snackbar.addClass("hidden");
            setTimeout(() => this.snackbar.remove(), 500);
        }, 50);
        return this;
    }
    get isOpen() {
        return !this.snackbar.hasClass("hidden");
    }
}
exports.Snackbar = Snackbar;
//# sourceMappingURL=Snackbar.js.map
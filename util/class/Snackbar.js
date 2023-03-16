"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = exports.getNotificationContainer = void 0;
const jquery_1 = __importDefault(require("jquery"));
const guid_1 = __importDefault(require("../guid"));
const react_dom_1 = require("react-dom");
function getNotificationContainer() {
    if ((0, jquery_1.default)("#photon-notification-container").length === 0)
        (0, jquery_1.default)("body").append("<div id=\"photon-notification-container\"></div>");
    return (0, jquery_1.default)("#photon-notification-container");
}
exports.getNotificationContainer = getNotificationContainer;
class Snackbar {
    constructor(element, options) {
        this.options = {
            duration: 1e10,
            id: (0, guid_1.default)(),
            ...options
        };
        const container = getNotificationContainer();
        const notification = container
            .append(`<div id="${this.options.id}" class="photon-snackbar-wapper hidden"></div>`)
            .children(`#${this.options.id}`);
        (0, react_dom_1.render)(element, notification[0]);
        this.snackbar = (0, jquery_1.default)(`#${this.options.id}`);
        setTimeout(() => this.hide(), this.options.duration);
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
function default_1(target, options) {
    return new Snackbar(target, options);
}
exports.default = default_1;
//# sourceMappingURL=Snackbar.js.map
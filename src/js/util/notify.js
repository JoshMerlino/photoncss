"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = exports.defaultOptions = exports.getNotificationContainer = exports.PhotonNotification = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("./guid"));
var PhotonNotification = /** @class */ (function () {
    function PhotonNotification() {
    }
    return PhotonNotification;
}());
exports.PhotonNotification = PhotonNotification;
function getNotificationContainer() {
    if (jquery_1.default("#photon-notification-container").length === 0)
        jquery_1.default("body").append("<div id=\"photon-notification-container\"></div>");
    return jquery_1.default("div#photon-notification-container");
}
exports.getNotificationContainer = getNotificationContainer;
exports.defaultOptions = {
    duration: 1e10
};
function notify(Notification, options) {
    if (options === void 0) { options = exports.defaultOptions; }
    var id = guid_1.default();
    var container = getNotificationContainer();
    var notification = container.append("<div id=\"" + id + "\"></div>").children("#" + id);
    react_dom_1.render(react_1.default.createElement(Notification, null), notification[0]);
    return new PhotonNotification;
}
exports.notify = notify;
//# sourceMappingURL=notify.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = exports.defaultOptions = exports.getNotificationContainer = exports.PhotonNotification = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("../guid"));
var PhotonNotification = /** @class */ (function () {
    function PhotonNotification(options) {
        this.options = options;
    }
    PhotonNotification.prototype.close = function () {
        var toast = jquery_1.default("#" + this.options.id);
        toast.addClass("hidden");
        this.options.onDismiss(this);
        setTimeout(function () {
            toast.remove();
        }, 500);
    };
    return PhotonNotification;
}());
exports.PhotonNotification = PhotonNotification;
// Function to f
function getNotificationContainer() {
    if (jquery_1.default("#photon-notification-container").length === 0)
        jquery_1.default("body").append("<div id=\"photon-notification-container\"></div>");
    return jquery_1.default("#photon-notification-container");
}
exports.getNotificationContainer = getNotificationContainer;
// Define default notification options
exports.defaultOptions = {
    duration: 10000,
    onDismiss: function () { return null; },
};
function notify(Notification, options) {
    // Merge options
    var id = guid_1.default();
    var opts = __assign(__assign(__assign({}, exports.defaultOptions), options), { id: id });
    // Get the notification container
    var container = getNotificationContainer();
    // Render the notification
    var notification = container.append("<div id=\"" + id + "\" class=\"photon-snackbar-wapper hidden\"></div>").children("#" + id);
    react_dom_1.render(react_1.default.createElement(Notification, null), notification[0]);
    var Nx = new PhotonNotification(opts);
    // On mount to DOM
    setTimeout(function () {
        notification.removeClass("hidden");
        setTimeout(function () { return Nx.close(); }, opts.duration);
    }, 10);
    return Nx;
}
exports.notify = notify;
//# sourceMappingURL=notify.js.map
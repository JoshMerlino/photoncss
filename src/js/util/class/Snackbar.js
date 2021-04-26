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
exports.Snackbar = void 0;
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("../guid"));
var react_dom_1 = require("react-dom");
// Local function to get the notification container
function getNotificationContainer() {
    if (jquery_1.default("#photon-notification-container").length === 0)
        jquery_1.default("body").append("<div id=\"photon-notification-container\"></div>");
    return jquery_1.default("#photon-notification-container");
}
var Snackbar = /** @class */ (function () {
    function Snackbar(element, options) {
        var _this = this;
        var _a;
        this.options = __assign(__assign({}, options), { duration: null, id: guid_1.default() });
        // Get the notification container
        var container = getNotificationContainer();
        // Render the notification
        var notification = container.append("<div id=\"" + this.options.id + "\" class=\"photon-snackbar-wapper hidden\"></div>").children("#" + this.options.id);
        react_dom_1.render(element, notification[0]);
        this.snackbar = jquery_1.default("#" + this.options.id);
        setTimeout(function () { return _this.hide(); }, (_a = this.options.duration) !== null && _a !== void 0 ? _a : 1e10);
        return this.show();
    }
    Snackbar.prototype.show = function () {
        var _this = this;
        setTimeout(function () {
            _this.snackbar.removeClass("hidden");
        }, 50);
        return this;
    };
    Snackbar.prototype.hide = function () {
        var _this = this;
        setTimeout(function () {
            _this.snackbar.addClass("hidden");
            setTimeout(function () { return _this.snackbar.remove(); }, 500);
        }, 50);
        return this;
    };
    Object.defineProperty(Snackbar.prototype, "isOpen", {
        get: function () {
            return !this.snackbar.hasClass("hidden");
        },
        enumerable: false,
        configurable: true
    });
    return Snackbar;
}());
exports.Snackbar = Snackbar;
//# sourceMappingURL=Snackbar.js.map
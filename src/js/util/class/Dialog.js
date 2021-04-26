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
exports.Dialog = void 0;
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("../guid"));
var react_dom_1 = require("react-dom");
var Dialog = /** @class */ (function () {
    function Dialog(dialog, options) {
        var _this = this;
        // Extend options
        this.options = __assign(__assign({}, options), { id: guid_1.default() });
        // If is JSX element
        if (dialog.hasOwnProperty("$$typeof")) {
            // Get options
            var id = this.options.id;
            var wrapper_1 = jquery_1.default("body").append("<div id=\"" + id + "\" class=\"photon-dialog-wrapper hidden\"></div>").children("#" + id);
            react_dom_1.render(dialog, wrapper_1[0]);
            this.target = wrapper_1;
            // Close menu on click from menu or modal
            jquery_1.default(document.body).on("click", function (event) {
                if (event.target === wrapper_1[0]) {
                    _this.close();
                }
            });
        }
        // If is jquery selector
        else {
            this.target = jquery_1.default(dialog).parents(".photon-dialog-wrapper");
        }
    }
    Dialog.prototype.close = function () {
        var wrapper = this.target;
        wrapper.addClass("hidden");
        setTimeout(function () { return wrapper.remove(); }, 500);
        return this;
    };
    Dialog.prototype.open = function () {
        var wrapper = this.target;
        setTimeout(function () { return wrapper.removeClass("hidden"); }, 1);
        return this;
    };
    Object.defineProperty(Dialog.prototype, "isOpen", {
        get: function () {
            var wrapper = this.target;
            return !wrapper.hasClass("hidden");
        },
        enumerable: false,
        configurable: true
    });
    return Dialog;
}());
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map
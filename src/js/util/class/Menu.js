"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("../guid"));
var Menu = /** @class */ (function () {
    function Menu(target) {
        // Define $menu from target
        this.target = jquery_1.default(target);
        var $menu = this.target;
        // Make sure were not adding listeners that are already there
        if ($menu.is("[md]"))
            return this;
        $menu.attr("md", "");
        // Append modal close target to DOM
        var id = $menu.attr("id") || guid_1.default();
        $menu.attr("id", id);
        jquery_1.default("<div class=\"modal-close-area transparent\" modal=\"" + id + "\"></div>").appendTo(jquery_1.default("body"));
        var $modal = jquery_1.default(".modal-close-area[modal=\"" + id + "\"]");
        // Close menu on click from menu or modal
        [$menu, $modal].map(function (e) { return e.on("click", function (event) {
            event.stopPropagation();
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br active");
            $modal.removeClass("active");
        }); });
        return this;
    }
    Menu.prototype.anchor = function (x, y) {
        // Get $menu
        var $menu = this.target;
        if (y === undefined && typeof x !== "number") {
            // If anchoring to element
            var $anchor = jquery_1.default(x);
            x = $anchor.offset().left;
            y = $anchor.offset().top;
            $menu.css({ left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8), top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8), });
        }
        else {
            // If anchoring to a fixed position
            $menu.css({ left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8), top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8), });
        }
        // Determine anchor origin
        if (x < window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tl");
        if (x > window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tr");
        if (x < window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-bl");
        if (x > window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-br");
        return this;
    };
    Menu.prototype.open = function () {
        // Get $menu and $modal
        var $menu = this.target;
        var $modal = jquery_1.default(".modal-close-area[modal=\"" + $menu.attr("id") + "\"]");
        // Activate both
        [$menu, $modal].map(function (e) { return e.addClass("active"); });
        return this;
    };
    Menu.prototype.close = function () {
        // Get $menu and $modal
        var $menu = this.target;
        var $modal = jquery_1.default(".modal-close-area[modal=\"" + $menu.attr("id") + "\"]");
        // Deactivate both
        [$menu, $modal].map(function (e) { return e.removeClass("active"); });
        return this;
    };
    Object.defineProperty(Menu.prototype, "isOpen", {
        get: function () {
            return this.target.hasClass("active");
        },
        enumerable: false,
        configurable: true
    });
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map
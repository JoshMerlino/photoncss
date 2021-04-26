"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("../guid"));
var getPointer_1 = __importDefault(require("../getPointer"));
var Menu = /** @class */ (function () {
    function Menu(target) {
        var _this = this;
        this.explicitPosition = false;
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
        // Close menu on click from menu or modal
        $menu.children(".photon-list").children(".photon-list-item").on("click", function () { return _this.close(); });
        return this;
    }
    Menu.prototype.__getModal = function (id) {
        var _this = this;
        if (jquery_1.default(".modal-close-area[modal=\"" + id + "\"]").length > 0)
            return jquery_1.default(".modal-close-area[modal=\"" + id + "\"]");
        jquery_1.default("<div class=\"modal-close-area transparent\" modal=\"" + id + "\"></div>").appendTo(jquery_1.default("body"));
        var $modal = jquery_1.default(".modal-close-area[modal=\"" + id + "\"]");
        return $modal.on("click", function () { return _this.close(); });
    };
    Menu.prototype.anchor = function (x, y) {
        var _a, _b;
        var dX = x || 0;
        var dY = y || 0;
        this.explicitPosition = true;
        // Get $menu
        var $menu = this.target;
        var mW = $menu.width();
        var mH = $menu.height();
        if (y === undefined && typeof x !== "number") {
            // If anchoring to element
            var $anchor = jquery_1.default(x);
            if ($anchor[0].tagName.toLowerCase() === "input") {
                var _c = $anchor.offset(), top_1 = _c.top, left = _c.left;
                $menu.css({ top: top_1 + $anchor[0].clientHeight + parseInt($anchor.css("border-width")) + 2, left: left, width: $anchor[0].clientWidth + parseInt($anchor.css("border-width")) * 2 });
            }
            else {
                dX = (_a = $anchor.offset()) === null || _a === void 0 ? void 0 : _a.left;
                dY = (_b = $anchor.offset()) === null || _b === void 0 ? void 0 : _b.top;
                $menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8), });
            }
            var isFixed_1 = false;
            $anchor.parents().each(function () {
                if (jquery_1.default(this).css("position") === "fixed") {
                    if (isFixed_1)
                        return;
                    $menu.css({ position: "fixed" });
                    dX -= jquery_1.default(document).scrollLeft();
                    dY -= jquery_1.default(document).scrollTop();
                    $menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8), });
                    isFixed_1 = true;
                }
            });
        }
        else {
            // If anchoring to a fixed position
            $menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8), });
        }
        // Determine anchor origin
        if (dX < window.innerWidth - mW - 8 && dY < window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tl");
        if (dX > window.innerWidth - mW - 8 && dY < window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tr");
        if (dX < window.innerWidth - mW - 8 && dY > window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-bl");
        if (dX > window.innerWidth - mW - 8 && dY > window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-br");
        return this;
    };
    Menu.prototype.open = function () {
        // Get $menu and $modal
        var $menu = this.target;
        var mW = $menu.width();
        var mH = $menu.height();
        var $modal = this.__getModal($menu.attr("id"));
        if (!this.explicitPosition) {
            var x = getPointer_1.default().x;
            var y = getPointer_1.default().y;
            $menu.css({ left: Math.max(Math.min(x, window.innerWidth - mW - 8), 8), top: Math.max(Math.min(y, window.innerHeight - mH - 8), 8), });
        }
        // Activate both
        requestAnimationFrame(function () {
            [$menu, $modal].map(function (e) { return e.addClass("active"); });
        });
        return this;
    };
    Menu.prototype.close = function () {
        // Get $menu and $modal
        var $menu = this.target;
        var $modal = jquery_1.default(".modal-close-area[modal=\"" + $menu.attr("id") + "\"]");
        // Deactivate both
        [$menu, $modal].map(function (e) { return e.removeClass("active"); });
        setTimeout(function () { return $modal.remove(); }, 300);
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
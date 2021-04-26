"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
var jquery_1 = __importDefault(require("jquery"));
var guid_1 = __importDefault(require("../guid"));
var Drawer = /** @class */ (function () {
    function Drawer(target) {
        // Define $nav and $swipe
        this.target = jquery_1.default(target);
        var $nav = this.target;
        var $swipe = this.target.children(".drawer-swipe-target");
        // Make sure were not adding listeners that are already there
        if ($nav.is("[md]"))
            return this;
        $nav.attr("md", "");
        // Give the drawer a unique id if it dosnt already have one
        var id = $nav.attr("id") || guid_1.default();
        $nav.attr("id", id);
        // Define $modal
        jquery_1.default("<div class=\"modal-close-area\" modal=\"" + id + "\"></div>").appendTo(jquery_1.default("body"));
        var $modal = jquery_1.default(".modal-close-area[modal=\"" + id + "\"]");
        // Cache original transform positions
        var aX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
        var aY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
        // Compare transform positions on every frame
        (function frame() {
            $nav.length !== 0 && requestAnimationFrame(frame);
            // Get current transform positions
            var tX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
            var tY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
            // Determine by transform if it is open or closed
            Math.abs(tX - aX) < 2 && Math.abs(tY - aY) < 2 ? $nav.removeClass("shadow") && $modal.removeClass("active") : $nav.addClass("shadow") && $modal.addClass("active");
        }());
        // On click away from drawer
        $modal.on("click touchstart", function (event) {
            // Stop event spread
            event.stopPropagation();
            // Start a transition
            $nav.addClass("transition").removeClass("active");
            // Determine the transform of the closed state drawer
            if ($nav.hasClass("from-right"))
                $nav.css({ transform: "translateX(100%)" });
            else if ($nav.hasClass("from-bottom"))
                $nav.css({ transform: "translateY(100%)" });
            else if ($nav.hasClass("from-top"))
                $nav.css({ transform: "translateY(-100%)" });
            else
                $nav.css({ transform: "translateX(-100%)" });
            // End animation
            setTimeout(function () { return $nav.removeClass("transition shadow"); }, 250);
        });
        // Is touchdown?
        var state = false;
        $swipe.on("touchstart", function () { return state = true; });
        // On drag stop, determine how to transform to next state
        $swipe.on("touchend", function () {
            // Mark drawer as not dragging and start animation
            state = false;
            $nav.addClass("transition");
            // Determine next position
            if ($nav.hasClass("from-right")) {
                var pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
                var s = window.innerWidth - pos > ($nav.width() || 0) / 2;
                $nav.css({ transform: s ? "translateX(0%)" : "translateX(100%)" });
            }
            else if ($nav.hasClass("from-bottom")) {
                var pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
                var s = pos < ($nav.height() || 0) / 2;
                $nav.css({ transform: s ? "translateY(0%)" : "translateY(100%)" });
            }
            else if ($nav.hasClass("from-top")) {
                var pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
                var s = ($nav.height() || 0) + pos < ($nav.height() || 0) / 2;
                $nav.css({ transform: s ? "translateY(-100%)" : "translateY(0%)" });
            }
            else {
                var pos = ($nav.width() || 0) + parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
                var s = pos < ($nav.width() || 0) / 2;
                $nav.css({ transform: s ? "translateX(-100%)" : "translateX(0%)" });
            }
            // End animation
            setTimeout(function () { return $nav.removeClass("transition"); }, 250);
        });
        // On drag
        $swipe.on("touchmove", function (event) {
            // Show drawer
            $nav.removeClass("active");
            // If it is not in drag mode, return
            if (!state)
                return;
            // Get touch from drag event
            var touch = event.touches[0];
            // Determine where drag is and where to move drawer to
            if ($nav.hasClass("from-right"))
                $nav.css({ transform: "translateX(" + Math.max(touch.clientX - Math.abs(window.innerWidth - ($nav.width() || 0)), 0) + "px)" });
            else if ($nav.hasClass("from-bottom"))
                $nav.css({ transform: "translateY(" + Math.max(touch.clientY - Math.abs(window.innerHeight - ($nav.height() || 0)), 0) + "px)" });
            else if ($nav.hasClass("from-top"))
                $nav.css({ transform: "translateY(" + Math.min(touch.clientY - ($nav.height() || 0), 0) + "px)" });
            else
                $nav.css({ transform: "translateX(" + Math.min(touch.clientX - ($nav.width() || 0), 0) + "px)" });
        });
        return this;
    }
    Drawer.prototype.open = function () {
        // Get $nav
        var $nav = this.target;
        // Open $nav
        $nav.addClass("active transition");
        setTimeout(function () { return $nav.removeClass("transition"); }, 250);
        return this;
    };
    Drawer.prototype.close = function () {
        // Get $nav
        var $nav = this.target;
        // Close $nav
        $nav.addClass("transition").removeClass("active");
        setTimeout(function () { return $nav.removeClass("transition"); }, 250);
        return this;
    };
    Object.defineProperty(Drawer.prototype, "isOpen", {
        get: function () {
            return this.target.hasClass("active");
        },
        enumerable: false,
        configurable: true
    });
    return Drawer;
}());
exports.Drawer = Drawer;
//# sourceMappingURL=Drawer.js.map
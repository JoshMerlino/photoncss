"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const jquery_1 = __importDefault(require("jquery"));
const guid_1 = __importDefault(require("../guid"));
const getPointer_1 = __importDefault(require("../getPointer"));
class Menu {
    constructor(target) {
        this.explicitPosition = false;
        this.target = jquery_1.default(target);
        const $menu = this.target;
        if ($menu.is("[md]"))
            return this;
        $menu.attr("md", "");
        const id = $menu.attr("id") || guid_1.default();
        $menu.attr("id", id);
        $menu.children(".photon-list").children(".photon-list-item").on("click", () => this.close());
        return this;
    }
    __getModal(id) {
        if (jquery_1.default(`.modal-close-area[modal="${id}"]`).length > 0)
            return jquery_1.default(`.modal-close-area[modal="${id}"]`);
        jquery_1.default(`<div class="modal-close-area transparent" modal="${id}"></div>`).appendTo(jquery_1.default("body"));
        const $modal = jquery_1.default(`.modal-close-area[modal="${id}"]`);
        return $modal.on("click", () => this.close());
    }
    anchor(x, y) {
        let dX = x || 0;
        let dY = y || 0;
        this.explicitPosition = true;
        const $menu = this.target;
        const mW = $menu.width();
        const mH = $menu.height();
        if (y === undefined && typeof x !== "number") {
            const $anchor = jquery_1.default(x);
            if ($anchor[0].tagName.toLowerCase() === "input") {
                const { top, left } = $anchor.offset();
                $menu.css({ top: top + $anchor[0].clientHeight + parseInt($anchor.css("border-width")) + 2, left, width: $anchor[0].clientWidth + parseInt($anchor.css("border-width")) * 2 });
            }
            else {
                dX = $anchor.offset()?.left;
                dY = $anchor.offset()?.top;
                $menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8), });
            }
            let isFixed = false;
            $anchor.parents().each(function () {
                if (jquery_1.default(this).css("position") === "fixed") {
                    if (isFixed)
                        return;
                    $menu.css({ position: "fixed" });
                    dX -= jquery_1.default(document).scrollLeft();
                    dY -= jquery_1.default(document).scrollTop();
                    $menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8), });
                    isFixed = true;
                }
            });
        }
        else {
            $menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8), });
        }
        if (dX < window.innerWidth - mW - 8 && dY < window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tl");
        if (dX > window.innerWidth - mW - 8 && dY < window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tr");
        if (dX < window.innerWidth - mW - 8 && dY > window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-bl");
        if (dX > window.innerWidth - mW - 8 && dY > window.innerHeight - mH - 8)
            $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-br");
        return this;
    }
    open() {
        const $menu = this.target;
        const mW = $menu.width();
        const mH = $menu.height();
        const $modal = this.__getModal($menu.attr("id"));
        if (!this.explicitPosition) {
            const x = getPointer_1.default().x;
            const y = getPointer_1.default().y;
            $menu.css({ left: Math.max(Math.min(x, window.innerWidth - mW - 8), 8), top: Math.max(Math.min(y, window.innerHeight - mH - 8), 8), });
        }
        requestAnimationFrame(function () {
            [$menu, $modal].map(e => e.addClass("active"));
        });
        return this;
    }
    close() {
        const $menu = this.target;
        const $modal = jquery_1.default(`.modal-close-area[modal="${$menu.attr("id")}"]`);
        [$menu, $modal].map(e => e.removeClass("active"));
        setTimeout(() => $modal.remove(), 300);
        return this;
    }
    get isOpen() {
        return this.target.hasClass("active");
    }
}
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map
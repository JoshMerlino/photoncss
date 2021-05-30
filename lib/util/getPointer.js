"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
let x = 0;
let y = 0;
let isMouseDown = false;
jquery_1.default("body").on("mousemove", function (event) {
    x = event.pageX;
    y = event.pageY;
});
jquery_1.default("body").on("mousedown", function () {
    isMouseDown = true;
});
jquery_1.default("body").on("mouseup", function () {
    isMouseDown = false;
});
function getPointer() {
    return { x, y, isMouseDown };
}
exports.default = getPointer;
//# sourceMappingURL=getPointer.js.map
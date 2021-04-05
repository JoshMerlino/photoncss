"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var x = 0;
var y = 0;
jquery_1.default("body").on("mousemove", function (event) {
    x = event.pageX;
    y = event.pageY;
});
function getPointer() {
    return { x: x, y: y };
}
exports.default = getPointer;
//# sourceMappingURL=getPointer.js.map
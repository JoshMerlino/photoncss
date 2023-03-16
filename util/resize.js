"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
function resize() {
    const main = (0, jquery_1.default)("main");
    const footer = (0, jquery_1.default)("footer");
    if (footer[0]) {
        main.css("min-height", window.innerHeight - footer[0].clientHeight - 20);
    }
    else {
        main.css("min-height", window.innerHeight - 16);
    }
}
exports.default = resize;
(0, jquery_1.default)(function render() {
    requestAnimationFrame(render);
    resize();
});
//# sourceMappingURL=resize.js.map
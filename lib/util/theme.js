"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const object_1 = require("./object");
function render(theme) {
    const keys = object_1.deepKeys(theme);
    const props = {};
    keys.map((key) => {
        const path = `--${key.replace(/\./g, "_")}`;
        const val = object_1.deepProp(theme, key);
        props[path] = val;
    });
    return props;
}
exports.render = render;
//# sourceMappingURL=theme.js.map
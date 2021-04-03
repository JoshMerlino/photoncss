"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var object_1 = require("./object");
function render(theme) {
    // Get theme keys
    var keys = object_1.deepKeys(theme);
    var props = {};
    // Iterate over all keys
    keys.map(function (key) {
        var path = "--" + key.replace(/\./g, "_");
        var val = object_1.deepProp(theme, key);
        props[path] = val;
    });
    return props;
}
exports.render = render;
//# sourceMappingURL=theme.js.map
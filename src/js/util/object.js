"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepProp = exports.deepKeys = void 0;
var deepKeys = function (t, path) {
    if (path === void 0) { path = []; }
    return Object(t) === t ? Object.entries(t).flatMap(function (_a) {
        var k = _a[0], v = _a[1];
        return exports.deepKeys(v, __spreadArray(__spreadArray([], path), [k]));
    }) : [path.join(".")];
};
exports.deepKeys = deepKeys;
Object.defineProperty(Object, "deepKeys", { value: exports.deepKeys, writable: false });
var deepProp = function (object, propString) {
    var value = object;
    var props = propString.split(".");
    for (var index = 0; index < props.length; index += 1) {
        if (props[index] === undefined)
            break;
        value = value[props[index]];
    }
    return value;
};
exports.deepProp = deepProp;
Object.defineProperty(Object, "deepProp", { value: exports.deepProp, writable: false });
//# sourceMappingURL=object.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepProp = exports.deepKeys = void 0;
function deepKeys(t, path = []) {
    return Object(t) === t ? Object.entries(t).flatMap(([k, v]) => deepKeys(v, [...path, k])) : [path.join(".")];
}
exports.deepKeys = deepKeys;
function deepProp(object, propString) {
    let value = object;
    const props = propString.split(".");
    for (let index = 0; index < props.length; index += 1) {
        if (props[index] === undefined)
            break;
        if (typeof value === "object")
            value = value[props[index]];
    }
    return value;
}
exports.deepProp = deepProp;
Object.defineProperty(Object, "deepProp", { value: deepProp, writable: false });
Object.defineProperty(Object, "deepKeys", { value: deepKeys, writable: false });
//# sourceMappingURL=object.js.map
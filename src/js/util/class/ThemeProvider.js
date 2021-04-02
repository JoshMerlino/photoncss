"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var react_1 = __importStar(require("react"));
var object_1 = require("../object");
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
function ThemeProvider(_a) {
    var _b = _a.theme, theme = _b === void 0 ? "default.light" : _b, _c = _a.global, global = _c === void 0 ? false : _c, children = _a.children;
    // Initialize theme
    var finalTheme;
    // If theme is Theme
    if (typeof theme === "object")
        finalTheme = theme;
    // If theme is string
    else if (typeof theme === "string")
        finalTheme = require("../../../../theme/" + theme + ".json");
    // If invalid theme type
    else
        throw new Error("'" + typeof theme + "' is not a valid theme.");
    finalTheme = __assign(__assign({}, require("../../../../theme/default.light.json")), finalTheme);
    // If it is the root theme
    if (global) {
        // Render CSS
        var style_1 = render(finalTheme);
        // Add variables to root
        Object.keys(style_1).map(function (key) { return document.documentElement.style.setProperty(key, style_1[key]); });
        // Render children
        return react_1.default.createElement(react_1.Fragment, null, children);
    }
    else {
        // Render CSS
        var style = render(finalTheme);
        // Create context of theme
        return react_1.default.createElement("span", { style: style }, children);
    }
}
exports.default = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map
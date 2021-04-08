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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
var react_1 = __importDefault(require("react"));
var theme_1 = require("../util/theme");
function ThemeProvider(_a) {
    var _b = _a.theme, theme = _b === void 0 ? "default.light" : _b, _c = _a.global, global = _c === void 0 ? false : _c, children = _a.children;
    // Initialize theme
    var finalTheme;
    try {
        // If theme is Theme
        if (typeof theme === "object")
            finalTheme = theme;
        // If theme is string
        else if (typeof theme === "string")
            finalTheme = require("../../../theme/" + theme + ".json");
        // If invalid theme type
        else
            throw new Error("'" + typeof theme + "' is not a valid theme.");
        finalTheme = __assign(__assign({}, require("../../../theme/default.light.json")), finalTheme);
    }
    catch (_d) {
        finalTheme = require("../../../theme/default.light.json");
    }
    // If it is the root theme
    if (global) {
        // Render CSS
        var style_1 = theme_1.render(finalTheme);
        // Add variables to root
        Object.keys(style_1).map(function (key) { return document.documentElement.style.setProperty(key, style_1[key]); });
        // Render children
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
    else {
        // Render CSS
        var style = theme_1.render(finalTheme);
        // Create context of theme
        return react_1.default.createElement("span", { style: style }, children);
    }
}
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map
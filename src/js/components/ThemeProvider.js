"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const react_1 = __importDefault(require("react"));
const theme_1 = require("../util/theme");
function ThemeProvider({ theme = "default.light", global = false, children }) {
    let finalTheme;
    try {
        if (typeof theme === "object")
            finalTheme = theme;
        else if (typeof theme === "string")
            finalTheme = require(`../../../theme/${theme}.json`);
        else
            throw new Error(`'${typeof theme}' is not a valid theme.`);
        finalTheme = { ...require("../../../theme/default.base.json"), ...finalTheme };
    }
    catch {
        finalTheme = require("../../../theme/default.base.json");
    }
    if (global) {
        const style = theme_1.render(finalTheme);
        Object.keys(style).map((key) => document.documentElement.style.setProperty(key, style[key]));
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
    const style = theme_1.render(finalTheme);
    return react_1.default.createElement("span", { style: style }, children);
}
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map
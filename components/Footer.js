"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterBody = exports.FooterHeader = exports.FooterCopyright = exports.Footer = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const Layout_1 = require("./Layout");
function Footer({ children, className = "", ...props }) {
    const classes = (0, classnames_1.default)("footer", className);
    return react_1.default.createElement("footer", { className: classes, ...props }, children);
}
exports.Footer = Footer;
function FooterCopyright({ children, className = "", ...props }) {
    const classes = (0, classnames_1.default)("footer-copyright", className);
    return (react_1.default.createElement("div", { className: classes, ...props },
        react_1.default.createElement(Layout_1.Container, null, children)));
}
exports.FooterCopyright = FooterCopyright;
function FooterHeader({ children }) {
    return (react_1.default.createElement(Layout_1.Container, null,
        react_1.default.createElement("h2", { style: { marginLeft: 0 } }, children)));
}
exports.FooterHeader = FooterHeader;
function FooterBody({ children }) {
    return (react_1.default.createElement(Layout_1.Container, { style: { marginBottom: 16 } }, children));
}
exports.FooterBody = FooterBody;
//# sourceMappingURL=Footer.js.map
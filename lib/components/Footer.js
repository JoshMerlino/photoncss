"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterBody = exports.FooterHeader = exports.FooterCopyright = exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const Layout_1 = require("./Layout");
const guid_1 = __importDefault(require("../util/guid"));
function Footer({ children, className, ...props }) {
    const id = guid_1.default();
    const classes = classnames_1.default("footer", className);
    function resize() {
        const footer = $(`#${id}`);
        const main = footer.siblings("main");
        if (main.length === 0)
            return;
        main.css("min-height", window.innerHeight - footer[0].clientHeight - 24);
    }
    setImmediate(function () {
        (function frame() {
            if ($(`#${id}`).length === 0)
                return;
            resize();
            requestAnimationFrame(frame);
        }());
    });
    return react_1.default.createElement("footer", { className: classes, ...props, id: id }, children);
}
exports.Footer = Footer;
Footer.propTypes = {
    children: prop_types_1.default.any
};
Footer.defaultProps = {
    children: null
};
function FooterCopyright({ children, className = "", ...props }) {
    const classes = classnames_1.default("footer-copyright", className);
    return (react_1.default.createElement("div", { className: classes, ...props },
        react_1.default.createElement(Layout_1.Container, null, children)));
}
exports.FooterCopyright = FooterCopyright;
FooterCopyright.propTypes = {
    children: prop_types_1.default.any
};
FooterCopyright.defaultProps = {
    children: null
};
function FooterHeader({ children }) {
    return (react_1.default.createElement(Layout_1.Container, null,
        react_1.default.createElement("h2", { style: { marginLeft: 0 } }, children)));
}
exports.FooterHeader = FooterHeader;
FooterHeader.propTypes = {
    children: prop_types_1.default.any
};
FooterHeader.defaultProps = {
    children: null
};
function FooterBody({ children }) {
    return (react_1.default.createElement(Layout_1.Container, { style: { marginBottom: 16 } }, children));
}
exports.FooterBody = FooterBody;
FooterBody.propTypes = {
    children: prop_types_1.default.any
};
FooterBody.defaultProps = {
    children: null
};
//# sourceMappingURL=Footer.js.map
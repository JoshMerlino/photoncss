"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardActions = exports.CardOverline = exports.CardBody = exports.CardSubtitle = exports.CardSubheader = exports.CardTitle = exports.Card = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
function Card({ children, display, variant, className = "", ...props }) {
    const classes = (0, classnames_1.default)("photon-card", `variant-${variant}`, `display-${display}`, className);
    return react_1.default.createElement("div", { tabIndex: 0, className: classes, ...props }, children);
}
exports.Card = Card;
Card.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    variant: prop_types_1.default.oneOf(["raised", "outlined"]),
    display: prop_types_1.default.oneOf(["inline", "block"])
};
Card.defaultProps = {
    children: null,
    variant: "raised",
    display: "block"
};
function CardTitle({ children, subtitle, seperated, className = "", ...props }) {
    const classes = (0, classnames_1.default)("card-title", seperated && "seperated", className);
    return (react_1.default.createElement("div", { className: classes, ...props },
        react_1.default.createElement("h1", null, children),
        subtitle !== "" && react_1.default.createElement("h2", null, subtitle)));
}
exports.CardTitle = CardTitle;
CardTitle.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    subtitle: prop_types_1.default.string,
    seperated: prop_types_1.default.bool
};
CardTitle.defaultProps = {
    children: null,
    subtitle: "",
    seperated: true
};
function CardSubheader({ children, className = "", ...props }) {
    const classes = (0, classnames_1.default)("secondary", className);
    return react_1.default.createElement("p", { className: classes, ...props }, children);
}
exports.CardSubheader = CardSubheader;
CardSubheader.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardSubheader.defaultProps = {
    children: null
};
function CardSubtitle({ children, className = "", ...props }) {
    const classes = (0, classnames_1.default)("card-subtitle", className);
    return react_1.default.createElement("h2", { className: classes, ...props }, children);
}
exports.CardSubtitle = CardSubtitle;
CardSubtitle.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardSubtitle.defaultProps = {
    children: null
};
function CardBody({ children, className = "", ...props }) {
    const classes = (0, classnames_1.default)("card-body", className);
    return react_1.default.createElement("p", { className: classes, ...props }, children);
}
exports.CardBody = CardBody;
CardBody.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardBody.defaultProps = {
    children: null
};
function CardOverline({ children, className = "", ...props }) {
    const classes = (0, classnames_1.default)("overline", className);
    return react_1.default.createElement("p", { className: classes, ...props }, children);
}
exports.CardOverline = CardOverline;
CardOverline.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string
};
CardOverline.defaultProps = {
    children: null
};
function CardActions({ children, direction, seperated, className = "", ...props }) {
    const classes = (0, classnames_1.default)("card-actions", `direction-${direction}`, seperated && "seperated", className);
    return react_1.default.createElement("div", { className: classes, ...props }, children);
}
exports.CardActions = CardActions;
CardActions.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    direction: prop_types_1.default.oneOf(["left", "right"]),
    seperated: prop_types_1.default.bool
};
CardActions.defaultProps = {
    children: null,
    direction: "left",
    seperated: true
};
//# sourceMappingURL=Card.js.map
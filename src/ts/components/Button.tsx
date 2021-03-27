import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import Waves from "../mixin/waves.js";

export function Button({ children, color, variant, waves, className = "", ...props }: InferProps<typeof Button.propTypes>) : JSX.Element {
	const classes = classnames("photon-btn", `variant-${variant}`, `color-${color}`, waves && "waves-effect", className);
	setImmediate(Waves.init);
	return <button className={classes} {...props}>{ children }</button>;
}

Button.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	variant: PropTypes.oneOf([ "raised" ]),
	waves: PropTypes.bool
};

Button.defaultProps = {
	children: null,
	color: "none",
	variant: "raised",
	waves: true
};

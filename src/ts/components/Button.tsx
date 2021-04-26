import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import Waves from "../util/Waves";

/* ****************************************** */

export function Button({ children, color, display, variant, size, waves, className = "", ...props }: InferProps<typeof Button.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("photon-btn", `variant-${variant}`, `display-${display}`, `color-${color}`, `size-${size}`, waves && "waves-effect", className);
	if(waves) setImmediate(Waves.init);
	return <button className={classes} {...props}>{ children }</button>;
}

Button.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	size: PropTypes.oneOf([ "normal", "dense", "large" ]),
	variant: PropTypes.oneOf([ "contained", "flat", "outlined", "raised" ]),
	display: PropTypes.oneOf([ "inline", "block" ]),
	waves: PropTypes.bool
};

Button.defaultProps = {
	children: null,
	color: "none",
	variant: "contained",
	size: "normal",
	display: "inline",
	waves: true
};

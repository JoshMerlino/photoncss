import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function Spinner({ size, color, className = "", ...props }: InferProps<typeof Spinner.propTypes>) : JSX.Element {
	const classes = classnames("photon-spinner", `color-${color}`, `size-${size}`, className);
	return (
		<svg className={classes} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" {...props}>
			<circle className="path" fill="none" cx="33" cy="33" r="30"></circle>
		</svg>
	);
}

Spinner.propTypes = {
	className: PropTypes.any,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	size: PropTypes.oneOf([ "small", "normal", "large" ])
};

Spinner.defaultProps = {
	color: "none",
	size: "normal"
};

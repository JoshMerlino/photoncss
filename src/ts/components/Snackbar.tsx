import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function Snackbar({ children, className = "", ...props }: InferProps<typeof Snackbar.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("photon-snackbar", className);
	return <div className={classes} {...props}>{ children }</div>;
}

Snackbar.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

Snackbar.defaultProps = {
	children: null
};

import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function Dialog({ children, type, transition, size, className = "", ...props }: InferProps<typeof Dialog.propTypes>) : JSX.Element {
	const classes = classnames("photon-dialog", `size-${size}`, `transition-${transition}`, `type-${type}`, className);
	return (
		<div className={classes} {...props}>
			{ children }
		</div>
	);
}

Dialog.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	type: PropTypes.oneOf([ "alert" ]),
	transition: PropTypes.oneOf([ "grow" ]),
	size: PropTypes.oneOf([ "fullscreen", "small", "normal", "large" ])
};

Dialog.defaultProps = {
	children: null,
	type: "alert",
	transition: "grow",
	size: "normal"
};

/* ****************************************** */

export function DialogTitle({ children, subtitle, seperated, className = "", ...props }: InferProps<typeof DialogTitle.propTypes>) : JSX.Element {
	const classes = classnames("dialog-title", seperated && "seperated", className);
	return (
		<div className={classes} {...props}>
			<h1>{ children }</h1>
			{ subtitle !== "" && <h2>{ subtitle }</h2> }
		</div>
	);
}

DialogTitle.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	subtitle: PropTypes.string,
	seperated: PropTypes.bool
};

DialogTitle.defaultProps = {
	children: null,
	subtitle: "",
	seperated: false
};

/* ****************************************** */

export function DialogActions({ children, direction, seperated, className = "", ...props }: InferProps<typeof DialogActions.propTypes>) : JSX.Element {
	const classes = classnames("dialog-actions", `direction-${direction}`, seperated && "seperated", className);
	return <div className={classes} {...props}>{ children }</div>;
}

DialogActions.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	direction: PropTypes.oneOf([ "left", "right" ]),
	seperated: PropTypes.bool
};

DialogActions.defaultProps = {
	children: null,
	direction: "right",
	seperated: false
};

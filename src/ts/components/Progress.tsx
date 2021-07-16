import React from "react";
import classnames from "classnames";

/* ****************************************** */

export interface SpinnerProps {
	className?: string;
	color?: "none" | "primary" | "secondary";
	size?: "small" | "normal" | "large";
}
export function Spinner({ size = "normal", color = "none", className = "", ...props }: SpinnerProps): JSX.Element {
	const classes = classnames("photon-spinner", `color-${color}`, `size-${size}`, className);
	return (
		<svg className={classes} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" {...props}>
			<circle className="path" fill="none" cx="33" cy="33" r="30"></circle>
		</svg>
	);
}

/* ****************************************** */

export interface IndeterminateProgressProps {
	className?: string;
	color?: "none" | "primary" | "secondary";
}
export function IndeterminateProgress({ color = "none", className = "", ...props }: IndeterminateProgressProps): JSX.Element {
	const classes = classnames("photon-progress", `color-${color}`, className);
	return (
		<div className={classes} {...props}>
			<div className="indeterminate"></div>
		</div>
	);
}

/* ****************************************** */

export interface ProgressProps {
	className?: string;
	color?: "none" | "primary" | "secondary";
	value?: number;
	min?: number;
	max?: number;
}
export function Progress({ max = 1, min = 0, value = 0.5, color = "none", className = "", ...props }: ProgressProps): JSX.Element {
	const classes = classnames("photon-progress", `color-${color}`, className);
	return (
		<div className={classes} {...props}>
			<div className="determinate" style={{ width: `${(max - min) * value / max}%` }}></div>
		</div>
	);
}

import React, { ReactNode } from "react";
import classnames from "classnames";
import Waves from "../util/Waves";

/* ****************************************** */

type Props = {
	children: ReactNode;
	className?: string;
	color?: "none" | "primary" | "secondary";
	size?: "normal" | "dense" | "large";
	variant?: "contained" | "flat" | "outlined" | "raised";
	display?: "inline" | "block";
	waves?: boolean;
	[key: string]: any;
}

export function Button({
	children,
	color = "none",
	display = "inline",
	variant = "contained",
	size = "normal",
	waves = true,
	className = "",
	...props
}: Props): JSX.Element {

	// Get className for node
	const classes = classnames(
		"photon-btn",
		`variant-${variant}`,
		`display-${display}`,
		`color-${color}`,
		`size-${size}`,
		waves && "waves-effect",
		className
	);

	// If waves is enabled, initialize
	if (waves) setImmediate(Waves.init);

	// Return component
	return (
		<button className={classes} {...props}>{ children }</button>
	);

}

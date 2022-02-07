import React, { ReactNode } from "react";
import classnames from "classnames";

/* ****************************************** */

type Props = {
	children: ReactNode;
	className?: string;
	[key: string]: any;
}

export function Snackbar({
	children,
	className = "",
	...props
}: Props): JSX.Element {

	// Get className for node
	const classes = classnames(
		"photon-snackbar",
		className
	);

	// Return component
	return (
		<div className={classes} {...props}>{ children }</div>
	);
}

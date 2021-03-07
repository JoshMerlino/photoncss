import React from "react";
import classnames from "classnames";

/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 */
export function Banner({
	className 		= "",
	children 		= null,
	...props
}) {

	// Get element class
	const classes = classnames("banner", className).replace(/\s\s+/g, " ");

	// Render component
	return (
		<div className={classes} {...props}>
			<div className="container row">{children}</div>
		</div>
	)

}

/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 */
export function BannerActions({
	className 		= "",
	children 		= null,
	...props
}) {

	// Get element class
	const classes = classnames("banner-actions", className).replace(/\s\s+/g, " ");

	// Render component
	return (
		<div className={classes} {...props}>{children}</div>
	)

}

/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 */
export function BannerContent({
	className 		= "",
	children 		= null,
	...props
}) {

	// Get element class
	const classes = classnames("banner-content", className).replace(/\s\s+/g, " ");

	// Render component
	return (
		<div className={classes} {...props}>{children}</div>
	)

}

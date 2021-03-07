import React from "react";
import { prefixColorQuery } from "../src/js/photon.js";
import classnames from "classnames";

/**
 * @param {Object} props - JSX Props
 * @param {string} props.className - Additional classnames to be appended to the root component
 * @param {string} props.variant - Type of button to use
 * @param {string} props.color - Color of the button, ColorQuery
 * @param {string} props.textColor - Text color of the button, ColorQuery
 * @param {string} props.size - Size class of the button, dense | large
 * @param {boolean} props.disabled - Disable the button
 * @param {string|boolean} props.waves - Waves, if false no waves, else color query
 */
export function Button({
	className 		= "",
	children 		= null,
	variant			= "raised",
	color			= "",
	textColor		= "",
	size			= "",
	disabled  		= false,
	waves 	 		= true,
	...props
}) {

	// Get element class
	const classes = classnames("btn", {
		[variant]: variant !== "",
		[color]: color !== "",
		[prefixColorQuery("text", textColor)]: textColor !== "",
		[size]: size !== "",
		disabled,
		["waves-effect"]: waves !== false,
		[prefixColorQuery("waves", typeof waves === "string" ? waves : "")]: typeof waves === "string"
	}, className).replace(/\s\s+/g, " ");

	// Render component
	return (
		<button className={classes} {...props}>{children}</button>
	)

}

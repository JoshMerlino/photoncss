import classnames from "classnames";
import $ from "jquery";
import React, { CSSProperties, ReactNode } from "react";
import guid from "../util/guid";
import Waves from "../util/Waves";

/* ****************************************** */

type Props = {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	id?: string;
	color?: "none" | "primary" | "secondary";
	labelPosition?: "before" | "after";
	variant?: "normal" | "round";
	waves?: boolean;
	indeterminate?: boolean;
	[key: string]: any;
}

export function Checkbox({
	children = null,
	labelPosition = "after",
	style,
	variant = "normal",
	indeterminate = false,
	color = "none",
	waves = true,
	id,
	className = "",
	...props
}: Props): JSX.Element {

	// Get className for node
	const classes = classnames(
		"photon-checkbox",
		indeterminate && "indeterminate",
		`variant-${variant}`,
		`color-${color}`,
		`labelposition-${labelPosition}`,
		className
	);

	id = id || guid();

	setImmediate(function() {

		// Define elements
		const input = $(`#${id}`);
		const wrapper = input.parent();
		const ripple = $(`#${id}-ripple`)[0];

		wrapper.off("mousedown").on("mousedown", () => {
			Waves.ripple(ripple, { wait: 1e6, ink: true });
			wrapper.addClass("active");
		});

		wrapper.off("mouseup").on("mouseup", () => {
			Waves.calm(ripple);
			wrapper.removeClass("active");
		});

	});

	return (
		<div className={classes} {...{ style }}>
			{ labelPosition === "before" && children && <label htmlFor={id}>{ children }</label> }
			<input tabIndex={0} type="checkbox" id={id} {...props}/>
			<div id={`${id}-ripple`} className={classnames("ripple", waves && "waves-effect waves-ink")}></div>
			{ labelPosition === "after" && children && <label htmlFor={id}>{ children }</label> }
		</div>
	);
}

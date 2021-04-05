import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";
import $ from "jquery";
import Waves from "../util/Waves";

/* ****************************************** */

export function Switch({ children, labelPosition, color, waves, id, className = "", ...props }: InferProps<typeof Switch.propTypes>) : JSX.Element {
	const classes = classnames("photon-switch", `color-${color}`, `labelposition-${labelPosition}`, className);

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
		<div className={classes}>
			{ labelPosition === "before" && children && <label htmlFor={id}>{ children }</label> }
			<input tabIndex={0} type="checkbox" id={id} {...props}/>
			<div id={`${id}-ripple`} className={classnames("ripple", waves && "waves-effect waves-ink")}></div>
			{ labelPosition === "after" && children && <label htmlFor={id}>{ children }</label> }
		</div>
	);
}

Switch.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	id: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	labelPosition: PropTypes.oneOf([ "before", "after" ]),
	variant: PropTypes.oneOf([ "normal", "round" ]),
	waves: PropTypes.bool
};

Switch.defaultProps = {
	children: null,
	color: "none",
	variant: "normal",
	labelPosition: "after",
	waves: true
};

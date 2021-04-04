import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";
import $ from "jquery";
import Waves from "../util/Waves";

/* ****************************************** */

export function Checkbox({ children, labelPosition, color, waves, id, className = "", ...props }: InferProps<typeof Checkbox.propTypes>) : JSX.Element {
	const classes = classnames("photon-checkbox", `color-${color}`, `labelposition-${labelPosition}`, className);

	id = id || guid();

	/*

	// Define elements
	const wrapper = $(`#${id}`).parent();
	const ripple = wrapper.children(".ripple")[0];
	wrapper.on("mousedown", () => Waves.ripple(ripple, { duration: 1e6, ink: true }));

	*/

	return (
		<div className={classes}>
			{ labelPosition === "before" && children && <label htmlFor={id}>{ children }</label> }
			<input tabIndex={0} type="checkbox" id={id} {...props}/>
			{ waves && <div className={classnames("ripple", waves && "waves-effect waves-ink")}></div> }
			{ labelPosition === "after" && children && <label htmlFor={id}>{ children }</label> }
		</div>
	);
}

Checkbox.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	id: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	labelPosition: PropTypes.oneOf([ "before", "after" ]),
	waves: PropTypes.bool
};

Checkbox.defaultProps = {
	children: null,
	color: "none",
	labelPosition: "after",
	waves: true
};

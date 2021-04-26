import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";
import $ from "jquery";
import Waves from "../util/Waves";

/* ****************************************** */

export function Radio({ children, labelPosition, color, waves, style, id, className = "", ...props }: InferProps<typeof Radio.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("photon-radio", `color-${color}`, `labelposition-${labelPosition}`, className);

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
			<input tabIndex={0} type="radio" id={id} {...props}/>
			<div id={`${id}-ripple`} className={classnames("ripple", waves && "waves-effect waves-ink")}></div>
			{ labelPosition === "after" && children && <label htmlFor={id}>{ children }</label> }
		</div>
	);
}

Radio.propTypes = {
	children: PropTypes.any,
	style: PropTypes.any,
	className: PropTypes.string,
	id: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	labelPosition: PropTypes.oneOf([ "before", "after" ]),
	waves: PropTypes.bool
};

Radio.defaultProps = {
	children: null,
	color: "none",
	labelPosition: "after",
	waves: true
};

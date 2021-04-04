import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";

/* ****************************************** */

export function Checkbox({ children, labelPosition, color, id: explicitId, className = "", ...props }: InferProps<typeof Checkbox.propTypes>) : JSX.Element {
	const classes = classnames("photon-checkbox", `color-${color}`, className);

	const id = explicitId || guid();

	return (
		<div className={classes}>
			{ labelPosition === "before" && children && <label htmlFor={id}>{ children }</label> }
			<input tabIndex={0} type="checkbox" id={id} {...props}/>
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
};

Checkbox.defaultProps = {
	children: null,
	color: "none",
	labelPosition: "after"
};

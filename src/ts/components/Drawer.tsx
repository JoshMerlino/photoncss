import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function Drawer({ children, from, swipe, className = "", ...props }: InferProps<typeof Drawer.propTypes>) : JSX.Element {
	const classes = classnames("photon-drawer", swipe && "swipe-enabled", `from-${from}`, className);
	return (
		<aside className={classes} {...props}>
			{ children }
			{ swipe && <div className="photon-swipe_target"></div> }
		</aside>
	);
}

Drawer.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	from: PropTypes.oneOf([ "left", "right", "top", "bottom" ]),
	swipe: PropTypes.bool
};

Drawer.defaultProps = {
	children: null,
	swipe: true,
	from: "left"
};

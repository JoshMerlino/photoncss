import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import { List } from "./List";

/* ****************************************** */

export function Menu({ children, className = "", ...props }: InferProps<typeof Menu.propTypes>) : JSX.Element {
	const classes = classnames("photon-menu", className);
	return (
		<div className={classes} {...props}>
			<List>
				{ children }
			</List>
		</div>
	);
}

Menu.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

Menu.defaultProps = {
	children: null
};

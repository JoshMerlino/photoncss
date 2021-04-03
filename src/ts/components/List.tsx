import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function List({ children, className = "", ...props }: InferProps<typeof List.propTypes>) : JSX.Element {
	const classes = classnames("photon-list", className);
	return <ul className={classes} {...props}>{ children }</ul>;
}

List.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

List.defaultProps = {
	children: null
};

/* ****************************************** */

export function ListItem({ children, round, waves, icon, iconEnd, className = "", ...props }: InferProps<typeof ListItem.propTypes>) : JSX.Element {
	const classes = classnames("photon-list-item", round && "round", waves && "waves-effect", className);
	return (
		<li className={classes} {...props}>
			<div className="list-item-name">
				{ icon }
				{ children }
			</div>
			<div className="list-item-meta">
				{ iconEnd }
			</div>
		</li>
	);
}

ListItem.propTypes = {
	children: PropTypes.any,
	icon: PropTypes.any,
	iconEnd: PropTypes.any,
	className: PropTypes.string,
	round: PropTypes.bool,
	waves: PropTypes.bool,
};

ListItem.defaultProps = {
	children: null,
	icon: null,
	iconEnd: null,
	round: false,
	waves: true
};

/* ****************************************** */

export function ListSubheader({ children, className = "", ...props }: InferProps<typeof ListSubheader.propTypes>) : JSX.Element {
	const classes = classnames("photon-subheader", className);
	return <li className={classes} {...props}>{ children }</li>;
}

ListSubheader.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

ListSubheader.defaultProps = {
	children: null
};

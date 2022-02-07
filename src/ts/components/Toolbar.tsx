import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";
import $ from "jquery";

/* ****************************************** */

export function Toolbar({ children, color, variant, size, position, id, className = "", ...props }: InferProps<typeof Toolbar.propTypes> & InferProps<any>): JSX.Element {

	id = id || guid();

	setImmediate(function() {
		const toolbar = $(`#${id}`);
		toolbar.siblings(".photon-toolbar-spacer").remove();
		toolbar.before(`<div class="photon-toolbar-spacer" data-toolbar="${id}"></div>`);
		const spacer = $(`[data-toolbar="${id}"]`);
		spacer.height(toolbar.height() || 0);

		if (variant === "float") {
			$(document).on("scroll", () => {
				const scroll = $(document).scrollTop() as number;
				if (scroll > 0) {
					toolbar.removeClass("variant-flat").addClass("variant-raised");
				} else {
					toolbar.addClass("variant-flat").removeClass("variant-raised");
				}
			});
		}

	});

	const classes = classnames("photon-toolbar", `variant-${variant}`, `position-${position}`, `color-${color}`, `size-${size}`, className);
	return <header id={id} className={classes} {...props}>{ children }</header>;
}

Toolbar.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	size: PropTypes.oneOf([ "normal", "dense", "large" ]),
	variant: PropTypes.oneOf([ "flat", "raised", "float" ]),
	position: PropTypes.oneOf([ "top", "bottom" ]),
	id: PropTypes.string
};

Toolbar.defaultProps = {
	children: null,
	color: "none",
	variant: "float",
	size: "normal",
	position: "top"
};

/* ****************************************** */

export function ToolbarTitle({ children, subtitle, ...props }: InferProps<typeof ToolbarTitle.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("photon-toolbartitle", subtitle !== null && "contains-subtitle");
	return (
		<div className={classes} {...props}>
			{ children }
			{ subtitle !== null && <div className="subtitle">{ subtitle }</div> }
		</div>
	);
}

ToolbarTitle.propTypes = {
	children: PropTypes.any,
	subtitle: PropTypes.any
};

ToolbarTitle.defaultProps = {
	children: null,
	subtitle: null
};

/* ****************************************** */

export function ToolbarActions({ children, ...props }: InferProps<typeof ToolbarActions.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("photon-toolbaractions");
	return <div className={classes} {...props}>{ children }</div>;
}

ToolbarActions.propTypes = {
	children: PropTypes.any
};

ToolbarActions.defaultProps = {
	children: null
};

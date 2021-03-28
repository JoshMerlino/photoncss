import React  from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import Waves from "../util/Waves.js";
import $ from "jquery";
import guid from "../util/guid";

/* ****************************************** */

export function TextIcon({ children, variant, ...props }: InferProps<typeof TextIcon.propTypes>) : JSX.Element {
	const classes = classnames("material-icons", `variant-${variant}`, "text-icon");
	return <i className={classes} {...props}>{ children }</i>;
}

TextIcon.propTypes = {
	children: PropTypes.any,
	variant: PropTypes.oneOf([ "normal", "outlined", "round", "sharp", "two-tone" ])
};

TextIcon.defaultProps = {
	children: null,
	variant: "normal"
};

/* ****************************************** */

export function Icon({ children, variant, ink, ...props }: InferProps<typeof Icon.propTypes>) : JSX.Element {
	const classes = classnames("material-icons", `variant-${variant}`, ink && "waves-effect waves-ink");
	const id = guid();

	setImmediate(function() {

		$(`#${id}`).on("mousedown touchstart", function(this: Element, event: Event) {
			event.stopPropagation();
			Waves.calm(this);
			Waves.ripple(this, { wait: 1e10, ink: true });
		});

		$(`#${id}`).on("mouseup mouseleave", function(this: Element) {
			Waves.calm(this);
		});

	});

	return <i id={id} className={classes} {...props}>{ children }</i>;
}

Icon.propTypes = {
	children: PropTypes.any,
	variant: PropTypes.oneOf([ "normal", "outlined", "round", "sharp", "two-tone" ]),
	ink: PropTypes.bool
};

Icon.defaultProps = {
	children: null,
	variant: "normal",
	ink: true
};
import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";
import $ from "jquery";
import getPointer from "../util/getPointer";

/* ****************************************** */

export function InputField({ children, variant, subtitle, type = "text", color, id, className = "", ...props }: InferProps<typeof InputField.propTypes>): JSX.Element {
	const classes = classnames("photon-input", `variant-${variant}`, `color-${color}`, className);

	id = id || guid();

	setImmediate(function() {

		// Define elements
		const input = $(`#${id}`);
		const wrapper = input.parent();
		const bar = wrapper.children(".bar");

		input.off("blur").on("blur", () => {
			const containsContent = input.val() !== "";
			input[containsContent ? "addClass":"removeClass"]("contains-content");
			bar.addClass("transitioning").css({ opacity: 0 });
		});

		input.off("focus").on("focus", () => {
			const { x } = getPointer();
			bar.removeClass("transitioning").css({ opacity: 1, width: 0, left: x - wrapper.offset().left });
			setImmediate(function() {
				bar.addClass("transitioning").css({ width: "100%", left: 0 });
			});
		});

	});

	return (
		<div className={classes}>
			<input tabIndex={0} type={type ? type : "text"} id={id} {...props}/>
			<label htmlFor={id}>{children || "\u00A0"}</label>
			<div className="bar"></div>
			{ subtitle !== "" && <p className="subtitle">{subtitle}</p> }
		</div>
	);
}

InputField.propTypes = {
	children: PropTypes.any,
	type: PropTypes.any,
	className: PropTypes.string,
	subtitle: PropTypes.string,
	id: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	variant: PropTypes.oneOf([ "normal", "solid outlined" ]),
};

InputField.defaultProps = {
	children: null,
	color: "none",
	variant: "normal",
	subtitle: ""
};

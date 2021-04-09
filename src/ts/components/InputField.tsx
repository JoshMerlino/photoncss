import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";
import $ from "jquery";
import getPointer from "../util/getPointer";

/* ****************************************** */

export function InputField({ children, variant, prefix, suffix, subtitle, type = "text", color, id, className = "", ...props }: InferProps<typeof InputField.propTypes>): JSX.Element {
	const classes = classnames("photon-input", `type-${type}`, `variant-${variant}`, `color-${color}`, className);

	id = id || guid();

	setImmediate(function() {

		// Define elements
		const input = $(`#${id}`);
		const wrapper = input.parent();
		const bar = wrapper.children(".bar");
		const label = wrapper.children("label");
		const suffix = wrapper.children(".suffix");
		const prefix = wrapper.children(".prefix");

		input.not(":read-only").off("blur").on("blur", () => {
			bar.addClass("transitioning").css({ opacity: 0 });
		});

		input.not(":read-only").off("keyup keydown mouseleave").on("keyup keydown mouseleave", () => {
			const containsContent = input.val() !== "";
			input[containsContent ? "addClass":"removeClass"]("contains-content");
		}).trigger("keydown");

		input.not(":read-only").off("focus").on("focus", () => {
			const { x } = getPointer();
			const { left } = wrapper.offset() as JQueryCoordinates;
			bar.removeClass("transitioning").css({ opacity: 1, width: 0, left: Math.min(x - left, wrapper.width() as number) });
			setImmediate(function() {
				bar.addClass("transitioning").css({ width: "calc(100% - 2px)", left: 1 });
			});
		});

		if(wrapper.hasClass("variant-normal")) {
			if(prefix.length === 1) {
				input.css({ paddingLeft: prefix.width() as number !== 0 ? prefix.width() as number + 8 : 0 });
				label.css({ marginLeft: prefix.width() as number !== 0 ? prefix.width() as number + 8 : 0 });
			}

			if(suffix.length === 1) {
				input.css({ paddingRight: suffix.width() as number !== 0 ? suffix.width() as number + 8 : 0 });
			}
		} else if(wrapper.hasClass("variant-outlined")) {
			if(prefix.length === 1) {
				input.css({ paddingLeft: prefix.width() as number !== 0 ? prefix.width() as number + 23.5 : 15.5 });
				label.css({ marginLeft: prefix.width() as number !== 0 ? prefix.width() as number + 23.5 : 15.5 });
			}

			if(suffix.length === 1) {
				input.css({ paddingRight: suffix.width() as number !== 0 ? suffix.width() as number + 23.5 : 15.5 });
			}
		} else {
			if(prefix.length === 1) {
				input.css({ paddingLeft: prefix.width() as number !== 0 ? prefix.width() as number + 24 : 16 });
				label.css({ marginLeft: prefix.width() as number !== 0 ? prefix.width() as number + 24 : 16 });
			}

			if(suffix.length === 1) {
				input.css({ paddingRight: suffix.width() as number !== 0 ? suffix.width() as number + 24 : 16 });
			}
		}

	});

	return (
		<div className={classes}>
			<input tabIndex={0} type={type ? type : "text"} id={id} {...props}/>
			{ prefix !== "" && <span className="prefix">{prefix}</span>}
			{ suffix !== "" && <span className="suffix">{suffix}</span>}
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
	suffix: PropTypes.string,
	prefix: PropTypes.string,
	id: PropTypes.string,
	color: PropTypes.oneOf([ "none", "primary", "secondary" ]),
	variant: PropTypes.oneOf([ "normal", "filled", "outlined" ]),
};

InputField.defaultProps = {
	children: null,
	color: "none",
	variant: "normal",
	suffix: "",
	prefix: "",
	subtitle: ""
};

import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import guid from "../util/guid";
import $ from "jquery";
import getPointer from "../util/getPointer";
import { Menu } from "./Menu";
import { ListItem } from "./List";
import { Menu as IMenu } from "../util/class/Menu";

/* ****************************************** */

export function InputField({ children, variant, dropdown, prefix, suffix, readOnly, subtitle, type = "text", color, id, className = "", ...props }: InferProps<typeof InputField.propTypes>): JSX.Element {
	const classes = classnames("photon-input", dropdown !== null && "photon-dropdown", `type-${type}`, `variant-${variant}`, `color-${color}`, className);

	id = id || guid();

	setImmediate(function() {

		// Define elements
		const input = $(`#${id}`);
		const wrapper = input.parent();
		const bar = wrapper.children(".bar");
		const label = wrapper.children("label");
		const suffix = wrapper.children(".suffix");
		const prefix = wrapper.children(".prefix");

		input.off("blur").on("blur", () => {
			bar.addClass("transitioning").css({ opacity: 0 });
		});

		input.off("keyup keydown mouseleave").on("keyup keydown mouseleave", () => {
			const containsContent = input.val() !== "";
			input[containsContent ? "addClass":"removeClass"]("contains-content");
		}).trigger("keydown");

		input.off("focus").on("focus", () => {

			// Bar
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

		// Menu stuff
		if(dropdown === null) return;

		const menu = new IMenu($(`#${id}-dropdown`));

		input.on("focus", () => {
			menu.anchor(input);
			menu.open();
		});

		input.on("blur", () => {
			const { isMouseDown } = getPointer();
			if(!isMouseDown) menu.close();
		});

	});

	return <>
		<div className={classes}>
			<input tabIndex={0} type={type} readOnly={dropdown !== null || readOnly} id={id} {...props}/>
			{ prefix !== "" && <span className="prefix">{prefix}</span>}
			{ suffix !== "" && <span className="suffix">{suffix}</span>}
			<label htmlFor={id}>{children || "\u00A0"}</label>
			<div className="bar"></div>
			{ subtitle !== "" && <p className="subtitle">{subtitle}</p> }
		</div>
		{ dropdown !== null &&
			<Menu id={`${id}-dropdown`}>
				{ dropdown && dropdown.map((item, key) => <ListItem tabIndex={key} key={key} onClick={ () => {
					const input = $(`#${id}`);
					input.val(item);
					input.addClass("contains-content");
					"onChange" in props && props.onChange({ target: input[0], value: item });
				}}>{item}</ListItem>) }
			</Menu>
		}
	</>;
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
	dropdown: PropTypes.array,
	readOnly: PropTypes.bool
};

InputField.defaultProps = {
	children: null,
	color: "none",
	variant: "normal",
	suffix: "",
	prefix: "",
	subtitle: "",
	dropdown: null,
	readOnly: false
};

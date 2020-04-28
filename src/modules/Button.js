import React from "react";
import Photon from "../src/js/photon.js";

class Button extends React.Component {

	// Define default props
	static defaultProps = {
		variant: "raised",
		color: "",
		size: "default",
		textColor: false,
		waves: true,
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { variant, color, size, textColor, waves, disabled, ...rest } = this.props;
		this.rest = rest;
		return [
			"btn",
			...(rest.className || "").split(" "),
			variant,
			color,
			size !== "default" ? size : "",
			textColor !== false ? Photon.prefixColorQuery("text", textColor) : "",
			waves !== false ? `waves-effect${waves !== true ? ` ${Photon.prefixColorQuery("waves", waves)}` : ""}` : "",
			disabled ? "disabled" : ""
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<button className={this.serialize()} {...this.rest}>{this.props.children}</button>
		);
	}

}

export { Button };

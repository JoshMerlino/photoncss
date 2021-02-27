import React from "react";
import Photon from "../src/js/photon.js";

class Icon extends React.Component {

	// Define default props
	static defaultProps = {
		textColor: false,
		waves: "ink",
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { textColor, waves, size, ...rest } = this.props;
		this.rest = rest;
		return [
			"material-icons",
			...(rest.className || "").split(" "),
			size ? size : "",
			textColor !== false ? Photon.prefixColorQuery("text", textColor) : "",
			waves !== false ? `waves-effect${waves !== true ? ` ${Photon.prefixColorQuery("waves", waves)}` : ""}` : "",
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<i className={this.serialize()} {...this.rest}>{this.props.children}</i>
		);
	}

}

export { Icon };

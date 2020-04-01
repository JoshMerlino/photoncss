import React from "react";
import Photon from "photoncss";

class Checkbox extends React.Component {

	// Define default props
	static defaultProps = {
		color: "accent",
		size: "default",
		waves: true,
		disabled: false
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { color, size, waves, disabled, ...rest } = this.props;
		this.rest = rest;
		return [
			"checkbox",
			...(rest.className || "").split(" "),
			color,
			size !== "default" ? size : "",
			waves !== false ? `waves-effect${waves !== true ? ` ${Photon.prefixColorQuery("waves", waves)}` : ""}` : "",
			disabled ? "disabled" : ""
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<React.Fragment>
				<input type="checkbox" className={this.serialize()} {...this.rest}/>
			</React.Fragment>
		);
	}

}

export { Checkbox };

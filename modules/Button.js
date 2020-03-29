import React from "react";
import Photon from "photoncss";

class Button extends React.Component {

	// Define default props
	static defaultProps = {
		variant: "raised",
		color: "",
		size: "default",
		waves: true
	}

	// Serialize the props object into a series of classes
	serialize() {
		return [
			"btn",
			...(this.props.className || "").split(" "),
			this.props.variant,
			this.props.color,
			this.props.size !== "default" ? this.props.size : "",
			this.props.waves !== false ? `waves-effect${this.props.waves !== true ? ` ${Photon.prefixColorQuery("waves", this.props.waves)}` : ""}` : "",
			this.props.disabled ? "disabled" : ""
		].join(" ").replace(/\s\s/gm, " ");
	}

	// Render component
	render() {
		return (
			<button className={this.serialize()} style={this.props.style || {}}>{this.props.children}</button>
		);
	}

}

export default Button;

import React from "react";
import Photon from "../src/js/photon.js";

class Textfield extends React.Component {

	// Define default props
	static defaultProps = {
		color: "primary",
		size: false,
		variant: false,
		type: "text",
		helperText: false
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { color, size, variant, helperText, ...rest } = this.props;
		this.rest = rest;
		return [
			"input-field",
			...(rest.className || "").split(" "),
			color,
			size ? size : "",
			helperText ? "contains-msg" : "",
			variant ? variant : "",
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()}>
				<input {...this.rest}/>
				{this.props.label && <label htmlFor={this.props.id || Photon.guid()}>{this.props.label}</label>}
				{this.props.helperText && <p className="helper-text">{this.props.helperText}</p>}
				{this.props.maxLength && <p className="max-length">/{this.props.maxLength}</p>}
			</div>
		);
	}

}

export { Textfield };

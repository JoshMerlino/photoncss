import React from "react";
import Photon from "photoncss";

class Checkbox extends React.Component {

	// Define default props
	static defaultProps = {
		color: "primary",
		disabled: false,
		waves: "ink",
		id: function() { return Photon.guid() }()
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { color, disabled, waves, ...rest } = this.props;
		this.rest = rest;
		requestAnimationFrame(() => $(`input#${this.props.id}`).unbind().change(this.props.onChange));
		return [
			"checkbox",
			...(rest.className || "").split(" "),
			color,
			disabled ? "disabled" : "",
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()}>
				<input type="checkbox" {...this.rest}/>
				{ this.props.label && <label htmlFor={this.props.id}>{this.props.label}</label> }
				{ this.props.waves !== false && <div className={`waves-effect${this.props.waves !== true ? ` ${Photon.prefixColorQuery("waves", this.props.waves)}` : ""}`}></div>}
			</div>
		);
	}

}

export { Checkbox };

import React from "react";
import Photon from "../src/js/photon.js";

class Slider extends React.Component {

	// Define default props
	static defaultProps = {
		color: "primary",
		id: function() { return Photon.guid() }()
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { color, leadingIcon, trailingIcon, ...rest } = this.props;
		this.rest = rest;
		return [
			"slider",
			...(rest.className || "").split(" "),
			color,
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>
				{ this.props.leadingIcon && <i className="material-icons waves-effect waves-ink" onClick={ () => Photon.Slider(document.getElementById(this.props.id)).increment(-10) }>{this.props.leadingIcon}</i> }
				<div className="slider-field">
					<div className="track"></div>
					<div className="determinate"></div>
					<div className="thumb"></div>
				</div>
				{ this.props.trailingIcon && <i className="material-icons waves-effect waves-ink" onClick={ () => Photon.Slider(document.getElementById(this.props.id)).increment(10) }>{this.props.trailingIcon}</i> }
			</div>
		);
	}

}

export { Slider };

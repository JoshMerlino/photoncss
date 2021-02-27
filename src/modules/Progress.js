import React from "react";
import Photon from "../src/js/photon.js";
import classnames from "classnames";

class Spinner extends React.Component {

	// Define default props
	static defaultProps = {
		color: "primary",
		size: 64,
		width: 6
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { color, size, width, ...rest } = this.props;
		this.rest = rest;
		return [
			"spinner",
			...(rest.className || "").split(" "),
			color,
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={`spinner-wrapper ${this.props.size || ""}`}>
				<svg className={this.serialize()} {...this.rest} width="65" height="65" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
					<circle className="path" fill="none" strokeWidth={this.props.width} strokeLinecap="round" cx="33" cy="33" r="30"></circle>
				</svg>
			</div>
		);
	}

}

function Progress({ value = .5, variant = "primary" }) {
	return (
		<div className={classnames("progress", variant)}>
			<div className="determinate" style={{ width: `${value*100}%` }}></div>
		</div>
	)
}

function Indeterminate({ variant = "primary" }) {
	return (
		<div className={classnames("progress", variant)}>
			<div className="indeterminate"></div>
		</div>
	)
}

export { Spinner, Progress, Indeterminate};

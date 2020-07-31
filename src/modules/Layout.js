import React from "react";
import Photon from "../src/js/photon.js";

class Container extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"container",
			...(rest.className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>{this.props.children}</div>
		);
	}

}

class Row extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"row",
			...(rest.className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>{this.props.children}</div>
		);
	}

}

class Col extends React.Component {

	// Define default props
	static defaultProps = {
		sm: 12,
		md: false,
		lg: false,
		xl: false
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { sm, md, lg, xl, ...rest } = this.props;
		this.rest = rest;
		return [
			"col",
			...(rest.className || "").split(" "),
			sm ? `s${sm}`:"",
			md ? `m${md}`:"",
			lg ? `l${lg}`:"",
			xl ? `xl${xl}`:""
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>{this.props.children}</div>
		);
	}

}

function VHAlign({ children }) {
	return (
		<div className="vh-center-wrapper">
			<div className="vh-center">{children}</div>
		</div>
	)
}

export { Container, Row, Col, VHAlign };

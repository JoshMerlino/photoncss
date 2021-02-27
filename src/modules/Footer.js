import React from "react";
import Photon from "../src/js/photon.js";

class Footer extends React.Component {

	// Define default props
	static defaultProps = {
		variant: ""
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { variant, ...rest } = this.props;
		this.rest = rest;
		return [
			...(rest.className || "").split(" "),
			variant,
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<footer className={this.serialize()} {...this.rest}>{this.props.children}</footer>
		);
	}

}

class FooterCopyright extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"footer-copyright",
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

export { Footer, FooterCopyright };

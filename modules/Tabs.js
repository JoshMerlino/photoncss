import React from "react";
import Photon from "photoncss";

class Tabs extends React.Component {

	// Define default props
	static defaultProps = {
		color: "accent"
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { color, variant, ...rest } = this.props;
		this.rest = rest;
		return [
			"tabs",
			color,
			variant ? variant : "",
			...(rest.className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<nav className={this.serialize()} {...this.rest}>{this.props.children}</nav>
		);
	}

}

class Tab extends React.Component {

	// Define default props
	static defaultProps = {
		disabled: false,
		waves: true
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { disabled, waves, ...rest } = this.props;
		this.rest = rest;
		return [
			"tab",
			waves !== false ? `waves-effect${waves !== true ? ` ${Photon.prefixColorQuery("waves", waves)}` : ""}` : "",
			disabled ? "disabled" : "",
			...(rest.className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<a className={this.serialize()} {...this.rest}>{this.props.children}</a>
		);
	}

}

export { Tabs, Tab };

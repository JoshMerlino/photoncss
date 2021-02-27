import React from "react";
import Photon from "../src/js/photon.js";

class Tabs extends React.Component {

	// Define default props
	static defaultProps = {
		color: "primary"
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
			<ul className={this.serialize()} {...this.rest}>{this.props.children}</ul>
		);
	}

}

class Tab extends React.Component {

	// Define default props
	static defaultProps = {
		disabled: false,
		active: false,
		waves: true
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { disabled, waves, active, ...rest } = this.props;
		this.rest = rest;
		return [
			"tab",
			waves !== false ? `waves-effect${waves !== true ? ` ${Photon.prefixColorQuery("waves", waves)}` : ""}` : "",
			active ? "active" : "",
			disabled ? "disabled" : "",
			...(rest.className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<li className={this.serialize()} {...this.rest}>{this.props.children}</li>
		);
	}

}

class TabContent extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"tab-content",
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

export { Tabs, Tab, TabContent };

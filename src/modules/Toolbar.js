import React from "react";
import Photon from "../src/js/photon.js";

class Toolbar extends React.Component {

	// Define default props
	static defaultProps = {
		color: "primary",
		size: false,
		position: false,
		elevate: false,
		autoHide: false
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { color, size, variant, position, elevate, autoHide, ...rest } = this.props;
		this.rest = rest;
		return [
			"toolbar",
			...(rest.className || "").split(" "),
			color,
			variant ? variant : "",
			position ? position : "",
			size ? size : "",
			elevate ? "elevate" : "",
			autoHide ? "auto-hide" : ""
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<header className={this.serialize()} {...this.rest}>{this.props.children}</header>
		);
	}

}

class ToolbarTitle extends React.Component {

	// Define default props
	static defaultProps = {
		subtitle: false,
		textColor: false
	}

	// Serialize the props object into a series of classes
	serialize() {
		return [
			"toolbar-title",
			...(this.props.className || "").split(" "),
			this.props.textColor !== false ? Photon.prefixColorQuery(this.props.textColor) : "",
			this.props.subtitle !== false ? "contains-subtitle" : ""
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<span className={this.serialize()} style={this.props.style || {}}>
				<div>{this.props.children}</div>
				{this.props.subtitle !== false ? <div className="subtitle">{this.props.subtitle}</div> : null}
			</span>
		);
	}

}

class ToolbarActions extends React.Component {

	// Render component
	render() {
		return (
			<div className="toolbar-actions">{this.props.children}</div>
		)
	}

}

class ToolbarSpacer extends React.Component {

	// Render component
	render() {
		return (
			<div className="toolbar-spacer"></div>
		)
	}

}

export { Toolbar, ToolbarTitle, ToolbarActions, ToolbarSpacer };

import React from "react";
import Photon from "../src/js/photon.js";

class Card extends React.Component {

	// Define default props
	static defaultProps = {
		variant: false,
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { variant, width, ...rest } = this.props;
		this.rest = rest;
		return [
			"card",
			...(rest.className || "").split(" "),
			variant ? variant : "",
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>{this.props.children}</div>
		);
	}

}

class CardTitle extends React.Component {

	// Define default props
	static defaultProps = {
		subtitle: false,
		textColor: false,
		leadingImage: false,
	}

	// Serialize the props object into a series of classes
	serialize() {
		return [
			"card-title",
			...(this.props.className || "").split(" "),
			this.props.textColor !== false ? Photon.prefixColorQuery(this.props.textColor) : "",
			this.props.subtitle !== false ? "contains-subtitle" : "",
			this.props.leadingImage !== false ? "contains-image" : ""
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<span className={this.serialize()} style={this.props.style || {}}>
				{this.props.leadingImage && <img src={this.props.leadingImage} alt=""/>}
				<div>{this.props.children}</div>
				{this.props.subtitle !== false ? <div className="subtitle">{this.props.subtitle}</div> : null}
			</span>
		);
	}

}

class CardMedia extends React.Component {


	// Serialize the props object into a series of classes
	serialize() {
		return [
			"card-media",
			...(this.props.className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<img className={this.serialize()} {...this.props}/>
		);
	}

}

class CardActions extends React.Component {
	render() {
		return (
			<div className="card-actions">{this.props.children}</div>
		);
	}
}

export { Card, CardTitle, CardMedia, CardActions };

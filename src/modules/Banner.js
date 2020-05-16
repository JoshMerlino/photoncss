import React from "react";
import Photon from "../src/js/photon.js";

class Banner extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"banner",
			...(rest.className || "").split(" ")
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>
				<div className="container row">{this.props.children}</div>
			</div>
		);
	}

}

class BannerActions extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"banner-actions",
			...(rest.className || "").split(" ")
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>{this.props.children}</div>
		);
	}

}

class BannerContent extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"banner-content",
			...(rest.className || "").split(" ")
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>{this.props.children}</div>
		);
	}

}

export { Banner, BannerActions, BannerContent };

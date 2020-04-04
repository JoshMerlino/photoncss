import React from "react";
import Photon from "photoncss";

import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Switch } from "./Switch";

class List extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { className, ...rest } = this.props;
		this.rest = rest;
		return [
			"list",
			...(className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<ul className={this.serialize()} {...this.rest}>{this.props.children}</ul>
		);
	}

}

class ListItem extends React.Component {

	// Define default props
	static defaultProps = {
		waves: true,
		subtitle: false,
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { subtitle, waves, leadingIcon, trailingIcon, meta, checkbox, radio, rounded, active, ...rest } = this.props;
		this.rest = rest;
		return [
			"list-item",
			...(rest.className || "").split(" "),
			subtitle ? "contains-subtitle" : "",
			rounded ? "rounded":"",
			active ? "active":"",
			waves !== false ? `waves-effect${waves !== true ? ` ${Photon.prefixColorQuery("waves", waves)}` : ""}` : "",
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<li className={this.serialize()} {...this.rest}>
				{ this.props.leadingIcon && <i className="material-icons">{this.props.leadingIcon}</i>}
				<div className="item-name">
					{this.props.children}
					{ this.props.subtitle && <div className="subtitle">{this.props.subtitle}</div> }
				</div>
				<div className="meta">
					{this.props.checkbox && <Checkbox {...(this.props.checkbox !== true ? this.props.checkbox : {})} />}
					{this.props.radio && <Radio {...(this.props.radio !== true ? this.props.radio : {})} />}
					{this.props.switch && <Switch {...(this.props.switch !== true ? this.props.switch : {})} />}
					{this.props.meta}
					{ this.props.trailingIcon && <i className="material-icons">{this.props.trailingIcon}</i>}
				</div>
			</li>
		);
	}

}

class Subheader extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { className, ...rest } = this.props;
		this.rest = rest;
		return [
			"subheader",
			...(className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<li className={this.serialize()} {...this.rest}>{this.props.children}</li>
		);
	}

}

export { List, ListItem, Subheader };

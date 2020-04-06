import React from "react";
import Photon from "photoncss";

import { List } from "./List";

class Menu extends React.Component {

	// Serialize the props object into a series of classes
	serialize() {
		const { ...rest } = this.props;
		this.rest = rest;
		return [
			"menu",
			...(rest.className || "").split(" "),
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<div className={this.serialize()} {...this.rest}>
				<List>{this.props.children}</List>
			</div>
		);
	}

}

export { Menu };

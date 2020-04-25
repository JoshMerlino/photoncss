import React from "react";
import Photon from "photoncss";

import { List } from "./List";

class Drawer extends React.Component {

	// Define default props
	static defaultProps = {
		from: "left",
		swipe: true
	}

	// Serialize the props object into a series of classes
	serialize() {
		const { from, swipe, ...rest } = this.props;
		this.rest = rest;
		return [
			"drawer",
			...(rest.className || "").split(" "),
			`from-${this.props.from}`
		].join(" ").replace(/\s+(?=\s)/g, "").trim();
	}

	// Render component
	render() {
		return (
			<aside className={this.serialize()} {...this.rest}>
				<List>{this.props.children}</List>
				{ this.props.swipe && <div className="drawer-swipe-target"></div> }
			</aside>
		);
	}

}

export { Drawer };

import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";
import { Container } from "./Layout";
import guid from "../util/guid";

/* ****************************************** */

export function Footer({ children, className, offset, ...props }: InferProps<typeof Footer.propTypes> & InferProps<any>): JSX.Element {

	const id = guid();

	const classes = classnames("footer", className);

	function resize() {
		const footer = $(`#${id}`);
		const main = footer.siblings("main");
		if (main.length === 0) return;
		main.css("min-height", window.innerHeight - footer[0].clientHeight - offset!);
	}

	setImmediate(function() {
		(function frame() {
			if ($(`#${id}`).length === 0) return;
			resize();
			requestAnimationFrame(frame);
		}());
	});

	return <footer className={classes} {...props} id={id}>{ children }</footer>;
}

Footer.propTypes = {
	children: PropTypes.any,
	offset: PropTypes.number
};

Footer.defaultProps = {
	children: null,
	offset: 24
};

/* ****************************************** */

export function FooterCopyright({ children, className = "", ...props }: InferProps<typeof FooterCopyright.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("footer-copyright", className);
	return (
		<div className={classes} {...props}>
			<Container>{ children }</Container>
		</div>
	);
}

FooterCopyright.propTypes = {
	children: PropTypes.any
};

FooterCopyright.defaultProps = {
	children: null
};

/* ****************************************** */

export function FooterHeader({ children }: InferProps<typeof FooterHeader.propTypes> & InferProps<any>): JSX.Element {
	return (
		<Container>
			<h2 style={{ marginLeft: 0 }}>{ children }</h2>
		</Container>
	);
}

FooterHeader.propTypes = {
	children: PropTypes.any
};

FooterHeader.defaultProps = {
	children: null
};

/* ****************************************** */

export function FooterBody({ children }: InferProps<typeof FooterBody.propTypes> & InferProps<any>): JSX.Element {
	return (
		<Container style={{ marginBottom: 16 }}>{ children }</Container>
	);
}

FooterBody.propTypes = {
	children: PropTypes.any
};

FooterBody.defaultProps = {
	children: null
};

import classnames from "classnames";
import React, { ReactNode } from "react";
import guid from "../util/guid";
import { Container } from "./Layout";

/* ****************************************** */

export type FooterProps = { children: ReactNode, className?: string, offset?: number };
export function Footer({ children, className = "", offset = 24, ...props }: FooterProps): JSX.Element {

	const id = guid();

	const classes = classnames("footer", className);

	function resize() {
		const footer = $(`#${id}`);
		const main = footer.siblings("main");
		if (main.length === 0) return;
		main.css("min-height", main.parent().height()! - footer.height()! - offset);

		const overflow = main.parent().prop("scrollHeight") > main.parent().height()!;
		console.log(overflow);
		footer.css("margin-top", `${overflow ? 0 : 8}px`);
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

/* ****************************************** */

export type FooterCopyrightProps = { className?: string, children: ReactNode };
export function FooterCopyright({ children, className = "", ...props }: FooterCopyrightProps): JSX.Element {
	const classes = classnames("footer-copyright", className);
	return (
		<div className={classes} {...props}>
			<Container>{ children }</Container>
		</div>
	);
}

/* ****************************************** */

export type FooterContentProps = { children: ReactNode };
export function FooterHeader({ children }: FooterContentProps): JSX.Element {
	return (
		<Container>
			<h2 style={{ marginLeft: 0 }}>{ children }</h2>
		</Container>
	);
}

/* ****************************************** */

export function FooterBody({ children }: FooterContentProps): JSX.Element {
	return (
		<Container style={{ marginBottom: 16 }}>{ children }</Container>
	);
}

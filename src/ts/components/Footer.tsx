import classnames from "classnames";
import React, { ReactNode } from "react";
import guid from "../util/guid";
import { Container } from "./Layout";

/* ****************************************** */

type FooterProps = {
	children: ReactNode;
	className?: string;
	offset?: number;
	[key: string]: any;
};
export function Footer({ children, className = "", ...props }: FooterProps): JSX.Element {
	const classes = classnames("footer", className);
	return <footer className={classes} {...props}>{ children }</footer>;
}

/* ****************************************** */

type FooterCopyrightProps = {
	className?: string;
	children: ReactNode;
	[key: string]: any;
};
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

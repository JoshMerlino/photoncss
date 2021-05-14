import React  from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function Footer({ children, className, ...props }: InferProps<typeof Footer.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("footer", className);
	return <footer className={classes} {...props}>{ children }</footer>;
}

Footer.propTypes = {
	children: PropTypes.any
};

Footer.defaultProps = {
	children: null
};

/* ****************************************** */

export function FooterCopyright({ children, className, ...props }: InferProps<typeof FooterCopyright.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("footer-copyright", className);
	return <div className={classes} {...props}>{ children }</div>;
}

FooterCopyright.propTypes = {
	children: PropTypes.any
};

FooterCopyright.defaultProps = {
	children: null
};
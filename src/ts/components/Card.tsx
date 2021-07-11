import React from "react";
import PropTypes, { InferProps } from "prop-types";
import classnames from "classnames";

/* ****************************************** */

export function Card({ children, display, variant, className = "", ...props }: InferProps<typeof Card.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("photon-card", `variant-${variant}`, `display-${display}`, className);
	return <div tabIndex={0} className={classes} {...props}>{ children }</div>;
}

Card.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	variant: PropTypes.oneOf([ "raised", "outlined" ]),
	display: PropTypes.oneOf([ "inline", "block" ])
};

Card.defaultProps = {
	children: null,
	variant: "raised",
	display: "block"
};

/* ****************************************** */

export function CardTitle({ children, subtitle, seperated, className = "", ...props }: InferProps<typeof CardTitle.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("card-title", seperated && "seperated", className);
	return (
		<div className={classes} {...props}>
			<h1>{ children }</h1>
			{ subtitle !== "" && <h2>{ subtitle }</h2> }
		</div>
	);
}

CardTitle.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	subtitle: PropTypes.string,
	seperated: PropTypes.bool
};

CardTitle.defaultProps = {
	children: null,
	subtitle: "",
	seperated: true
};

/* ****************************************** */

export function CardSubheader({ children, className = "", ...props }: InferProps<typeof CardSubheader.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("secondary", className);
	return <p className={classes} {...props}>{ children }</p>;
}

CardSubheader.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

CardSubheader.defaultProps = {
	children: null
};

/* ****************************************** */

export function CardSubtitle({ children, className = "", ...props }: InferProps<typeof CardSubtitle.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("card-subtitle", className);
	return <h2 className={classes} {...props}>{ children }</h2>;
}

CardSubtitle.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

CardSubtitle.defaultProps = {
	children: null
};

/* ****************************************** */

export function CardBody({ children, className = "", ...props }: InferProps<typeof CardBody.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("card-body", className);
	return <p className={classes} {...props}>{ children }</p>;
}

CardBody.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

CardBody.defaultProps = {
	children: null
};

/* ****************************************** */

export function CardOverline({ children, className = "", ...props }: InferProps<typeof CardOverline.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("overline", className);
	return <p className={classes} {...props}>{ children }</p>;
}

CardOverline.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

CardOverline.defaultProps = {
	children: null
};

/* ****************************************** */

export function CardActions({ children, direction, seperated, className = "", ...props }: InferProps<typeof CardActions.propTypes> & InferProps<any>): JSX.Element {
	const classes = classnames("card-actions", `direction-${direction}`, seperated && "seperated", className);
	return <div className={classes} {...props}>{ children }</div>;
}

CardActions.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	direction: PropTypes.oneOf([ "left", "right" ]),
	seperated: PropTypes.bool
};

CardActions.defaultProps = {
	children: null,
	direction: "left",
	seperated: true
};

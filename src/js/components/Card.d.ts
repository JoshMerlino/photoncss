/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Card({ children, display, variant, className, ...props }: InferProps<typeof Card.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Card {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        display: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
        variant: string;
        display: string;
    };
}
export declare function CardTitle({ children, subtitle, seperated, className, ...props }: InferProps<typeof CardTitle.propTypes> & InferProps<any>): JSX.Element;
export declare namespace CardTitle {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        subtitle: PropTypes.Requireable<string>;
        seperated: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        subtitle: string;
        seperated: boolean;
    };
}
export declare function CardSubheader({ children, className, ...props }: InferProps<typeof CardSubheader.propTypes> & InferProps<any>): JSX.Element;
export declare namespace CardSubheader {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function CardSubtitle({ children, className, ...props }: InferProps<typeof CardSubtitle.propTypes> & InferProps<any>): JSX.Element;
export declare namespace CardSubtitle {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function CardBody({ children, className, ...props }: InferProps<typeof CardBody.propTypes> & InferProps<any>): JSX.Element;
export declare namespace CardBody {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function CardOverline({ children, className, ...props }: InferProps<typeof CardOverline.propTypes> & InferProps<any>): JSX.Element;
export declare namespace CardOverline {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function CardActions({ children, direction, seperated, className, ...props }: InferProps<typeof CardActions.propTypes> & InferProps<any>): JSX.Element;
export declare namespace CardActions {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        direction: PropTypes.Requireable<string>;
        seperated: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        direction: string;
        seperated: boolean;
    };
}

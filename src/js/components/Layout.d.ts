/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Container({ children, className, ...props }: InferProps<typeof Container.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Container {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function Row({ children, className, ...props }: InferProps<typeof Row.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Row {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function Col({ children, sm, md, lg, xl, className, ...props }: InferProps<typeof Col.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Col {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        sm: PropTypes.Requireable<number>;
        md: PropTypes.Requireable<number>;
        lg: PropTypes.Requireable<number>;
        xl: PropTypes.Requireable<number>;
    };
    var defaultProps: {
        children: null;
        sm: number;
    };
}
export declare function VHCenter({ children, className, ...props }: InferProps<typeof VHCenter.propTypes> & InferProps<any>): JSX.Element;
export declare namespace VHCenter {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}

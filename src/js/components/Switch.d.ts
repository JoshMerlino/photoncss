/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Switch({ children, labelPosition, style, color, waves, id, className, ...props }: InferProps<typeof Switch.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Switch {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        labelPosition: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        waves: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        color: string;
        variant: string;
        labelPosition: string;
        waves: boolean;
    };
}

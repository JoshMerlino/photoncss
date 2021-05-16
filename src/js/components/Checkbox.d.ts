/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Checkbox({ children, labelPosition, style, variant, color, waves, id, className, ...props }: InferProps<typeof Checkbox.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Checkbox {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<any>;
        id: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        labelPosition: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        waves: PropTypes.Requireable<boolean>;
        indeterminate: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
        color: string;
        variant: string;
        labelPosition: string;
        waves: boolean;
        indeterminate: string;
    };
}

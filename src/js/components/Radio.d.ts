/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Radio({ children, labelPosition, color, waves, style, id, className, ...props }: InferProps<typeof Radio.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Radio {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        labelPosition: PropTypes.Requireable<string>;
        waves: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        color: string;
        labelPosition: string;
        waves: boolean;
    };
}

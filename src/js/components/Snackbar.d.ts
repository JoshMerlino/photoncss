/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Snackbar({ children, className, ...props }: InferProps<typeof Snackbar.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Snackbar {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}

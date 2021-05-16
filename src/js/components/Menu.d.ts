/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Menu({ children, className, ...props }: InferProps<typeof Menu.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Menu {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}

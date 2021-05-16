/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Toolbar({ children, color, variant, size, position, id, className, ...props }: InferProps<typeof Toolbar.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Toolbar {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        position: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
        color: string;
        variant: string;
        size: string;
        position: string;
    };
}
export declare function ToolbarTitle({ children, subtitle, ...props }: InferProps<typeof ToolbarTitle.propTypes> & InferProps<any>): JSX.Element;
export declare namespace ToolbarTitle {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        subtitle: PropTypes.Requireable<any>;
    };
    var defaultProps: {
        children: null;
        subtitle: null;
    };
}
export declare function ToolbarActions({ children, ...props }: InferProps<typeof ToolbarActions.propTypes> & InferProps<any>): JSX.Element;
export declare namespace ToolbarActions {
    var propTypes: {
        children: PropTypes.Requireable<any>;
    };
    var defaultProps: {
        children: null;
    };
}

import PropTypes, { InferProps } from "prop-types";
export declare function Dialog({ children, type, transition, size, className, ...props }: InferProps<typeof Dialog.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Dialog {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        transition: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
        type: string;
        transition: string;
        size: string;
    };
}
export declare function DialogTitle({ children, subtitle, seperated, className, ...props }: InferProps<typeof DialogTitle.propTypes> & InferProps<any>): JSX.Element;
export declare namespace DialogTitle {
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
export declare function DialogActions({ children, direction, seperated, className, ...props }: InferProps<typeof DialogActions.propTypes> & InferProps<any>): JSX.Element;
export declare namespace DialogActions {
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
export declare function DialogBody({ children, className, ...props }: InferProps<typeof DialogBody.propTypes> & InferProps<any>): JSX.Element;
export declare namespace DialogBody {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}

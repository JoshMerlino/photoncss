/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function Footer({ children, className, ...props }: InferProps<typeof Footer.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Footer {
    var propTypes: {
        children: PropTypes.Requireable<any>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function FooterCopyright({ children, className, ...props }: InferProps<typeof FooterCopyright.propTypes> & InferProps<any>): JSX.Element;
export declare namespace FooterCopyright {
    var propTypes: {
        children: PropTypes.Requireable<any>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function FooterHeader({ children }: InferProps<typeof FooterHeader.propTypes> & InferProps<any>): JSX.Element;
export declare namespace FooterHeader {
    var propTypes: {
        children: PropTypes.Requireable<any>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function FooterBody({ children }: InferProps<typeof FooterBody.propTypes> & InferProps<any>): JSX.Element;
export declare namespace FooterBody {
    var propTypes: {
        children: PropTypes.Requireable<any>;
    };
    var defaultProps: {
        children: null;
    };
}

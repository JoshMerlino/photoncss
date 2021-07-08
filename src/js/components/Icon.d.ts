import PropTypes, { InferProps } from "prop-types";
export declare function TextIcon({ children, variant, ...props }: InferProps<typeof TextIcon.propTypes> & InferProps<any>): JSX.Element;
export declare namespace TextIcon {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        variant: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
        variant: string;
    };
}
export declare function Icon({ children, variant, ink, ...props }: InferProps<typeof Icon.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Icon {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        variant: PropTypes.Requireable<string>;
        ink: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        variant: string;
        ink: boolean;
    };
}

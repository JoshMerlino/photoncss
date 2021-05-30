import PropTypes, { InferProps } from "prop-types";
export declare function Button({ children, color, display, variant, size, waves, className, ...props }: InferProps<typeof Button.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Button {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        display: PropTypes.Requireable<string>;
        waves: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        color: string;
        variant: string;
        size: string;
        display: string;
        waves: boolean;
    };
}

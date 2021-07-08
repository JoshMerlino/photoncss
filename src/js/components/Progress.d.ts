import PropTypes, { InferProps } from "prop-types";
export declare function Spinner({ size, color, className, ...props }: InferProps<typeof Spinner.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Spinner {
    var propTypes: {
        className: PropTypes.Requireable<any>;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        color: string;
        size: string;
    };
}

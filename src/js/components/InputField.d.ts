/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function InputField({ children, variant, dropdown, prefix, suffix, readOnly, subtitle, type, color, id, className, ...props }: InferProps<typeof InputField.propTypes>): JSX.Element;
export declare namespace InputField {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        type: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        subtitle: PropTypes.Requireable<string>;
        suffix: PropTypes.Requireable<string>;
        prefix: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        dropdown: PropTypes.Requireable<any[]>;
        readOnly: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        color: string;
        variant: string;
        suffix: string;
        prefix: string;
        subtitle: string;
        dropdown: null;
        readOnly: boolean;
    };
}

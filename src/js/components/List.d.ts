/// <reference types="react" />
import PropTypes, { InferProps } from "prop-types";
export declare function List({ children, className, ...props }: InferProps<typeof List.propTypes> & InferProps<any>): JSX.Element;
export declare namespace List {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}
export declare function ListItem({ children, round, waves, active, icon, iconEnd, className, ...props }: InferProps<typeof ListItem.propTypes> & InferProps<any>): JSX.Element;
export declare namespace ListItem {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        icon: PropTypes.Requireable<any>;
        iconEnd: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        round: PropTypes.Requireable<boolean>;
        active: PropTypes.Requireable<boolean>;
        waves: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        icon: null;
        iconEnd: null;
        round: boolean;
        active: boolean;
        waves: boolean;
    };
}
export declare function ListSubheader({ children, className, ...props }: InferProps<typeof ListSubheader.propTypes> & InferProps<any>): JSX.Element;
export declare namespace ListSubheader {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        children: null;
    };
}

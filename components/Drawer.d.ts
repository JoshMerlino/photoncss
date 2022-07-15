import PropTypes, { InferProps } from "prop-types";
export declare function Drawer({ children, from, swipe, className, ...props }: InferProps<typeof Drawer.propTypes> & InferProps<any>): JSX.Element;
export declare namespace Drawer {
    var propTypes: {
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        from: PropTypes.Requireable<string>;
        swipe: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        children: null;
        swipe: boolean;
        from: string;
    };
}

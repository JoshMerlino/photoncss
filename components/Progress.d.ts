type SpinnerProps = {
    className?: string;
    color?: "none" | "primary" | "secondary";
    size?: "small" | "normal" | "large";
    [key: string]: any;
};
export declare function Spinner({ size, color, className, ...props }: SpinnerProps): JSX.Element;
type IndeterminateProgressProps = {
    className?: string;
    color?: "none" | "primary" | "secondary";
    [key: string]: any;
};
export declare function IndeterminateProgress({ color, className, ...props }: IndeterminateProgressProps): JSX.Element;
type ProgressProps = {
    className?: string;
    color?: "none" | "primary" | "secondary";
    value?: number;
    min?: number;
    max?: number;
    [key: string]: any;
};
export declare function Progress({ max, min, value, color, className, ...props }: ProgressProps): JSX.Element;
export {};

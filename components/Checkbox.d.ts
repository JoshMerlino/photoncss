import { CSSProperties, ReactNode } from "react";
type Props = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    id?: string;
    color?: "none" | "primary" | "secondary";
    labelPosition?: "before" | "after";
    variant?: "normal" | "round";
    waves?: boolean;
    indeterminate?: boolean;
    [key: string]: any;
};
export declare function Checkbox({ children, labelPosition, style, variant, indeterminate, color, waves, id, className, ...props }: Props): JSX.Element;
export {};

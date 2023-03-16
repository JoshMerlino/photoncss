import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    className?: string;
    color?: "none" | "primary" | "secondary";
    size?: "normal" | "dense" | "large";
    variant?: "contained" | "flat" | "outlined" | "raised";
    display?: "inline" | "block";
    waves?: boolean;
    [key: string]: any;
};
export declare function Button({ children, color, display, variant, size, waves, className, ...props }: Props): JSX.Element;
export {};

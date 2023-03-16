type Props = {
    children?: string;
    className?: string;
    subtitle?: string;
    suffix?: string;
    prefix?: string;
    color?: "none" | "primary" | "secondary";
    variant?: "normal" | "filled" | "outlined";
    dropdown?: string[] | null;
    readOnly?: boolean;
    [key: string]: any;
};
export declare function InputField({ children, variant, dropdown, prefix, suffix, readOnly, subtitle, type, color, id, className, ...props }: Props): JSX.Element;
export {};

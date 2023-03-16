import { ReactNode } from "react";
type FooterProps = {
    children: ReactNode;
    className?: string;
    offset?: number;
    [key: string]: any;
};
export declare function Footer({ children, className, ...props }: FooterProps): JSX.Element;
type FooterCopyrightProps = {
    className?: string;
    children: ReactNode;
    [key: string]: any;
};
export declare function FooterCopyright({ children, className, ...props }: FooterCopyrightProps): JSX.Element;
export type FooterContentProps = {
    children: ReactNode;
};
export declare function FooterHeader({ children }: FooterContentProps): JSX.Element;
export declare function FooterBody({ children }: FooterContentProps): JSX.Element;
export {};

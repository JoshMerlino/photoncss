import { ReactNode } from "react";
declare type FooterProps = {
    children: ReactNode;
    className?: string;
    offset?: number;
    [key: string]: any;
};
export declare function Footer({ children, className, ...props }: FooterProps): JSX.Element;
declare type FooterCopyrightProps = {
    className?: string;
    children: ReactNode;
    [key: string]: any;
};
export declare function FooterCopyright({ children, className, ...props }: FooterCopyrightProps): JSX.Element;
export declare type FooterContentProps = {
    children: ReactNode;
};
export declare function FooterHeader({ children }: FooterContentProps): JSX.Element;
export declare function FooterBody({ children }: FooterContentProps): JSX.Element;
export {};

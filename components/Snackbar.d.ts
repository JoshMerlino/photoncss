import { ReactNode } from "react";
declare type Props = {
    children: ReactNode;
    className?: string;
    [key: string]: any;
};
export declare function Snackbar({ children, className, ...props }: Props): JSX.Element;
export {};

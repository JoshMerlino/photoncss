import { ReactNode } from "react";
import { Theme } from "../util/theme";
type Props = {
    theme?: string | Theme;
    global?: boolean;
    children?: ReactNode;
};
export declare function ThemeProvider({ theme, global, children }: Props): JSX.Element;
export {};

/// <reference types="react" />
import { Theme } from "../util/theme";
export declare function ThemeProvider({ theme, global, children }: {
    theme: string | Theme;
    global: boolean;
    children?: JSX.Element;
}): JSX.Element;

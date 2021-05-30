import { CSSProperties } from "react";
export interface Theme {
    palette: {
        body: {
            background: string;
            headline: string;
            waves: string;
            hover: string;
            body: string;
            subtitle: string;
        };
        primary: {
            light: string;
            normal: string;
            dark: string;
            text: string;
            faded: string;
            waves: string;
            fadedwaves: string;
        };
        secondary: {
            light: string;
            normal: string;
            dark: string;
            text: string;
            faded: string;
            waves: string;
            fadedwaves: string;
        };
        divider: string;
        error: string;
        sheet: {
            background: string;
            body: string;
        };
        notification: {
            background: string;
            text: string;
        };
    };
    font: {
        interactive: string;
        headline: string;
        body: string;
    };
    shape: string;
    animation: {
        curve: string;
        speed: {
            fast: string;
            medium: string;
            slow: string;
        };
    };
}
export declare function render(theme: Theme): CSSProperties;

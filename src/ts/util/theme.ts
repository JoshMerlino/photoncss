import { CSSProperties } from "react";
import { deepKeys, deepProp } from "./object";

export interface Theme {
    palette: {
		body: {
			background: string;
			headline: string;
			waves: string;
			hover: string;
			body: string;
			subtitle: string;
		},
        primary: {
            light: string;
            normal: string;
            dark: string;
			text: string;
			faded: string;
			waves: string;
			fadedwaves: string;
        },
        secondary: {
            light: string;
            normal: string;
            dark: string;
			text: string;
			faded: string;
			waves: string;
			fadedwaves: string;
        },
		divider: string;
		error: string;
		sheet: {
			background: string;
			body: string;
		},
		notification: {
			background: string;
			text: string;
		}
    },
	font: {
		interactive: string;
		headline: string;
		body: string;
	},
	shape: string;
	animation: {
		curve: string;
		speed: {
			fast: string;
			medium: string;
			slow: string;
		}
	}
}


export function render(theme: Theme): CSSProperties {

	// Get theme keys
	const keys = deepKeys(theme);
	const props: Record<string, unknown> = {};

	// Iterate over all keys
	keys.map((key: string) => {
		const path = `--${key.replace(/\./g, "_")}`;
		const val = deepProp(theme, key);
		props[path] = val;
	});
	return props as CSSProperties;

}

import React, { CSSProperties } from "react";
import { deepKeys, deepProp } from "../object";

export interface Theme {
	palette: {
		primary: {
			light: string,
			normal: string,
			dark: string,
			text: string,
			waves: string,
		},
		secondary: {
			light: string,
			normal: string,
			dark: string,
			text: string,
			waves: string,
		}
	},
	font: {
		interactive: string
	},
	shape: string,
	animation: {
		curve: string,
		speed: {
			fast: string,
		}
	}
}

export function render(theme: Theme) : CSSProperties {

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

export default function ThemeProvider({ theme = "default.light", children } : { theme: string | Theme, children?: JSX.Element }) : JSX.Element {

	// Initialize theme
	let finalTheme: Theme;

	// If theme is Theme
	if(typeof theme === "object") finalTheme = theme;

	// If theme is string
	else if(typeof theme === "string") finalTheme = require(`../../../../theme/${theme}.json`);

	// If invalid theme type
	else throw new Error(`'${typeof theme}' is not a valid theme.`);

	// Render CSS
	const style = render(finalTheme);

	// Create context of theme
	return <span style={style}>{children}</span>;

}

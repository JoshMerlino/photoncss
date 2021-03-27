import React, { CSSProperties, Fragment } from "react";
import { deepKeys, deepProp } from "../object";

export interface Theme { palette: any }

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

export default function ThemeProvider({ theme = "default.light", global = false, children } : { theme: string | Theme, global: boolean, children?: JSX.Element }) : JSX.Element {

	// Initialize theme
	let finalTheme: Theme;

	// If theme is Theme
	if(typeof theme === "object") finalTheme = theme;

	// If theme is string
	else if(typeof theme === "string") finalTheme = require(`../../../../theme/${theme}.json`);

	// If invalid theme type
	else throw new Error(`'${typeof theme}' is not a valid theme.`);

	// If it is the root theme
	if(global) {

		// Render CSS
		const style = render(finalTheme) as { [key: string]: string };

		// Add variables to root
		Object.keys(style).map((key: string) => document.documentElement.style.setProperty(key, style[key]));

		// Render children
		return <Fragment>{children}</Fragment>;

	} else {

		// Render CSS
		const style = render(finalTheme);

		// Create context of theme
		return <span style={style}>{children}</span>;

	}

}

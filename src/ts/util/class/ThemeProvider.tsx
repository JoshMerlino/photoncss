import React from "react";
import guid from "../../util/guid";
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

export function render(theme: Theme, id: string) : void {

	// Get element
	const element = document.getElementById(id);

	// Get theme keys
	const keys = deepKeys(theme);

	// Iterate over all keys
	keys.map((key: string) => element?.style.setProperty(`--${key.replace(/\./g, "_")}`, deepProp(theme, key)));

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

	// Generate GUID
	const GUID = guid();

	// Create theme index after render
	setImmediate(() => render(finalTheme, GUID));

	// Create context of theme
	return <div id={GUID} className="photon-theme_provider">{children}</div>;

}

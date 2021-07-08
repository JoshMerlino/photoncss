import React from "react";
import { Theme, render } from "../util/theme";

export function ThemeProvider({
	theme = "default.light",
	global = false,
	children
}: {
	theme: string | Theme;
	global: boolean;
	children?: JSX.Element
}): JSX.Element {

	// Initialize theme
	let finalTheme: Theme;

	try {

		// If theme is Theme
		if (typeof theme === "object") finalTheme = theme;

		// If theme is string
		else if (typeof theme === "string") finalTheme = require(`../../../theme/${theme}.json`);

		// If invalid theme type
		else throw new Error(`'${typeof theme}' is not a valid theme.`);

		finalTheme = { ...require("../../../theme/default.base.json"), ...finalTheme };

	} catch {

		finalTheme = require("../../../theme/default.base.json");

	}

	// If it is the root theme
	if (global) {

		// Render CSS
		const style = render(finalTheme) as { [key: string]: string };

		// Add variables to root
		Object.keys(style).map((key: string) => document.documentElement.style.setProperty(key, style[key]));

		// Render children
		return <>{children}</>;

	}

	// Render CSS
	const style = render(finalTheme);

	// Create context of theme
	return <span style={style}>{children}</span>;

}

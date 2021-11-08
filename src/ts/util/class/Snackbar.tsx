import $ from "jquery";
import guid from "../guid";
import { render } from "react-dom";

// Export options interface
export interface SnackbarOptions {
	duration?: number,
	id?: string
}

// Local function to get the notification container
export function getNotificationContainer(): JQuery {
	if ($("#photon-notification-container").length === 0) $("body").append("<div id=\"photon-notification-container\"></div>");
	return $("#photon-notification-container");
}

// Export constructor class
export class Snackbar {

	snackbar: JQuery;

	options: SnackbarOptions;

	constructor(element: JSX.Element, options?: SnackbarOptions) {

		// Merge default options
		this.options = {
			duration: 1e10,
			id: guid(),
			...options
		};

		// Get the notification container
		const container = getNotificationContainer();

		// Render the notification
		const notification = container
			.append(`<div id="${this.options.id}" class="photon-snackbar-wapper hidden"></div>`)
			.children(`#${this.options.id}`);
		render(element, notification[0]);

		// Set local snackbar
		this.snackbar = $(`#${this.options.id}`);

		// Queue auto hidew
		setTimeout(() => this.hide(), this.options.duration);

		// Show snackbar
		this.show();

	}

	show(): this {
		setTimeout(() => {
			this.snackbar.removeClass("hidden");
		}, 50);

		return this;
	}

	hide(): this {
		setTimeout(() => {
			this.snackbar.addClass("hidden");
			setTimeout(() => this.snackbar.remove(), 500);
		}, 50);

		return this;
	}

	get isOpen(): boolean {
		return !this.snackbar.hasClass("hidden");
	}

}

// Export runtime constructor
export default function(target: JSX.Element, options?: SnackbarOptions): Snackbar {
	return new Snackbar(target, options);
}

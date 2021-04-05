import $ from "jquery";
import guid from "../guid";
import { render } from "react-dom";

export interface SnackbarOptions {
	duration?: number | null,
	id?: string
}

// Local function to get the notification container
function getNotificationContainer(): $ {
	if($("#photon-notification-container").length === 0) $("body").append("<div id=\"photon-notification-container\"></div>");
	return $("#photon-notification-container");
}

export class Snackbar {

	snackbar: $;
	options: SnackbarOptions;

	constructor(Toast: () => JSX.Element, options?: SnackbarOptions) {

		this.options = {
			...options,
			duration: null,
			id: guid()
		};

		// Get the notification container
		const container = getNotificationContainer();

		// Render the notification
		const notification = container.append(`<div id="${this.options.id}" class="photon-snackbar-wapper hidden"></div>`).children(`#${this.options.id}`);
		render(Toast, notification[0]);

		this.snackbar = $(`#${this.options.id}`);

		setTimeout(() => this.close(), this.options.duration ?? 1e10);

		return this.show();

	}

	show(): this {
		setTimeout(() => {
			this.snackbar.removeClass("hidden");
		}, 50);

		return this;
	}

	close(): this {
		setTimeout(() => {
			this.snackbar.addClass("hidden");
			setTimeout(() => this.snackbar.remove(), 500);
		}, 50);

		return this;
	}

}

import React from "react";
import { render } from "react-dom";
import $, { jQuery } from "jquery";
import guid from "../guid";

export interface NotifyOptions {
	id?: string;
	duration: number;
	onDismiss: function;
}

export class PhotonNotification {

	options: NotifyOptions;

	constructor(options: NotifyOptions) {
		this.options = options;
	}

	close(): void {
		const toast = $(`#${this.options.id}`);
		toast.addClass("hidden");
		this.options.onDismiss(this);
		setTimeout(() => {
			toast.remove();
		}, 500);
	}

}

// Function to f
export function getNotificationContainer(): jQuery {
	if($("#photon-notification-container").length === 0) $("body").append("<div id=\"photon-notification-container\"></div>");
	return $("#photon-notification-container");
}

// Define default notification options
export const defaultOptions = {
	duration: 10000,
	onDismiss: (): null => null,
};

export function notify(Notification: () => JSX.Element, options: NotifyOptions): PhotonNotification {

	// Merge options
	const id = guid();
	const opts = { ...defaultOptions, ...options, id };

	// Get the notification container
	const container = getNotificationContainer();

	// Render the notification
	const notification = container.append(`<div id="${id}" class="photon-snackbar-wapper hidden"></div>`).children(`#${id}`);
	render(<Notification/>, notification[0]);

	const Nx = new PhotonNotification(opts);

	// On mount to DOM
	setTimeout(function() {
		notification.removeClass("hidden");
		setTimeout(() => Nx.close(), opts.duration);
	}, 10);

	return Nx;

}

import $ from "jquery";
import { render } from "react-dom";
import guid from "../guid";

export interface DialogOptions {
	id?: string;
	closeOnBlur?: boolean;
}

export class Dialog {

	target: JQuery;

	options: DialogOptions;

	constructor(dialog: JSX.Element, options?: DialogOptions) {

		// Extend options
		this.options = {
			id: guid(),
			closeOnBlur: true,
			...options
		};

		// Get options
		const { id } = this.options;

		const wrapper = $("body").append(`<div id="${id}" class="photon-dialog-wrapper hidden"></div>`)
			.children(`#${id}`);
		render(dialog, wrapper[0]);

		this.target = wrapper;

		// Close menu on click from menu or modal
		$(document.body).on("click", (event: JQuery.ClickEvent) => {
			if (event.target === wrapper[0]) {
				if (this.options.closeOnBlur) {
					this.close();
				}
			}
		});

	}

	close(): this {
		const wrapper = this.target;
		wrapper.addClass("hidden");
		setTimeout(() => wrapper.remove(), 500);
		return this;
	}

	open(): this {
		const wrapper = this.target;
		setTimeout(() => wrapper.removeClass("hidden"), 1);
		return this;
	}

	get isOpen(): boolean {
		const wrapper = this.target;
		return !wrapper.hasClass("hidden");
	}

}

export default function(target: JSX.Element, options?: DialogOptions): Dialog {
	return new Dialog(target, options);
}

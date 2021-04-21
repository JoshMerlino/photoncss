import $ from "jquery";
import guid from "../guid";
import { render } from "react-dom";
import { PhotonSelector } from "../../index";

export interface DialogOptions {
	id: string;
}

export class Dialog {

	target: JQuery;
	options: DialogOptions;

	constructor(Popup: PhotonSelector | (() => JSX.Element), options?: DialogOptions) {

		// Extend options
		this.options = {
			...options,
			id: guid()
		};

		// If is JSX element
		if(Popup?.$$typeof?.toString() === "Symbol(react.element)") {

			// Get options
			const { id } = this.options;

			const wrapper = $("body").append(`<div id="${id}" class="photon-dialog-wrapper hidden"></div>`).children(`#${id}`);
			render(Popup as FC, wrapper[0]);

			this.target = wrapper;

			// Close menu on click from menu or modal
			$(document.body).on("click", (event: JQuery.ClickEvent) => {
				if(event.target === wrapper[0]) {
					this.close();
				}
			});

		}

		// If is jquery selector
		else {

			this.target = $(Popup).parents(".photon-dialog-wrapper");

		}

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

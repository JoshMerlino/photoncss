import $ from "jquery";
import guid from "../guid";
import getPointer from "../getPointer";
import { PhotonSelector } from "../../index";

export class Menu {

	target: $;
	private explicitPosition = false;

	constructor(target: $) {

		// Define $menu from target
		this.target = $(target);
		const $menu = this.target;

		// Make sure were not adding listeners that are already there
		if($menu.is("[md]")) return this;
		$menu.attr("md", "");

		// Append modal close target to DOM
		const id = $menu.attr("id") || guid();
		$menu.attr("id", id);
		$(`<div class="modal-close-area transparent" modal="${id}"></div>`).appendTo($("body"));
		const $modal = $(`.modal-close-area[modal="${id}"]`);

		// Close menu on click from menu or modal
		[ $modal, $menu.children(".photon-list").children(".photon-list-item") ].map(e => e.on("click", () => this.close()));

		return this;

	}


	anchor(x: number | PhotonSelector, y: number): this {

		this.explicitPosition = true;

		// Get $menu
		const $menu = this.target;

		if(y === undefined && typeof x !== "number") {

			// If anchoring to element
			const $anchor = $(x);
			x = $anchor.offset().left;
			y = $anchor.offset().top;
			$menu.css({ left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8), top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8), });

		} else {

			// If anchoring to a fixed position
			$menu.css({ left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8), top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8), });

		}

		// Determine anchor origin
		if(x < window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tl");
		if(x > window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tr");
		if(x < window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-bl");
		if(x > window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-br");

		return this;

	}

	open(): this {

		// Get $menu and $modal
		const $menu = this.target;
		const $modal = $(`.modal-close-area[modal="${$menu.attr("id")}"]`);

		if(!this.explicitPosition) {
			const x = getPointer().x;
			const y = getPointer().y;
			$menu.css({ left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8), top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8), });
		}

		// Activate both
		[ $menu, $modal ].map(e => e.addClass("active"));

		return this;

	}

	close(): this {

		// Get $menu and $modal
		const $menu = this.target;
		const $modal = $(`.modal-close-area[modal="${$menu.attr("id")}"]`);

		// Deactivate both
		[ $menu, $modal ].map(e => e.removeClass("active"));

		return this;

	}

	get isOpen(): boolean {
		return this.target.hasClass("active");
	}

}

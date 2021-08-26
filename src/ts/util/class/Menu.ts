import $ from "jquery";
import guid from "../guid";
import getPointer from "../getPointer";
import { PhotonSelector, UnityPhotonSelector } from "../../index";

export class Menu {

	target: JQuery;

	private explicitPosition = false;

	constructor(target: PhotonSelector) {

		// Define $menu from target
		this.target = $(target as UnityPhotonSelector);
		const $menu = this.target;

		// Make sure were not adding listeners that are already there
		if ($menu.is("[md]")) return;
		$menu.attr("md", "");

		// Append modal close target to DOM
		const id = $menu.attr("id") || guid();
		$menu.attr("id", id);

		// Close menu on click from menu or modal
		$menu.children(".photon-list").children(".photon-list-item")
			.on("click", () => this.close());

	}

	private __getModal(id: string): JQuery<HTMLElement> {
		if ($(`.modal-close-area[modal="${id}"]`).length > 0) return $(`.modal-close-area[modal="${id}"]`);
		$(`<div class="modal-close-area transparent" modal="${id}"></div>`).appendTo($("body"));
		const $modal = $(`.modal-close-area[modal="${id}"]`);
		return $modal.on("click", () => this.close());
	}

	anchor(x: number | PhotonSelector, y?: number): this {

		let dX = x as number || 0;
		let dY = y as number || 0;

		this.explicitPosition = true;

		// Get $menu
		const $menu = this.target;

		const mW = $menu.width() as number;
		const mH = $menu.height() as number;

		if (y === undefined && typeof x !== "number") {

			// If anchoring to element
			const $anchor = $(x as UnityPhotonSelector);
			if ($anchor[0].tagName.toLowerCase() === "input") {
				const { top, left } = $anchor.offset() as any;
				$menu.css({ top: top + $anchor[0].clientHeight + parseInt($anchor.css("border-width")) + 2, left, width: $anchor[0].clientWidth + parseInt($anchor.css("border-width")) * 2 });
			} else {
				dX = $anchor.offset()?.left as number;
				dY = $anchor.offset()?.top as number;
				$menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8) });
			}

			let isFixed = false;
			$anchor.parents().each(function() {
				if ($(this).css("position") === "fixed") {
					if (isFixed) return;

					$menu.css({ position: "fixed" });
					dX -= $(document).scrollLeft() as number;
					dY -= $(document).scrollTop() as number;
					$menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8) });

					isFixed = true;
				}
			});

		} else {

			// If anchoring to a fixed position
			$menu.css({ left: Math.max(Math.min(dX, window.innerWidth - mW * 1.12 - 8), 8), top: Math.max(Math.min(dY, window.innerHeight - mH - 8), 8) });

		}

		// Determine anchor origin
		if (dX < window.innerWidth - mW - 8 && dY < window.innerHeight - mH - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tl");
		if (dX > window.innerWidth - mW - 8 && dY < window.innerHeight - mH - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tr");
		if (dX < window.innerWidth - mW - 8 && dY > window.innerHeight - mH - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-bl");
		if (dX > window.innerWidth - mW - 8 && dY > window.innerHeight - mH - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-br");

		return this;

	}

	open(): this {

		// Get $menu and $modal
		const $menu = this.target;
		const mW = $menu.width() as number;
		const mH = $menu.height() as number;

		const $modal = this.__getModal($menu.attr("id") as string);

		if (!this.explicitPosition) {
			const x = getPointer().x;
			const y = getPointer().y;
			$menu.css({ left: Math.max(Math.min(x, window.innerWidth - mW - 8), 8), top: Math.max(Math.min(y, window.innerHeight - mH - 8), 8) });
		}

		// Activate both
		requestAnimationFrame(function() {
			[ $menu, $modal ].map(e => e.addClass("active"));
		});

		return this;

	}

	close(): this {

		// Get $menu and $modal
		const $menu = this.target;
		const $modal = $(`.modal-close-area[modal="${$menu.attr("id")}"]`);

		// Deactivate both
		[ $menu, $modal ].map(e => e.removeClass("active"));
		setTimeout(() => $modal.remove(), 300);

		return this;

	}

	get isOpen(): boolean {
		return this.target.hasClass("active");
	}

}

// Export runtime constructor
export default function(target: PhotonSelector): Menu {
	return new Menu(target);
}

import $ from "jquery";
import guid from "../guid";

export class Drawer {

	target: $;

	constructor(target: $) {

		// Define $nav and $swipe
		this.target = $(target);
		const $nav = this.target;
		const $swipe = this.target.children(".drawer-swipe-target");

		// Make sure were not adding listeners that are already there
		if($nav.is("[md]")) return this;
		$nav.attr("md", "");

		// Give the drawer a unique id if it dosnt already have one
		const id = $nav.attr("id") || guid();
		$nav.attr("id", id);

		// Define $modal
		$(`<div class="modal-close-area" modal="${id}"></div>`).appendTo($("body"));
		const $modal = $(`.modal-close-area[modal="${id}"]`);

		// Cache original transform positions
		const aX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
		const aY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);

		// Compare transform positions on every frame
		(function frame() {

			$nav.length !== 0 && requestAnimationFrame(frame);

			// Get current transform positions
			const tX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
			const tY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);

			// Determine by transform if it is open or closed
			Math.abs(tX - aX) < 2 && Math.abs(tY - aY) < 2 ? $nav.removeClass("shadow") && $modal.removeClass("active") : $nav.addClass("shadow") && $modal.addClass("active");

		}());

		// On click away from drawer
		$modal.on("click touchstart", function(event: Event) {

			// Stop event spread
			event.stopPropagation();

			// Start a transition
			$nav.addClass("transition").removeClass("active");

			// Determine the transform of the closed state drawer
			if($nav.hasClass("from-right")) $nav.css({ transform: "translateX(100%)" });
			else if($nav.hasClass("from-bottom")) $nav.css({ transform: "translateY(100%)" });
			else if($nav.hasClass("from-top")) $nav.css({ transform: "translateY(-100%)" });
			else $nav.css({ transform: "translateX(-100%)" });

			// End animation
			setTimeout(() => $nav.removeClass("transition shadow"), 250);

		});

		// Is touchdown?
		let state = false;
		$swipe.on("touchstart", () => state = true);

		// On drag stop, determine how to transform to next state
		$swipe.on("touchend", function() {

			// Mark drawer as not dragging and start animation
			state = false;
			$nav.addClass("transition");

			// Determine next position
			if($nav.hasClass("from-right")) {
				const pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
				const s = window.innerWidth - pos > $nav.width()/2;
				$nav.css({ transform: s ? "translateX(0%)":"translateX(100%)" });
			} else if($nav.hasClass("from-bottom")) {
				const pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
				const s = pos < $nav.height()/2;
				$nav.css({ transform: s ? "translateY(0%)":"translateY(100%)" });
			} else if($nav.hasClass("from-top")) {
				const pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
				const s = $nav.height() + pos < $nav.height()/2;
				$nav.css({ transform: s ? "translateY(-100%)":"translateY(0%)" });
			} else {
				const pos = $nav.width() + parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
				const s = pos < $nav.width()/2;
				$nav.css({ transform: s ? "translateX(-100%)":"translateX(0%)" });
			}

			// End animation
			setTimeout(() => $nav.removeClass("transition"), 250);

		});

		// On drag
		$swipe.on("touchmove", function(event: TouchEvent) {

			// Show drawer
			$nav.removeClass("active");

			// If it is not in drag mode, return
			if(!state) return;

			// Get touch from drag event
			const touch = event.touches[0];

			// Determine where drag is and where to move drawer to
			if($nav.hasClass("from-right")) $nav.css({ transform: `translateX(${Math.max(touch.clientX - Math.abs(window.innerWidth - $nav.width()), 0)}px)` });
			else if($nav.hasClass("from-bottom")) $nav.css({ transform: `translateY(${Math.max(touch.clientY - Math.abs(window.innerHeight - $nav.height()), 0)}px)` });
			else if($nav.hasClass("from-top")) $nav.css({ transform: `translateY(${Math.min(touch.clientY - $nav.height(), 0)}px)` });
			else $nav.css({ transform: `translateX(${Math.min(touch.clientX - $nav.width(), 0)}px)` });

		});

		return this;

	}

	open(): Drawer {

		// Get $nav
		const $nav = this.target;

		// Open $nav
		$nav.addClass("active transition");
		setTimeout(() => $nav.removeClass("transition"), 250);

		return this;

	}

	close(): Drawer {

		// Get $nav
		const $nav = this.target;

		// Close $nav
		$nav.addClass("transition").removeClass("active");
		setTimeout(() => $nav.removeClass("transition"), 250);

		return this;

	}

	isOpen(): boolean {
		return this.target.hasClass("active");
	}

}

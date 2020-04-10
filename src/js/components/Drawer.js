// Drawer Component
export default function() {
	return new class Drawer {

		constructor(target) {
			this.target = $(target);
			const $nav = this.target;
			const $swipe = this.target.children(".drawer-swipe-target");

			if($nav.is("[md]")) return this;
			$nav.attr("md", "");

			const id = $nav.attr("id") || Photon.guid();
			$nav.attr("id", id);
			$(`<div class="modal-close-area" modal="${id}"></div>`).appendTo($("body"));

			const $modal = $(`.modal-close-area[modal="${id}"]`);

			let aX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
			let aY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
			(function loop() {
				$nav.length !== 0 && requestAnimationFrame(loop);
				const tX = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
				const tY = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
				Math.abs(tX - aX) < 2 && Math.abs(tY - aY) < 2 ? ($nav.removeClass("shadow") && $modal.removeClass("active")) : ($nav.addClass("shadow") && $modal.addClass("active"))
			}());

			$modal.on("click touchstart", function(event) {
				event.stopPropagation();
				$nav.addClass("transition").removeClass("active");
				if($nav.hasClass("from-right")) {
					$nav.css({ transform: "translateX(100%)" });
				} else if($nav.hasClass("from-bottom")) {
					$nav.css({ transform: "translateY(100%)" });
				} else if($nav.hasClass("from-top")) {
					$nav.css({ transform: "translateY(-100%)" });
				} else {
					$nav.css({ transform: "translateX(-100%)" });
				}
				setTimeout(() => $nav.removeClass("transition shadow"), 250);
			})

			let state = false;
			$swipe
			  .on("touchstart", function() {
					state = true;
			  })
			  .on("touchend", function() {
					state = false;
					$nav.addClass("transition");
					if($nav.hasClass("from-right")) {
						const pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
						const s = window.innerWidth - pos > $nav.width()/2
						$nav.css({ transform: s ? "translateX(0%)":"translateX(100%)" });
					} else if($nav.hasClass("from-bottom")) {
						const pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
						const s = pos < $nav.height()/2
						$nav.css({ transform: s ? "translateY(0%)":"translateY(100%)" });
					} else if($nav.hasClass("from-top")) {
						const pos = parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[5]);
						const s = $nav.height() + pos < $nav.height()/2
						$nav.css({ transform: s ? "translateY(-100%)":"translateY(0%)" });
					} else {
						const pos = $nav.width() + parseInt($nav.css("transform").split("(")[1].split(")")[0].split(",")[4]);
						const s = pos < $nav.width()/2
						$nav.css({ transform: s ? "translateX(-100%)":"translateX(0%)" });
					}
					setTimeout(() => $nav.removeClass("transition"), 250);
			  })
			  .on("touchmove", function(event) {
					$nav.removeClass("active");
					if(!state) return;
					const touch = event.touches[0];
					if($nav.hasClass("from-right")) {
						$nav.css({ transform: `translateX(${Math.max(touch.clientX - Math.abs(window.innerWidth - $nav.width()), 0)}px)` });
					} else if($nav.hasClass("from-bottom")) {
						$nav.css({ transform: `translateY(${Math.max(touch.clientY - Math.abs(window.innerHeight - $nav.height()), 0)}px)` });
					} else if($nav.hasClass("from-top")) {
						$nav.css({ transform: `translateY(${Math.min(touch.clientY - $nav.height(), 0)}px)` });
					} else {
						$nav.css({ transform: `translateX(${Math.min(touch.clientX - $nav.width(), 0)}px)` });
					}
			  })

			return this;
		}

		open() {

			// Get $nav
			const $nav = this.target;

			// Open $nav
			$nav.addClass("active transition");
			setTimeout(() => $nav.removeClass("transition"), 250);

			return this;

		}

		close() {

			// Get $nav
			const $nav = this.target;

			// Close $nav
			$nav.addClass("transition").removeClass("active");
			setTimeout(() => $nav.removeClass("transition"), 250);

			return this;

		}

		get isOpen() {
			return this.target.hasClass("active");
		}
		
	}(...arguments);
}

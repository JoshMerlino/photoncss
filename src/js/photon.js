/*!
 * Photon v1.0.0
 * https://photoncss.github.io/
 *
 * Copyright 2020 Josh Merlino
 * Released under the MIT license
 * https://github.com/PhotonCSS/Photon/LISCENSE
 */

import Waves from "./lib/Waves.js";
import MaterialColors from "./lib/MaterialColors.js";

// Define constant Photon global
const Photon = {

	// Array of functions to execute after a Photon.reload
	hooks: [],

	// Unfocuses all components and resets them to their origional state
	dispose() {

		// Drawer
		$(".drawer[md]").each(function() {
			Photon.Drawer(this).close();
		});

		// Menu
		$(".menu[md]").each(function() {
			Photon.Menu(this).close();
		});

		// return true for hammer syntax
		return true;

	},

	// Generates a UUID in XXXXXXXXXXXX
	guid() {
		// Generate a random 4 digit number in hex XXXX
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4()}${s4()}${s4()}`;
    },

	// Converts a string classname color like "green accent-2" to a hex value
	parseColor(query) {

		let [ color, shade ] = query.split(" ");
		switch(shade) {
			case "lighten-5":
				shade = "50";
				break;
			case "lighten-4":
				shade = "100";
				break;
			case "lighten-3":
				shade = "200";
				break;
			case "lighten-2":
				shade = "300";
				break;
			case "lighten-1":
				shade = "400";
				break;
			case "darken-1":
				shade = "600";
				break;
			case "darken-2":
				shade = "700";
				break;
			case "darken-3":
				shade = "800";
				break;
			case "darken-4":
				shade = "900";
				break;
			case "accent-1":
				shade = "a100";
				break;
			case "accent-2":
				shade = "a200";
				break;
			case "accent-3":
				shade = "a400";
				break;
			case "accent-4":
				shade = "a700";
				break;
			default:
				shade = "500";
				break;
		}

		// Return result
		return MaterialColors[color][shade];

	},

	// Converts string color like "green accent-2" to "prefix-green prefix-accent-2"
	prefixColorQuery(prefix, query) {
		return `${prefix}-${query.replace(/\s/g, ` ${prefix}-${query}`)}`
	},

	// Binds event listeners where needed
	reload() {

		// Checkbox:
		$(".checkbox").not("[md]").each(function() {
			const $this = $(this);
			const $input = $(this).children("input");
			$(this).children().not("input").on("click", function() {
				if(!$this.hasClass("disabled")) $input.prop("checked", !$input.prop("checked")).change();
			})
			$(this).attr("md", "");
		});

		// Drawer
		$(".drawer").not("[md]").each(function() {
			Photon.Drawer(this);
		});

		// List
		$(".list").not("[md]").each(function() {
			$(this).children(".list-item").on("click", function(event) {

				const $input = $(this).children(".meta").children(".checkbox, .switch, .radio").children("input");
				const $target = $(event.target);

				if($target.is($input.parent().children())) return;
				$input.prop("checked", $input.parent().hasClass("radio") ? true : !$input.prop("checked")).change();

			})
		});

		// Drawer
		$(".menu").not("[md]").each(function() {
			Photon.Menu(this);
		});

		// Radio:
		$(".radio").not("[md]").each(function() {
			const $this = $(this);
			const $input = $(this).children("input");
			$(this).children().not("input").on("click", function() {
				if(!$this.hasClass("disabled")) $input.prop("checked", true).change();
			})
			$(this).attr("md", "");
		});

		// Switch:
		$(".switch").not("[md]").each(function() {
			const $this = $(this);
			const $input = $(this).children("input");
			$(this).children().not("input").on("click", function() {
				if(!$this.hasClass("disabled")) $input.prop("checked", !$input.prop("checked")).change();
			})
			$(this).attr("md", "");
		});

		// Textfield:
		$(".input-field").not("[md]").each(function() {

			// Outlined
			if ($(this).hasClass("outlined")) {

				const $input = $(this).children("input");
				const $label = $(this).children("label");
				const $maxlength = $(this).children(".max-length");

				$input.on("keydown keyup change mouseleave", function() {
					if($input.val().length === 0) {
						$label.removeClass("floating");
					} else {
						$label.addClass("floating");
					}
					$maxlength.text($input.val().length + "/" + $maxlength.text().split("/")[1])
				}).change()

				$(this).attr("md", "");

			// Filled & Normal
			} else {

				$(this).append(`<div class="bar"></div>`);

				const $bar = $(this).children(".bar");
				const $input = $(this).children("input");
				const $label = $(this).children("label");
				const $maxlength = $(this).children(".max-length");

				$input.on("keydown keyup change mouseleave", function() {
					if($input.val().length === 0) {
						$label.removeClass("floating");
					} else {
						$label.addClass("floating");
					}
					$maxlength.text($input.val().length + "/" + $maxlength.text().split("/")[1])
				}).change()

				let focus = false;
				$input.on("click", function({ offsetX }) {
					if(focus === true) return;
					focus = true;
					const width = $input[0].clientWidth;
					$bar.removeClass("transition").css({ left: offsetX, width: 0, opacity: 1 });
					setTimeout(() => {
						$bar.addClass("transition").css({ left: 0, width });
					})
				});

				$input.on("blur", function() {
					focus = false;
					$bar.addClass("transition").css({ opacity: 0 });
				})

				$(this).attr("md", "");
			}

		});

		// Toolbar:
		$(".toolbar").not("[md]").each(function() {

			// Elevate Effect:
			if ($(this).hasClass("elevate")) {
				const $toolbar = $(this);
				(function frame() {
					requestAnimationFrame(frame);
					if($(document).scrollTop() === 0) $toolbar.addClass("flat").removeClass("raised");
					if($(document).scrollTop() != 0) $toolbar.removeClass("flat").addClass("raised");
				}());

				$(this).attr("md", "");
			}

			// Auto-hide Effect:
			if ($(this).hasClass("auto-hide")) {
				let _cache = 0;
				const $toolbar = $(this);
				(function frame() {
					requestAnimationFrame(frame);
					const delta = Math.sign($(document).scrollTop() - _cache);
					if (delta > 0) $toolbar.addClass("collapsed");
					if (delta < 0) $toolbar.removeClass("collapsed");
					_cache = $(document).scrollTop();
				}());

				$(this).attr("md", "");
			}

			// Update ToolbarSafeArea
			if ($(this).hasClass("fixed")) {
				const $safearea = $(this).siblings(".toolbar-safe-area").not("[md]");
				if($safearea.length > 0) return $safearea.eq(0).css({ marginTop: $(this)[0].clientHeight }).attr("md", "");
			}


		});

		// Waves:
		$(".waves-effect").not("[md]").each(function() {
			Waves.attach(this);
		})

		// Waves Ink:
		$(".waves-ink").not("[md]").each(function() {
			$(this)
			  .on("mousedown", function(event) {
	  			event.stopPropagation();
	  			Waves.calm(this);
	  			Waves.ripple(this, { wait: 1e10 });
  		  	  })

  		  	  .on("mouseup mouseleave", function() {
    			Waves.calm(this);
  		  	  })

  		      .on("touchstart", function(event) {
    			event.stopPropagation();
  		  	  })

  			// Flag changed elements as processed
  			$(this).attr("md", "");

		});

		// Execute reload hooks
		Photon.hooks.map(hook => hook());

		// return true for hammer syntax
		return true;

	},

	/** Drawer Component
	 * 	@params (<jQueryNode Drawer>)
	 *	@returns new Drawer
	 *	@method open() - Opens drawer
	 *	@method close() - Closes drawer
	 *	@property boolean isOpen - Is drawer open
	 */
	Drawer() {
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
				this.target.addClass("active transition");
				setTimeout(() => this.target.removeClass("transition"), 250);
				return this;
			}
			close() {
				this.target.addClass("transition").removeClass("active");
				setTimeout(() => this.target.removeClass("transition"), 250);
				return this;
			}
			get isOpen() {
				return this.target.hasClass("active");
			}
		}(...arguments);
	},

	/** Menu Component
	 * 	@params (<jQueryNode Menu>)
	 *	@returns new Menu
	 *	@method anchor((<jQueryNode Element> | <Number X, Number Y>))
	 *	@method open() - Opens menu
	 *	@method close() - Closes menu
	 *	@property boolean isOpen - Is menu open
	 */
	Menu() {
		return new class Menu {
			constructor(target) {
				this.target = $(target);
				const $menu = this.target;

				if($menu.is("[md]")) return this;
				$menu.attr("md", "");

				const id = $menu.attr("id") || Photon.guid();
				$menu.attr("id", id);
				$(`<div class="modal-close-area transparent" modal="${id}"></div>`).appendTo($("body"));

				const $modal = $(`.modal-close-area[modal="${id}"]`);
				$menu.on("click", function(event) {
					event.stopPropagation();
					$menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br active");
					$modal.removeClass("active");
				})
				$modal.on("click", function(event) {
					event.stopPropagation();
					$menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br active");
					$modal.removeClass("active");
				})

				return this;
			}
			anchor(x, y) {
				const $menu = this.target;

				if(y === undefined) {
					const $anchor = $(x);
					x = $anchor.offset().left;
					y = $anchor.offset().top;
					$menu.css({ left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8), top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8), })
				} else {
					$menu.css({ left: Math.max(Math.min(x, window.innerWidth - $menu.width() - 8), 8), top: Math.max(Math.min(y, window.innerHeight - $menu.height() - 8), 8), })
				}

				if(x < window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tl")
				if(x > window.innerWidth - $menu.width() - 8 && y < window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-tr")
				if(x < window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-bl")
				if(x > window.innerWidth - $menu.width() - 8 && y > window.innerHeight - $menu.height() - 8) $menu.removeClass("anchor-tl anchor-tr anchor-bl anchor-br").addClass("anchor-br")
				return this;
			}
			open() {
				const $menu = this.target;
				const $modal = $(`.modal-close-area[modal="${$menu.attr("id")}"]`);
				$menu.addClass("active");
				$modal.addClass("active");
				return this;
			}
			close() {
				const $menu = this.target;
				const $modal = $(`.modal-close-area[modal="${$menu.attr("id")}"]`);
				$menu.removeClass("active");
				$modal.removeClass("active");
				return this;
			}
			get isOpen() {
				const $menu = this.target;
				return $menu.hasClass("active");
			}
		}(...arguments);
	}

}

// Initialize Waves.js
Waves.init();

// Bind required event listeners when the DOM loads
$(Photon.reload);

// Load Photon into the window scope
global.Photon = Photon;

// Export Photon as a module
export default Photon;

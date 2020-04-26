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

	// Allow access to MaterialColors
	palette: MaterialColors,

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
		query = query.split(" ");
		for (let q of query) query[query.indexOf(q)] = `${prefix}-${q}`
		return query.join(" ");
	},

	// Binds event listeners where needed
	reload() {

		// Checkbox:
		$(".checkbox").not("[md]").each(function() {
			const $this = $(this);
			const $input = $(this).children("input");
			$(this).children("label, .waves-effect").on("click", function() {
				if(!$this.hasClass("disabled")) $input.prop("checked", !$input.prop("checked")).trigger("change");
			});
			// Flag changed elements
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
				$input.prop("checked", $input.parent().hasClass("radio") ? true : !$input.prop("checked")).trigger("change");

			});
			$(this).attr("md", "");
		});

		// Menu
		$(".menu").not("[md]").each(function() {
			Photon.Menu(this);
		});

		// Radio:
		$(".radio").not("[md]").each(function() {
			const $this = $(this);
			const $input = $(this).children("input");
			$(this).children().not("input").on("click", function() {
				if(!$this.hasClass("disabled")) $input.prop("checked", true).trigger("change");
			})
			$(this).attr("md", "");
		});

		// Slider
		$(".slider").not("[md]").each(function() {
			Photon.Slider(this);
		});

		// Switch:
		$(".switch").not("[md]").each(function() {
			const $this = $(this);
			const $input = $(this).children("input");
			$(this).children().not("input").on("click", function() {
				if(!$this.hasClass("disabled")) $input.prop("checked", !$input.prop("checked")).trigger("change");
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

		// Tabs:
		$(".tabs").not("[md]").each(function() {
			Photon.Tabs(this);
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
			$(this).on("mousedown touchstart", function(event) {
				event.stopPropagation();
				Waves.calm(this);
				Waves.ripple(this, { wait: 1e10 });
  		  	})

  		  	$(this).on("mouseup mouseleave", function() {
    			Waves.calm(this);
  		  	})

  			// Flag changed elements as processed
  			$(this).attr("md", "");

		});

		// Execute reload hooks
		Photon.hooks.map(hook => hook());

		// return true for hammer syntax
		return true;

	}

}

// Import script-based-components and insert into Photon global
const importAll = a => a.keys().forEach(k => Object.assign(Photon, a(k).default));
importAll(require.context("./components", true, /\.js$/));

// On DOM load
$(function() {

	// Initialize Waves.js
	Waves.init();

	// Bind required event listeners when the DOM loads
	Photon.reload();

})

// Load Photon into the window scope
global.Photon = Photon;

// Export Photon as a module
export default Photon;

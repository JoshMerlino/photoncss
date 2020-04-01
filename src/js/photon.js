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

	// Generates a UUID in XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	guid() {
		// Generate a random 4 digit number in hex XXXX
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
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

		// Textfield:
		$(".input-field").not("[md]").each(function() {

			// Outlined
			if ($(this).hasClass("outlined")) {


			// Filled
			} else if ($(this).hasClass("filled")) {


			// Basic
			} else {

				$(this).append(`<div class="bar"></div>`);

				const $bar = $(this).children(".bar");
				const $input = $(this).children("input");
				const $label = $(this).children("label");

				$input.on("keydown keyup keypress change mouseleave", function() {
					if($input.val().length === 0) {
						$label.removeClass("floating");
					} else {
						$label.addClass("floating");
					}
				}).change()

				$input.on("click", function({ offsetX }) {
					const width = $input.width();
					$bar.removeClass("transition").css({ left: offsetX, width: 0, opacity: 1 });
					setTimeout(() => {
						$bar.addClass("transition").css({ left: 0, width });
					})
				});

				$input.on("blur", function() {
					$bar.addClass("transition").css({ opacity: 0 });
				});

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
				if($safearea.length > 0) return $safearea.eq(0).css({ marginTop: $(this)[0].clientHeight + 8 }).attr("md", "");
			}


		});

		// Waves:
		Waves.attach($(".waves-effect").not("[md]"));

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

	},

}

// Initialize Waves.js
Waves.init();

// Bind required event listeners when the DOM loads
$(Photon.reload);

// Load Photon into the window scope
global.Photon = Photon;

// Export Photon as a module
export default Photon;

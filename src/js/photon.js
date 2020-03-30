import Waves from "./waves.js";
import MaterialColors from "./material-colors.js";

// Define constant Photon global
const Photon = {

	// Store an instance of the active dialog
	activeDialog: undefined,

	// Generates a UUID in XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	guid() {
		// Generate a random 4 digit number in hex XXXX
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    },

	// Converts a string classname color like "green accent-2" to a hex value
	parseColor(query) {

		// Extract color and shade from query
		let [ color, shade ] = query.split(" ");

		// Switch shade query to shade hue
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

		// Waves:
		Waves.attach($(".waves-effect").not("[md]"));

		// Waves ink
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

		})

		// Toolbar:
		$(".toolbar").not("[md]").each(function() {

			// Elevate Effect:
			if ($(this).hasClass("elevate")) {

				const $toolbar = $(this);
				let $parent = $toolbar.parents().filter(function() { return this.scrollHeight > this.clientHeight })[0];
					$parent = $parent === document.children[0] ? document : $parent;

				$($parent).scroll(function() {
					if($(this).scrollTop() === 0) $toolbar.addClass("flat").removeClass("raised");
					if($(this).scrollTop() != 0) $toolbar.removeClass("flat").addClass("raised");
				});

				// Flag changed elements as processed
				$(this).attr("md", "");
			}

			// Auto-hide Effect:
			if ($(this).hasClass("auto-hide")) {

				const $toolbar = $(this);
				let $parent = $toolbar.parents().filter(function() { return this.scrollHeight > this.clientHeight })[0];
					$parent = $parent === document.children[0] ? document : $parent;

				let top = 0;
				$($parent)
				  .on("scroll", function() {

					if ($(this).scrollTop() < $toolbar.height()) return;

					const delta = Math.sign($(this).scrollTop() - top);
					top = $(this).scrollTop();

					if (delta > 0) {
						$toolbar.addClass("collapsed");
					} else {
						$toolbar.removeClass("collapsed");
					}

				  })

				// Flag changed elements as processed
				$(this).attr("md", "");
			}

			// Update ToolbarSafeArea
			if ($(this).hasClass("fixed")) {

				const $safearea = $(this).siblings(".toolbar-safe-area").not("[md]");

				// Flag changed elements as processed
				if($safearea.length > 0) return $safearea.eq(0).css({ marginTop: $(this)[0].clientHeight }).attr("md", "");

			}


		})

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

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

	// Converts a string classname color like 'green accent-2' to a hex value
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

	// Binds event listeners where needed
	reload() {

		// Attach waves effect to elements that have not had it attached yet
		Waves.attach($(".waves-effect").not("[photon-tag]"));

		// Waves ink
		$(".waves-ink").not("[photon-tag]")

		  .on("mousedown", function(event) {

			// Stop event spread
			event.stopPropagation();

			// Hide existing waves
			Waves.calm(this);

			// Create a new wave
			Waves.ripple(this, { wait: 1e10 });

		  })

		  .on("mouseup mouseleave", function() {

			// Hide existing waves
  			Waves.calm(this);

		  })

		  .on("touchstart", function(event) {

			// Stop event spread
  			event.stopPropagation();

		  })

		// Flag changed elements as processed
		$(".waves-effect .waves-ink").not("[photon-tag]").attr("photon-tag", "");

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

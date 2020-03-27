import Waves from "./waves.js";

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

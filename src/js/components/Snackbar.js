export default {
	Snackbar() {
		return new class Snackbar {

			constructor({ content, duration, classes, action }) {

				// Load arguments into class scope
				this.content = content;
				this.duration = duration;

				// Create a snackbar container if it dosnt already exist
				$(".snackbar-container").length === 0 && $(`<div class="snackbar-container"></div>`).appendTo("body");

				// Generate unique id for snackbar
				const guid = this.guid = Photon.guid();

				// Append snackbar to container
				$(`<div class="${["snackbar", ...classes.split(" ")].join(" ")}" id="${guid}"><div class="label">${content}</div>${action === false ? "":`<button id="${guid}-action" class="btn flat waves-effect accent">${action.name}</button>`}</div>`).appendTo(".snackbar-container");
				const $snackbar = $(`#${guid}`);

				// Add click event to action if it exists
				action !== false && $(`#${guid}-action`).click(() => action.click(this));

				// Animate in
				requestAnimationFrame(() => $snackbar.addClass("active"));

				// Queue auto-close
				let autoclose = setTimeout(() => this.close(), duration);

				// On snackbar interact, reset autoclose timer
				$snackbar.on("click mousedown touchstart mouseup touchend", () => {
					clearTimeout(autoclose);
					autoclose = setTimeout(() => this.close(), duration);
				});

				return this;

			}

			close() {

				// Get $snackbar
				const $snackbar = $(`#${this.guid}`);

				// Close snackbar
				$snackbar.removeClass("active");
				setTimeout(() => $snackbar.remove(), 250);

				return this;

			}

		}({ content: "", duration: 10000, classes: "", action: false, ...arguments[0] })
	}
}

export default {
	Dialog() {
		return new class Dialog {

			constructor({ type, transition, actions, dismissable, ...props }) {

				// Give the dialog a unique id if it dosnt already have one
				const guid = this.guid = Photon.guid();

				// Define $modal
				$(`<div class="modal-close-area" modal="${guid}"></div>`).appendTo($("body"));
				const $modal = $(`.modal-close-area[modal="${guid}"]`);

				// On click away close
				dismissable && $modal.click(() => this.close());

				// Append and get $dialog
				$(`<div class="dialog-wrapper"><div class="dialog" id="${guid}"></div></div>`).appendTo($("body"));
				const $dialog = $(`#${guid}`);

				// Close dialog on ESC
				dismissable && $(document).on("keydown", ({ key }) => key === "Escape" && this.close());

				// Add transition class
				$dialog.addClass(`transition-${transition}`);

				// Add basic dialog content to multiple types
				$(`<h6 class="title">${props.title}</h6>`).appendTo($dialog);
				if(type === "alert" || type === "form") {
					$(`<p class="content">${props.content}</p>`).appendTo($dialog);
				}

				// Add input to form type
				if(type === "form") {
					this.field_keys = {};
					props.fields.map(field => {
						const key = Photon.guid();
						$(`<div class="${[...(field.classes || "").split(" "), "input-field", "primary"].join(" ")}"><input id="${key}" type="${field.type || "text"}" ${field.value ? `value=${field.value}` : ""} ${field.placeholder ? `placeholder=${field.placeholder}` : ""} />${field.label ? `<label>${field.label}</label>` : ""}</div>`).appendTo($dialog);
						this.field_keys[field.id || field.name] = key
					})
					Photon.reload();
				}

				// Action button wrapper
				actions.length > 0 && $(`<div class="actions"></div>`).appendTo($dialog);
				const $dialog_actions = $dialog.children(".actions");

				// Add actions
				actions.map(action => {
					const act_id = Photon.guid();
					$(`<button class="btn flat waves-effect primary" id="${act_id}">${action.name}</button>`).appendTo($dialog_actions);
					$(`#${act_id}`).click(() => action.click(this));
				})

				return this;

			}

			open() {

				// Get $dialog and $modal
				const $dialog = $(`#${this.guid}`);
				const $modal = $(`.modal-close-area[modal="${this.guid}"]`);

				// Activate both on next frame
				requestAnimationFrame(() => [$dialog, $modal].map(e => e.addClass("active")))

				return this;

			}

			close() {

				// Get $dialog and $modal
				const $dialog = $(`#${this.guid}`);
				const $modal = $(`.modal-close-area[modal="${this.guid}"]`);

				// Deactivate both
				[$dialog, $modal].map(e => e.removeClass("active"));

				// Remove after animation
				setTimeout(() => [$dialog.parent(), $modal].map(e => e.remove()), 250);

				return this;

			}

			fields() {

				// Return values from keys
				let result = {};
				for (const key in this.field_keys) result[key] = $(`#${this.field_keys[key]}`).val();
				return result;

			}

		}({ type: "alert", transition: "grow", title: "This page says:", message: "", actions: [], dismissable: true, ...arguments[0] });
	}
}

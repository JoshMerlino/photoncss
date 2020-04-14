export default {
	Slider() {
		return new class Slider {

			constructor(target) {

				// Get $slider and load into class scope
				const $slider = this.target = $(target).children(".slider-field");

				if($(target).attr("md")) return;

				// Set default bounds as a decimal from 0 - 1
				this.setBounds(0, 1);

				// Get parts of the slider
				const $thumb = $slider.children(".thumb");
				const $determinate = $slider.children(".determinate");

				// Store touch down
				let localState = false;

				// Store local instance
				const _this = this;

				// On thumb drag
				$thumb.on("mousedown touchstart", () => localState = true);

				// On thumb release
				$(document).on("mouseup touchend", () => localState = false);

				// On thumb move
				$(document).on("mousemove touchmove", function(event) {

					// If dragging
					if(!localState) return;

					// Move thumb and deter progress
					const X = Math.max(Math.min((event.hasOwnProperty("changedTouches") && event.changedTouches[0] || event).clientX - $slider.offset().left - 10, $slider.width() - 20), 0);

					// Go To
					$thumb.css({ left: X });
					$determinate.css({ width: X + 10 });

					_this.__fireChange();

				});

				// On jump click
				$slider.on("click", function(event) {

					// Get X
					const X = event.clientX - $slider.offset().left - 10;

					// Animate jump
					_this.__jumpTo(X);

				})

				$(target).attr("md", "")

				// Return instance;
				return this;

			}

			setBounds(min, max) {

				// Load bounds into class scope
				this.bounds = { min, max };

				// Return instance;
				return this;

			}

			increment(amnt) {

				// Get $slider
				const $slider = $(this.target);
				const $determinate = $slider.children(".determinate");

				// Get X
				const X = ($determinate.width() || 0) + amnt / 2 + (amnt > 0 ? 0 : -20);

				// Animate jump
				this.__jumpTo(X);
				$slider.click();

			}

			onChange(change) {

				// Add to hooks
				this.__changeHooks.push(change);

				// Return instance;
				return this;

			}

			set(value) {

				// Get $slider
				const $slider = $(this.target);
				const $determinate = $slider.children(".determinate");



				return this;

			}

			get value() {

				// Get $slider
				const $slider = this.target.length === 0 ? $(this.target.prevObject[0]) : $(this.target[0]);
				const $determinate = $slider.children(".determinate");

				
				return 0;

			}

			/**@private*/ __jumpTo(X) {

				// Get $slider and load into class scope
				const $slider = this.target.length === 0 ? $(this.target.prevObject[0]) : this.target;

				// Ensure X is within bounds
				X = Math.max(Math.min(X, $slider.width() - 20), 0);

				// Get parts of the slider
				const $thumb = $slider.children(".thumb");
				const $determinate = $slider.children(".determinate");

				// Start animation
				$thumb.addClass("transition");
				$determinate.addClass("transition");

				// Go To
				$thumb.css({ left: X });
				$determinate.css({ width: X + 10 });

				setTimeout(() => $thumb.removeClass("transition"), 150);
				setTimeout(() => $determinate.removeClass("transition"), 150);

				// Fire change event
				setTimeout(() => this.__fireChange(), 150);

			}

			/**@private*/ __fireChange() {

				this.__changeHooks.map(hook => hook(this.value));

			}

			/**@private*/ __changeHooks = []

		}(...arguments);
	}
}

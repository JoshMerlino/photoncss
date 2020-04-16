export default {
	Tabs() {
		return new class Tabs {

			/**@private*/ __moveIndicatorTo($tab) {

				// Get $tabs and $indicator
				const $tabs = this.target;
				const $indicator = $tabs.children(".indicator");

				// Start transition
				$indicator.addClass("transition-to-" + ($indicator.offset().left > $tab.offset().left ? "left" : "right"));

				// Math to calc positions
				const calcRightPos = el =>
					Math.ceil($tabs.width() - el.position().left - el[0].getBoundingClientRect().width - $tabs.scrollLeft()) + el[0].clientWidth/2 - el[0].clientWidth/2;
                const calcLeftPos = el =>
					Math.floor(el.position().left + $tabs.scrollLeft()) + el[0].clientWidth/2 - el.width()/2 - 12;

				// Animate indicator
				$indicator.css({
					left: calcLeftPos($tab),
					right: calcRightPos($tab)
				});

				// End transition
				setTimeout(() => $indicator.removeClass("transition-to-left transition-to-right"), 250);

			}

			constructor(target) {

				// Define $tabs
				const $tabs = this.target = $(target);

				// If component was already processed
				if($tabs.attr("md") === "") return;

				// Create $indicator
				$(`<div class="indicator"></div>`).appendTo($tabs);

				// Proxy this
				const _this = this;

				// On tab click
				$tabs.children(".tab").on("click", function() {

					// Get clicked tab
					const $tab = $(this);

					// If tab is disabled return
					if($tab.hasClass("disabled")) return;

					const htmlFor = $(this).attr("for");
					htmlFor && $(document.getElementById(htmlFor)).addClass("active").siblings(".tab-content").removeClass("active");

					// Add active class to that tab and remove from others
					$tab.addClass("active").siblings(".tab").removeClass("active");

					// Move indicator to this tab
					_this.__moveIndicatorTo($tab);

				});

				// Get $tab children
				const $tab = $tabs.children(".tab");

				// Select active or first tab

				let state = false;
				$tab.each(function() {
					if($(this).hasClass("active")) {
						state = true;
						$(this).click()
					}
				})

				state === false && $tab.first().click()

				// Flag component as processed
				$tabs.attr("md", "");

			}

			set($tab) {

				// Trigger click on $tab
				$tab.click();

			}

		}(...arguments)
	}
}

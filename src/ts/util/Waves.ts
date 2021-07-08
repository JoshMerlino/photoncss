import $ from "jquery";

interface Offset { top: number, left: number }
interface Position { x: number; y: number; }
interface WavesOptions { duration?: number; delay?: number; wait?: number; ink?: boolean; position?: null | Position }

export function arbitraryScale(element: Element, relativeX: number, relativeY: number): number {

	// Get binding box
	const $elem = $(element);
	const { clientHeight, clientWidth } = element;

	// If waves ink,
	if($elem.hasClass("waves-ink")) return 0.48;

	//
	let x = relativeX;
	let y = relativeY;

	//
	if(x > clientWidth / 2)  x = clientWidth - x;
	if(y > clientHeight / 2) y = clientHeight - y;

	//
	x = clientWidth - x;
	y = clientHeight - y;

	// If square element
	if(clientHeight === clientWidth) {
		return (clientWidth - Math.abs(clientWidth - (clientHeight - (clientWidth - x) - (clientHeight - y)) - clientWidth)) / 50;
	}

	// Get ripple apature
	const apature = (x * 1.019 + y * 0.350 + (clientHeight + clientWidth) / 2 * 0.118) / 52;

	// If is a touch event
	if ($elem.hasClass("waves-touch")) {
		$elem.removeClass("waves-touch");
		return apature / 1.1;
	}

	// Return ripple apature
	return apature;

}

function factory() {

	// Define constants
	const $$ = document.querySelectorAll.bind(document);
	const toString = Object.prototype.toString;
	const isTouchAvailable = "ontouchstart" in window;

	// Find exact position of element
	const isWindow = (obj: any) => obj !== null && obj === obj.window;
	const getWindow = (elem: any) => isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	const isObject = (value: any) => typeof value === "function" || typeof value === "object" && !!value;
	const isDOMNode = (obj: any) => isObject(obj) && obj.nodeType > 0;

	function getWavesElements(nodes: Element | string | Element[]): Element[] {
		const asString = toString.call(nodes);
		if(asString === "[object String]") return Array.from($$(nodes as string));
		if(isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(asString) && nodes.hasOwnProperty("length")) return [ nodes as Element ];
		if (isDOMNode(nodes)) return [ nodes as Element ];
		return [];
	}

	function offset(elem: Element): Offset {
		const doc = elem && elem.ownerDocument;
		const docElem = doc.documentElement;
		const win = getWindow(doc);
		const box: Offset = typeof elem.getBoundingClientRect !== typeof undefined ? elem.getBoundingClientRect() : { top: 0, left: 0 };
		return { top: box.top + win.pageYOffset - docElem.clientTop, left: box.left + win.pageXOffset - docElem.clientLeft };
	}

	function convertStyle(styleObj: { [key: string]: string; }) {
		const style: string[] = [];
		for (const prop in styleObj) styleObj.hasOwnProperty(prop) && style.push(`${prop}:${styleObj[prop]};`);
		return style.join("");
	}

	const Effect = {
		duration: 2000,	// Effect duration
		delay: 50, 		// Effect delay (check for scroll before showing effect)
		show(event: Event, element: Element) {

			// Disable right click
			/* eslint no-extra-parens: 0 */
			if((<MouseEvent>event).button === 2) return false;

			element = element || this;

			// Create ripple
			const ripple = document.createElement("div");
			ripple.className = "waves-ripple waves-rippling";
			element.appendChild(ripple);

			// Get click coordinate and element width
			const pos = offset(element);
			let relativeY = 0;
			let relativeX = 0;

			// Support for touch devices
			if("touches" in event && (<TouchEvent>event).touches.length) {
				relativeX = (<TouchEvent>event).touches[0].pageX - pos.left;
				relativeY = (<TouchEvent>event).touches[0].pageY - pos.top;
			}

			// Normal case
			else {
				relativeX = (<MouseEvent>event).pageX - pos.left;
				relativeY = (<MouseEvent>event).pageY - pos.top;
			}

			// Support for synthetic events
			relativeX = relativeX >= 0 ? relativeX : 0;
			relativeY = relativeY >= 0 ? relativeY : 0;

			if($(element).hasClass("waves-ink")) {
				console.log(element)
				relativeX = element.clientWidth / 2;
				relativeY = element.clientHeight / 2;
			}

			// Custom PhotonCSS ripple scale function
			const scale = `scale(${arbitraryScale(element, relativeX, relativeY)})`;
			const translate = "translate(0,0)";

			// Attach data to element
			ripple.setAttribute("data-hold", Date.now().toString());
			ripple.setAttribute("data-x", relativeX.toString());
			ripple.setAttribute("data-y", relativeY.toString());
			ripple.setAttribute("data-scale", scale);
			ripple.setAttribute("data-translate", translate);

			// Set ripple position
			const rippleStyle: { [key: string]: string; } = {
				top: `${relativeY}px`,
				left: `${relativeX}px`
			};

			ripple.classList.add("waves-notransition");
			ripple.setAttribute("style", convertStyle(rippleStyle));
			ripple.classList.remove("waves-notransition");

			// Scale the ripple
			rippleStyle["transform"] = `${scale} ${translate}`;
			rippleStyle.transform = `${scale} ${translate}`;
			rippleStyle.opacity = "1";

			const duration = event.type === "mousemove" ? 2500 : Effect.duration;
			rippleStyle["transition-duration"] = `${duration}ms`;

			ripple.setAttribute("style", convertStyle(rippleStyle));

		},
		hide(event: Event, element: Element) {

			element = element || this;

			// Get ripple
			const $ripple = element.getElementsByClassName("waves-rippling");

			// Remove all ripples
			for(let i = 0, len = $ripple.length; i < len; i++) removeRipple(event, element, $ripple[i]);

			if (isTouchAvailable) {
				$(element).on("touchend", function(this: Element, event: any){ Effect.hide(event, this); });
				$(element).on("touchcancel", function(this: Element, event: any){ Effect.hide(event, this); });
			}

			$(element).on("mouseup", function(this: Element, event: any){ Effect.hide(event, this); });
			$(element).on("mouseleave", function(this: Element, event: any){ Effect.hide(event, this); });

		}
	};

	/**
     * Collection of wrapper for HTML element that only have single tag
     * like <input> and <img>
     */
	const TagWrapper = {

		// Wrap <input> tag so it can perform the effect
		input(element: Element) {

			// Get element parent
			const parent = element.parentNode as Element;

			// If input already have parent just pass through
			if(parent.tagName.toLowerCase() === "i" && parent.classList.contains("waves-effect")) return;

			// Put element class and style to the specified parent
			const wrapper = document.createElement("i");
			wrapper.className = `${element.className} waves-input-wrapper`;
			element.className = "waves-button-input";

			// Put element as child
			parent.replaceChild(wrapper, element);
			wrapper.appendChild(element);

			// Apply element color and background color to wrapper
			const elementStyle = window.getComputedStyle(element, null);
			const color = elementStyle.color;
			const backgroundColor = elementStyle.backgroundColor;

			wrapper.setAttribute("style", `color: ${color};background:${backgroundColor}`);
			element.setAttribute("style", "background-color:rgba(0,0,0,0);");

		},

		// Wrap <img> tag so it can perform the effect
		img(element: Element) {

			const parent = element.parentNode as Element;

			// If input already have parent just pass through
			if (parent.tagName.toLowerCase() === "i" && parent.classList.contains("waves-effect"))return;

			// Put element as child
			const wrapper  = document.createElement("i");
			parent.replaceChild(wrapper, element);
			wrapper.appendChild(element);

		}

	};

	/**
     * Hide the effect and remove the ripple. Must be
     * a separate function to pass the JSLint...
     */
	function removeRipple(event: Event, element: Element, ripple: Element) {

		// Check if the ripple still exist
		if(!ripple) return;

		ripple.classList.remove("waves-rippling");

		const scale = ripple.getAttribute("data-scale");
		const relativeX = ripple.getAttribute("data-x");
		const relativeY = ripple.getAttribute("data-y");
		const translate = ripple.getAttribute("data-translate");

		// Get delay beetween mousedown and mouse leave
		const diff = Date.now() - Number(ripple.getAttribute("data-hold"));
		let delay = 350 - diff;

		if(delay < 0) delay = 0;
		if(event.type === "mousemove") delay = 150;

		// Fade out ripple after delay
		const duration = event.type === "mousemove" ? 2500 : Effect.duration;

		setTimeout(function() {

			const style = {
				top: `${relativeY}px`,
				left: `${relativeX}px`,
				opacity: "0",

				// Duration
				"transition-duration": `${duration}ms`,
				"transform": `${scale} ${translate}`
			};

			ripple.setAttribute("style", convertStyle(style));

			setTimeout(function() {
				try {
					element.removeChild(ripple);
				} catch (e) {
					return false;
				}
			}, duration);

		}, delay);
	}


	/**
     * Disable mousedown event for 500ms during and after touch
     */
	const TouchHandler = {

		/* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
		touches: 0,
		allowEvent(event: Event): boolean {
			if(/^(mousedown|mousemove)$/.test(event.type) && TouchHandler.touches) return false;
			return true;
		},
		registerEvent(event: Event) {
			const { type } = event;

			if(type === "touchstart") TouchHandler.touches += 1; // push

			else if (/^(touchend|touchcancel)$/.test(type)) {

				setTimeout(function() {
					if (TouchHandler.touches) TouchHandler.touches -= 1; // pop after 500ms
				}, 500);

			}
		}
	};


	/**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
	function getWavesEffectElement(event: Event) {
		if (TouchHandler.allowEvent(event) === false) return null;
		let element = null;
		let target = event.target as Element;
		while(target.parentElement) {
			if(!(target instanceof SVGElement) && target.classList.contains("waves-effect")) {
				element = target;
				break;
			}
			target = target.parentElement;
		}
		return element;
	}

	/**
     * Bubble the click and show effect if .waves-effect elem was found
     */
	function showEffect(event: Event) {

		// Disable effect if element has "disabled" property on it
		// In some cases, the event is not triggered by the current element
		// if (e.target.getAttribute('disabled') !== null) {
		//     return;
		// }

		const element = getWavesEffectElement(event);

		if(element === null) return;

		// Make it sure the element has either disabled property, disabled attribute or 'disabled' class
		if(element.getAttribute("disabled") || element.classList.contains("disabled")) return;

		TouchHandler.registerEvent(event);

		if(event.type === "touchstart" && Effect.delay) {

			let hidden = false;

			let timer: NodeJS.Timeout | null = setTimeout(function() {
				timer = null;
				Effect.show(event, element);
			}, Effect.delay);

			const hideEffect = function(hideEvent: Event): void {

				// if touch hasn't moved, and effect not yet started: start effect now
				if (timer) {
					clearTimeout(timer);
					timer = null;
					Effect.show(event, element);
				}
				if (!hidden) {
					hidden = true;
					Effect.hide(hideEvent, element);
				}

				removeListeners();
			};

			const touchMove = function(moveEvent: Event) {
				if(timer) {
					clearTimeout(timer);
					timer = null;
				}
				hideEffect(moveEvent);
				removeListeners();
			};

			element.addEventListener("touchmove", touchMove, false);
			element.addEventListener("touchend", hideEffect, false);
			element.addEventListener("touchcancel", hideEffect, false);

			const removeListeners = function() {
				element.removeEventListener("touchmove", touchMove);
				element.removeEventListener("touchend", hideEffect);
				element.removeEventListener("touchcancel", hideEffect);
			};
		} else {

			Effect.show(event, element);

			if (isTouchAvailable) {
				element.addEventListener("touchend", function(this: Element, event: Event) { Effect.hide(event, this); }, false);
				element.addEventListener("touchcancel", function(this: Element, event: Event) { Effect.hide(event, this); }, false);
			}

			element.addEventListener("mouseup", function(this: Element, event: Event) { Effect.hide(event, this); }, false);
			element.addEventListener("mouseleave", function(this: Element, event: Event) { Effect.hide(event, this); }, false);
		}
	}

	// Define waves
	const Waves = {

		init(options?: WavesOptions) {

			const body = document.body;
			options = options || {};

			if("duration" in options) Effect.duration = options.duration as number;
			if("delay" in options) Effect.delay = options.delay as number;

			if(isTouchAvailable) {
				body.addEventListener("touchstart", showEffect, false);
				body.addEventListener("touchcancel", TouchHandler.registerEvent, false);
				body.addEventListener("touchend", TouchHandler.registerEvent, false);
			}

			body.addEventListener("mousedown", showEffect, false);

		},

		/**
	     * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
	     * waves classes to a set of elements. Set drag to true if the ripple mouseover
	     * or skimming effect should be applied to the elements.
	     */
		attach(elements: Element[], classArr: string[]) {

			elements = getWavesElements(elements);
			let classes = "";

			if (toString.call(classArr) === "[object Array]") classes = classArr.join(" ");

			classes = classes ? ` ${classes}` : "";

			let element: Element;
			let tagName;

			for (let i = 0, len = elements.length; i < len; i++) {

				element = elements[i];
				tagName = element.tagName.toLowerCase();

				if ([ "input", "img" ].indexOf(tagName) !== -1) {
					TagWrapper[tagName as "img" | "input"](element);
					element = element.parentElement as Element;
				}

				if (element.className.indexOf("waves-effect") === -1) {
					element.className += `waves-effect ${classes}`;
				}
			}
		},

		/**
	     * Cause a ripple to appear in an element via code.
	     */
		ripple(elements: Element | Element[], options: WavesOptions) {

			elements = getWavesElements(elements);
			const { length } = elements;

			options = options || {};
			options.wait = options.wait || 0;
			options.position = options.position || null; // default = centre of element
			options.ink = options.ink || false;

			if(length) {
				let element;
				let pos;
				let off;
				const center: Position = { x: 0, y: 0 };
				let i = 0;
				const mousedown = {
					type: "mousedown",
					button: 1
				} as any;

				const hideRipple = function(mouseup: Event, element: Element) {
					return function() {
						Effect.hide(mouseup, element);
					};
				};

				for (; i < length; i++) {
					element = elements[i];
					pos = options.position || {
						x: element.clientWidth / 2,
						y: element.clientHeight / 2
					};

					off = offset(element);
					center.x = off.left + pos.x;
					center.y = off.top + pos.y;

					mousedown.pageX = center.x;
					mousedown.pageY = center.y;

					Effect.show(mousedown, element);

					if (options.wait >= 0 && options.wait !== null) {
						const mouseup = {
							type: "mouseup",
							button: 1
						};
						setTimeout(hideRipple(<MouseEvent>mouseup, element), options.wait);
					}
				}
			}
		},

		/**
	     * Remove all ripples from an element.
	     */
		calm(elements: Element | Element[]) {
			elements = getWavesElements(elements);
			const mouseup = <MouseEvent>{ type: "mouseup", button: 1 };
			for(let i = 0, len = elements.length; i < len; i++) Effect.hide(mouseup, elements[i]);
		}

	};

	$(function() {
		Waves.init();
	})

	return Waves;
}

// Export module
export default factory.call(typeof global === "object" ? global : this);

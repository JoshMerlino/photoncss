"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arbitraryScale = void 0;
var jquery_1 = __importDefault(require("jquery"));
function arbitraryScale(element, relativeX, relativeY) {
    // Get binding box
    var $elem = jquery_1.default(element);
    var clientHeight = element.clientHeight, clientWidth = element.clientWidth;
    // If waves ink,
    if ($elem.hasClass("waves-ink"))
        return 0.48;
    //
    var x = relativeX;
    var y = relativeY;
    //
    if (x > clientWidth / 2)
        x = clientWidth - x;
    if (y > clientHeight / 2)
        y = clientHeight - y;
    //
    x = clientWidth - x;
    y = clientHeight - y;
    // If square element
    if (clientHeight === clientWidth) {
        return (clientWidth - Math.abs(clientWidth - (clientHeight - (clientWidth - x) - (clientHeight - y)) - clientWidth)) / 50;
    }
    // Get ripple apature
    var apature = (x * 1.019 + y * 0.350 + (clientHeight + clientWidth) / 2 * 0.118) / 52;
    // If is a touch event
    if ($elem.hasClass("waves-touch")) {
        $elem.removeClass("waves-touch");
        return apature / 1.1;
    }
    // Return ripple apature
    return apature;
}
exports.arbitraryScale = arbitraryScale;
function factory() {
    // Define constants
    var $$ = document.querySelectorAll.bind(document);
    var toString = Object.prototype.toString;
    var isTouchAvailable = "ontouchstart" in window;
    // Find exact position of element
    var isWindow = function (obj) { return obj !== null && obj === obj.window; };
    var getWindow = function (elem) { return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView; };
    var isObject = function (value) { return typeof value === "function" || typeof value === "object" && !!value; };
    var isDOMNode = function (obj) { return isObject(obj) && obj.nodeType > 0; };
    function getWavesElements(nodes) {
        var asString = toString.call(nodes);
        if (asString === "[object String]")
            return Array.from($$(nodes));
        if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(asString) && nodes.hasOwnProperty("length"))
            return [nodes];
        if (isDOMNode(nodes))
            return [nodes];
        return [];
    }
    function offset(elem) {
        var doc = elem && elem.ownerDocument;
        var docElem = doc.documentElement;
        var win = getWindow(doc);
        var box = typeof elem.getBoundingClientRect !== typeof undefined ? elem.getBoundingClientRect() : { top: 0, left: 0 };
        return { top: box.top + win.pageYOffset - docElem.clientTop, left: box.left + win.pageXOffset - docElem.clientLeft };
    }
    function convertStyle(styleObj) {
        var style = [];
        for (var prop in styleObj)
            styleObj.hasOwnProperty(prop) && style.push(prop + ":" + styleObj[prop] + ";");
        return style.join("");
    }
    var Effect = {
        duration: 2000,
        delay: 50,
        show: function (event, element) {
            // Disable right click
            /* eslint no-extra-parens: 0 */
            if (event.button === 2)
                return false;
            element = element || this;
            // Create ripple
            var ripple = document.createElement("div");
            ripple.className = "waves-ripple waves-rippling";
            element.appendChild(ripple);
            // Get click coordinate and element width
            var pos = offset(element);
            var relativeY = 0;
            var relativeX = 0;
            // Support for touch devices
            if ("touches" in event && event.touches.length) {
                relativeX = event.touches[0].pageX - pos.left;
                relativeY = event.touches[0].pageY - pos.top;
            }
            // Normal case
            else {
                relativeX = event.pageX - pos.left;
                relativeY = event.pageY - pos.top;
            }
            // Support for synthetic events
            relativeX = relativeX >= 0 ? relativeX : 0;
            relativeY = relativeY >= 0 ? relativeY : 0;
            // Custom PhotonCSS ripple scale function
            var scale = "scale(" + arbitraryScale(element, relativeX, relativeY) + ")";
            var translate = "translate(0,0)";
            // Attach data to element
            ripple.setAttribute("data-hold", Date.now().toString());
            ripple.setAttribute("data-x", relativeX.toString());
            ripple.setAttribute("data-y", relativeY.toString());
            ripple.setAttribute("data-scale", scale);
            ripple.setAttribute("data-translate", translate);
            // Set ripple position
            var rippleStyle = {
                top: relativeY + "px",
                left: relativeX + "px"
            };
            ripple.classList.add("waves-notransition");
            ripple.setAttribute("style", convertStyle(rippleStyle));
            ripple.classList.remove("waves-notransition");
            // Scale the ripple
            rippleStyle["transform"] = scale + " " + translate;
            rippleStyle.transform = scale + " " + translate;
            rippleStyle.opacity = "1";
            var duration = event.type === "mousemove" ? 2500 : Effect.duration;
            rippleStyle["transition-duration"] = duration + "ms";
            ripple.setAttribute("style", convertStyle(rippleStyle));
        },
        hide: function (event, element) {
            element = element || this;
            // Get ripple
            var $ripple = element.getElementsByClassName("waves-rippling");
            // Remove all ripples
            for (var i = 0, len = $ripple.length; i < len; i++)
                removeRipple(event, element, $ripple[i]);
            if (isTouchAvailable) {
                jquery_1.default(element).on("touchend", function (event) { Effect.hide(event, this); });
                jquery_1.default(element).on("touchcancel", function (event) { Effect.hide(event, this); });
            }
            jquery_1.default(element).on("mouseup", function (event) { Effect.hide(event, this); });
            jquery_1.default(element).on("mouseleave", function (event) { Effect.hide(event, this); });
        }
    };
    /**
     * Collection of wrapper for HTML element that only have single tag
     * like <input> and <img>
     */
    var TagWrapper = {
        // Wrap <input> tag so it can perform the effect
        input: function (element) {
            // Get element parent
            var parent = element.parentNode;
            // If input already have parent just pass through
            if (parent.tagName.toLowerCase() === "i" && parent.classList.contains("waves-effect"))
                return;
            // Put element class and style to the specified parent
            var wrapper = document.createElement("i");
            wrapper.className = element.className + " waves-input-wrapper";
            element.className = "waves-button-input";
            // Put element as child
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);
            // Apply element color and background color to wrapper
            var elementStyle = window.getComputedStyle(element, null);
            var color = elementStyle.color;
            var backgroundColor = elementStyle.backgroundColor;
            wrapper.setAttribute("style", "color: " + color + ";background:" + backgroundColor);
            element.setAttribute("style", "background-color:rgba(0,0,0,0);");
        },
        // Wrap <img> tag so it can perform the effect
        img: function (element) {
            var parent = element.parentNode;
            // If input already have parent just pass through
            if (parent.tagName.toLowerCase() === "i" && parent.classList.contains("waves-effect"))
                return;
            // Put element as child
            var wrapper = document.createElement("i");
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);
        }
    };
    /**
     * Hide the effect and remove the ripple. Must be
     * a separate function to pass the JSLint...
     */
    function removeRipple(event, element, ripple) {
        // Check if the ripple still exist
        if (!ripple)
            return;
        ripple.classList.remove("waves-rippling");
        var scale = ripple.getAttribute("data-scale");
        var relativeX = ripple.getAttribute("data-x");
        var relativeY = ripple.getAttribute("data-y");
        var translate = ripple.getAttribute("data-translate");
        // Get delay beetween mousedown and mouse leave
        var diff = Date.now() - Number(ripple.getAttribute("data-hold"));
        var delay = 350 - diff;
        if (delay < 0)
            delay = 0;
        if (event.type === "mousemove")
            delay = 150;
        // Fade out ripple after delay
        var duration = event.type === "mousemove" ? 2500 : Effect.duration;
        setTimeout(function () {
            var style = {
                top: relativeY + "px",
                left: relativeX + "px",
                opacity: "0",
                // Duration
                "transition-duration": duration + "ms",
                "transform": scale + " " + translate
            };
            ripple.setAttribute("style", convertStyle(style));
            setTimeout(function () {
                try {
                    element.removeChild(ripple);
                }
                catch (e) {
                    return false;
                }
            }, duration);
        }, delay);
    }
    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function (event) {
            if (/^(mousedown|mousemove)$/.test(event.type) && TouchHandler.touches)
                return false;
            return true;
        },
        registerEvent: function (event) {
            var type = event.type;
            if (type === "touchstart")
                TouchHandler.touches += 1; // push
            else if (/^(touchend|touchcancel)$/.test(type)) {
                setTimeout(function () {
                    if (TouchHandler.touches)
                        TouchHandler.touches -= 1; // pop after 500ms
                }, 500);
            }
        }
    };
    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(event) {
        if (TouchHandler.allowEvent(event) === false)
            return null;
        var element = null;
        var target = event.target;
        while (target.parentElement) {
            if (!(target instanceof SVGElement) && target.classList.contains("waves-effect")) {
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
    function showEffect(event) {
        // Disable effect if element has "disabled" property on it
        // In some cases, the event is not triggered by the current element
        // if (e.target.getAttribute('disabled') !== null) {
        //     return;
        // }
        var element = getWavesEffectElement(event);
        if (element === null)
            return;
        // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
        if (element.getAttribute("disabled") || element.classList.contains("disabled"))
            return;
        TouchHandler.registerEvent(event);
        if (event.type === "touchstart" && Effect.delay) {
            var hidden_1 = false;
            var timer_1 = setTimeout(function () {
                timer_1 = null;
                Effect.show(event, element);
            }, Effect.delay);
            var hideEffect_1 = function (hideEvent) {
                // if touch hasn't moved, and effect not yet started: start effect now
                if (timer_1) {
                    clearTimeout(timer_1);
                    timer_1 = null;
                    Effect.show(event, element);
                }
                if (!hidden_1) {
                    hidden_1 = true;
                    Effect.hide(hideEvent, element);
                }
                removeListeners_1();
            };
            var touchMove_1 = function (moveEvent) {
                if (timer_1) {
                    clearTimeout(timer_1);
                    timer_1 = null;
                }
                hideEffect_1(moveEvent);
                removeListeners_1();
            };
            element.addEventListener("touchmove", touchMove_1, false);
            element.addEventListener("touchend", hideEffect_1, false);
            element.addEventListener("touchcancel", hideEffect_1, false);
            var removeListeners_1 = function () {
                element.removeEventListener("touchmove", touchMove_1);
                element.removeEventListener("touchend", hideEffect_1);
                element.removeEventListener("touchcancel", hideEffect_1);
            };
        }
        else {
            Effect.show(event, element);
            if (isTouchAvailable) {
                element.addEventListener("touchend", function (event) { Effect.hide(event, this); }, false);
                element.addEventListener("touchcancel", function (event) { Effect.hide(event, this); }, false);
            }
            element.addEventListener("mouseup", function (event) { Effect.hide(event, this); }, false);
            element.addEventListener("mouseleave", function (event) { Effect.hide(event, this); }, false);
        }
    }
    // Define waves
    var Waves = {
        init: function (options) {
            var body = document.body;
            options = options || {};
            if ("duration" in options)
                Effect.duration = options.duration;
            if ("delay" in options)
                Effect.delay = options.delay;
            if (isTouchAvailable) {
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
        attach: function (elements, classArr) {
            elements = getWavesElements(elements);
            var classes = "";
            if (toString.call(classArr) === "[object Array]")
                classes = classArr.join(" ");
            classes = classes ? " " + classes : "";
            var element;
            var tagName;
            for (var i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                tagName = element.tagName.toLowerCase();
                if (["input", "img"].indexOf(tagName) !== -1) {
                    TagWrapper[tagName](element);
                    element = element.parentElement;
                }
                if (element.className.indexOf("waves-effect") === -1) {
                    element.className += "waves-effect " + classes;
                }
            }
        },
        /**
         * Cause a ripple to appear in an element via code.
         */
        ripple: function (elements, options) {
            elements = getWavesElements(elements);
            var length = elements.length;
            options = options || {};
            options.wait = options.wait || 0;
            options.position = options.position || null; // default = centre of element
            options.ink = options.ink || false;
            if (length) {
                var element = void 0;
                var pos = void 0;
                var off = void 0;
                var center = { x: 0, y: 0 };
                var i = 0;
                var mousedown = {
                    type: "mousedown",
                    button: 1
                };
                var hideRipple = function (mouseup, element) {
                    return function () {
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
                        var mouseup = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(hideRipple(mouseup, element), options.wait);
                    }
                }
            }
        },
        /**
         * Remove all ripples from an element.
         */
        calm: function (elements) {
            elements = getWavesElements(elements);
            var mouseup = { type: "mouseup", button: 1 };
            for (var i = 0, len = elements.length; i < len; i++)
                Effect.hide(mouseup, elements[i]);
        }
    };
    return Waves;
}
// Export module
exports.default = factory.call(typeof global === "object" ? global : this);
//# sourceMappingURL=Waves.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arbitraryScale = void 0;
const jquery_1 = __importDefault(require("jquery"));
function arbitraryScale(element, relativeX, relativeY) {
    const $elem = jquery_1.default(element);
    const { clientHeight, clientWidth } = element;
    if ($elem.hasClass("waves-ink"))
        return 0.48;
    let x = relativeX;
    let y = relativeY;
    if (x > clientWidth / 2)
        x = clientWidth - x;
    if (y > clientHeight / 2)
        y = clientHeight - y;
    x = clientWidth - x;
    y = clientHeight - y;
    if (clientHeight === clientWidth) {
        return (clientWidth - Math.abs(clientWidth - (clientHeight - (clientWidth - x) - (clientHeight - y)) - clientWidth)) / 50;
    }
    const apature = (x * 1.019 + y * 0.350 + (clientHeight + clientWidth) / 2 * 0.118) / 52;
    if ($elem.hasClass("waves-touch")) {
        $elem.removeClass("waves-touch");
        return apature / 1.1;
    }
    return apature;
}
exports.arbitraryScale = arbitraryScale;
function factory() {
    const $$ = document.querySelectorAll.bind(document);
    const toString = Object.prototype.toString;
    const isTouchAvailable = "ontouchstart" in window;
    const isWindow = (obj) => obj !== null && obj === obj.window;
    const getWindow = (elem) => isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    const isObject = (value) => typeof value === "function" || typeof value === "object" && !!value;
    const isDOMNode = (obj) => isObject(obj) && obj.nodeType > 0;
    function getWavesElements(nodes) {
        const asString = toString.call(nodes);
        if (asString === "[object String]")
            return Array.from($$(nodes));
        if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(asString) && nodes.hasOwnProperty("length"))
            return [nodes];
        if (isDOMNode(nodes))
            return [nodes];
        return [];
    }
    function offset(elem) {
        const doc = elem && elem.ownerDocument;
        const docElem = doc.documentElement;
        const win = getWindow(doc);
        const box = typeof elem.getBoundingClientRect !== typeof undefined ? elem.getBoundingClientRect() : { top: 0, left: 0 };
        return { top: box.top + win.pageYOffset - docElem.clientTop, left: box.left + win.pageXOffset - docElem.clientLeft };
    }
    function convertStyle(styleObj) {
        const style = [];
        for (const prop in styleObj)
            styleObj.hasOwnProperty(prop) && style.push(`${prop}:${styleObj[prop]};`);
        return style.join("");
    }
    const Effect = {
        duration: 2000,
        delay: 50,
        show(event, element) {
            if (event.button === 2)
                return false;
            element = element || this;
            const ripple = document.createElement("div");
            ripple.className = "waves-ripple waves-rippling";
            element.appendChild(ripple);
            const pos = offset(element);
            let relativeY = 0;
            let relativeX = 0;
            if ("touches" in event && event.touches.length) {
                relativeX = event.touches[0].pageX - pos.left;
                relativeY = event.touches[0].pageY - pos.top;
            }
            else {
                relativeX = event.pageX - pos.left;
                relativeY = event.pageY - pos.top;
            }
            relativeX = relativeX >= 0 ? relativeX : 0;
            relativeY = relativeY >= 0 ? relativeY : 0;
            if (jquery_1.default(element).hasClass("waves-ink")) {
                relativeX = element.clientWidth / 2;
                relativeY = element.clientHeight / 2;
            }
            const scale = `scale(${arbitraryScale(element, relativeX, relativeY)})`;
            const translate = "translate(0,0)";
            ripple.setAttribute("data-hold", Date.now().toString());
            ripple.setAttribute("data-x", relativeX.toString());
            ripple.setAttribute("data-y", relativeY.toString());
            ripple.setAttribute("data-scale", scale);
            ripple.setAttribute("data-translate", translate);
            const rippleStyle = {
                top: `${relativeY}px`,
                left: `${relativeX}px`
            };
            ripple.classList.add("waves-notransition");
            ripple.setAttribute("style", convertStyle(rippleStyle));
            ripple.classList.remove("waves-notransition");
            rippleStyle.transform = `${scale} ${translate}`;
            rippleStyle.transform = `${scale} ${translate}`;
            rippleStyle.opacity = "1";
            const duration = event.type === "mousemove" ? 2500 : Effect.duration;
            rippleStyle["transition-duration"] = `${duration}ms`;
            ripple.setAttribute("style", convertStyle(rippleStyle));
        },
        hide(event, element) {
            element = element || this;
            const $ripple = element.getElementsByClassName("waves-rippling");
            for (let i = 0, len = $ripple.length; i < len; i++)
                removeRipple(event, element, $ripple[i]);
            if (isTouchAvailable) {
                jquery_1.default(element).off("touchend")
                    .on("touchend", function (event) {
                    Effect.hide(event, this);
                });
                jquery_1.default(element).off("touchcancel")
                    .on("touchcancel", function (event) {
                    Effect.hide(event, this);
                });
            }
            jquery_1.default(element).off("mouseup")
                .on("mouseup", function (event) {
                Effect.hide(event, this);
            });
            jquery_1.default(element).off("mouseleave")
                .on("mouseleave", function (event) {
                Effect.hide(event, this);
            });
        }
    };
    const TagWrapper = {
        input(element) {
            const parent = element.parentNode;
            if (parent.tagName.toLowerCase() === "i" && parent.classList.contains("waves-effect"))
                return;
            const wrapper = document.createElement("i");
            wrapper.className = `${element.className} waves-input-wrapper`;
            element.className = "waves-button-input";
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);
            const elementStyle = window.getComputedStyle(element, null);
            const color = elementStyle.color;
            const backgroundColor = elementStyle.backgroundColor;
            wrapper.setAttribute("style", `color: ${color};background:${backgroundColor}`);
            element.setAttribute("style", "background-color:rgba(0,0,0,0);");
        },
        img(element) {
            const parent = element.parentNode;
            if (parent.tagName.toLowerCase() === "i" && parent.classList.contains("waves-effect"))
                return;
            const wrapper = document.createElement("i");
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);
        }
    };
    function removeRipple(event, element, ripple) {
        if (!ripple)
            return;
        ripple.classList.remove("waves-rippling");
        const scale = ripple.getAttribute("data-scale");
        const relativeX = ripple.getAttribute("data-x");
        const relativeY = ripple.getAttribute("data-y");
        const translate = ripple.getAttribute("data-translate");
        const diff = Date.now() - Number(ripple.getAttribute("data-hold"));
        let delay = 350 - diff;
        if (delay < 0)
            delay = 0;
        if (event.type === "mousemove")
            delay = 150;
        const duration = event.type === "mousemove" ? 2500 : Effect.duration;
        setTimeout(function () {
            const style = {
                top: `${relativeY}px`,
                left: `${relativeX}px`,
                opacity: "0",
                "transition-duration": `${duration}ms`,
                "transform": `${scale} ${translate}`
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
    const TouchHandler = {
        touches: 0,
        allowEvent(event) {
            if (/^(mousedown|mousemove)$/.test(event.type) && TouchHandler.touches)
                return false;
            return true;
        },
        registerEvent(event) {
            const { type } = event;
            if (type === "touchstart")
                TouchHandler.touches += 1;
            else if (/^(touchend|touchcancel)$/.test(type)) {
                setTimeout(function () {
                    if (TouchHandler.touches)
                        TouchHandler.touches -= 1;
                }, 500);
            }
        }
    };
    function getWavesEffectElement(event) {
        if (TouchHandler.allowEvent(event) === false)
            return null;
        let element = null;
        let target = event.target;
        while (target.parentElement) {
            if (!(target instanceof SVGElement) && target.classList.contains("waves-effect")) {
                element = target;
                break;
            }
            target = target.parentElement;
        }
        return element;
    }
    function showEffect(event) {
        const element = getWavesEffectElement(event);
        if (element === null)
            return;
        if (element.getAttribute("disabled") || element.classList.contains("disabled"))
            return;
        TouchHandler.registerEvent(event);
        if (event.type === "touchstart" && Effect.delay) {
            let hidden = false;
            let timer = setTimeout(function () {
                timer = null;
                Effect.show(event, element);
            }, Effect.delay);
            const hideEffect = function (hideEvent) {
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
            const touchMove = function (moveEvent) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                hideEffect(moveEvent);
                removeListeners();
            };
            element.addEventListener("touchmove", touchMove, false);
            element.addEventListener("touchend", hideEffect, false);
            element.addEventListener("touchcancel", hideEffect, false);
            const removeListeners = function () {
                element.removeEventListener("touchmove", touchMove);
                element.removeEventListener("touchend", hideEffect);
                element.removeEventListener("touchcancel", hideEffect);
            };
        }
        else {
            Effect.show(event, element);
            if (isTouchAvailable) {
                element.addEventListener("touchend", function (event) {
                    Effect.hide(event, this);
                }, false);
                element.addEventListener("touchcancel", function (event) {
                    Effect.hide(event, this);
                }, false);
            }
            element.addEventListener("mouseup", function (event) {
                Effect.hide(event, this);
            }, false);
            element.addEventListener("mouseleave", function (event) {
                Effect.hide(event, this);
            }, false);
        }
    }
    const Waves = {
        init(options) {
            const body = document.body;
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
        attach(elements, classArr) {
            elements = getWavesElements(elements);
            let classes = "";
            if (toString.call(classArr) === "[object Array]")
                classes = classArr.join(" ");
            classes = classes ? ` ${classes}` : "";
            let element;
            let tagName;
            for (let i = 0, len = elements.length; i < len; i++) {
                element = elements[i];
                tagName = element.tagName.toLowerCase();
                if (["input", "img"].indexOf(tagName) !== -1) {
                    TagWrapper[tagName](element);
                    element = element.parentElement;
                }
                if (element.className.indexOf("waves-effect") === -1) {
                    element.className += `waves-effect ${classes}`;
                }
            }
        },
        ripple(elements, options) {
            elements = getWavesElements(elements);
            const { length } = elements;
            options = options || {};
            options.wait = options.wait || 0;
            options.position = options.position || null;
            options.ink = options.ink || false;
            if (length) {
                let element;
                let pos;
                let off;
                const center = { x: 0, y: 0 };
                let i = 0;
                const mousedown = {
                    type: "mousedown",
                    button: 1
                };
                const hideRipple = function (mouseup, element) {
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
                        const mouseup = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(hideRipple(mouseup, element), options.wait);
                    }
                }
            }
        },
        calm(elements) {
            elements = getWavesElements(elements);
            const mouseup = { type: "mouseup", button: 1 };
            for (let i = 0, len = elements.length; i < len; i++)
                Effect.hide(mouseup, elements[i]);
        }
    };
    jquery_1.default(function () {
        Waves.init();
    });
    return Waves;
}
exports.default = factory.call(typeof global === "object" ? global : this);
//# sourceMappingURL=Waves.js.map
;(function(){$.fn.realwidth=function(){return this.width()+parseInt(this.css("padding-left"))+parseInt(this.css("padding-right"))};$.fn.realheight=function(){return this.height()+parseInt(this.css("padding-top"))+parseInt(this.css("padding-bottom"))};
$.fn.retab=function(){var i=0;this.each(function(){$(this).attr("tabindex","0");i++})};$.nest=function(nest){var n=nest.split(" ");var s=$(n[0]);n.shift();$.each(n,function(i){s=s.children(n[i])});return s}}());
(function(window){var factory=function(){'use strict';var Waves=Waves||{};var $$=document.querySelectorAll.bind(document);var toString=Object.prototype.toString;var isTouchAvailable='ontouchstart' in window;function isWindow(obj){return obj!==null&&obj===obj.window} function getWindow(elem){return isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView} function isObject(value){var type=typeof value;return type==='function'||type==='object'&&!!value} function isDOMNode(obj){return isObject(obj)&&obj.nodeType>0} function getWavesElements(nodes){var stringRepr=toString.call(nodes);if(stringRepr==='[object String]'){return $$(nodes)}else if(isObject(nodes)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr)&&nodes.hasOwnProperty('length')){return nodes}else if(isDOMNode(nodes)){return[nodes]} return[]} function offset(elem){var docElem,win,box={top:0,left:0},doc=elem&&elem.ownerDocument;docElem=doc.documentElement;if(typeof elem.getBoundingClientRect!==typeof undefined){box=elem.getBoundingClientRect()} win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft}}function convertStyle(styleObj){var style='';for(var prop in styleObj){if(styleObj.hasOwnProperty(prop)){style+=(prop+':'+styleObj[prop]+';')}} return style} var Effect={duration:$(this).width*5,delay:2000,show:function(e,element,velocity){if(e.button===2){return!1} element=element||this;var ripple=document.createElement('div');ripple.className='waves-ripple waves-rippling';element.appendChild(ripple);var pos=offset(element);var relativeY=0;var relativeX=0;if('touches' in e&&e.touches.length){relativeY=(e.touches[0].pageY-pos.top);relativeX=(e.touches[0].pageX-pos.left)}else{relativeY=(e.pageY-pos.top);relativeX=(e.pageX-pos.left)} relativeX=relativeX>=0?relativeX:0;relativeY=relativeY>=0?relativeY:0;var wavesfn=function(a,e){var a=$(a),d=52,dj=0.118,dx=1.019,dy=0.350,f=1,h=a.realheight(),w=a.realwidth(),x=relativeX,y=relativeY;if(x>w/2){x=w-x} if(y>h/2){y=h-y} x=w-x;y=h/2-y;f=(x*dx+y*dy+((h+w)/2)*dj)/d;if(h==w){var q=w-(h-(w-x)-(h-y)); return(w-Math.abs(q-w))/50} if(a.hasClass("waves-ink")){return 0.475} if(a.hasClass("waves-touch")){a.removeClass("waves-touch");return f/1.33} return f};var scale='scale('+wavesfn(element,e)+')';var translate='translate(0,0)';if(velocity){translate='translate('+(velocity.x)+'px, '+(velocity.y)+'px)'} ripple.setAttribute('data-hold',Date.now());ripple.setAttribute('data-x',relativeX);ripple.setAttribute('data-y',relativeY);ripple.setAttribute('data-scale',scale);ripple.setAttribute('data-translate',translate);var rippleStyle={top:relativeY+'px',left:relativeX+'px'};ripple.classList.add('waves-notransition');ripple.setAttribute('style',convertStyle(rippleStyle));ripple.classList.remove('waves-notransition');rippleStyle['-webkit-transform']=scale+' '+translate;rippleStyle['-moz-transform']=scale+' '+translate;rippleStyle['-ms-transform']=scale+' '+translate;rippleStyle['-o-transform']=scale+' '+translate;rippleStyle.transform=scale+' '+translate;var duration=e.type==='mousemove'?750:Effect.duration;rippleStyle['-webkit-transition-duration']=duration+'ms';rippleStyle['-moz-transition-duration']=duration+'ms';rippleStyle['-o-transition-duration']=duration+'ms';rippleStyle['transition-duration']=duration+'ms';ripple.setAttribute('style',convertStyle(rippleStyle))},hide:function(e,element){element=element||this;var ripples=element.getElementsByClassName('waves-rippling');for(var i=0,len=ripples.length;i<len;i++){removeRipple(e,element,ripples[i])} if(isTouchAvailable){element.removeEventListener('touchend',Effect.hide);element.removeEventListener('touchcancel',Effect.hide)} element.removeEventListener('mouseup',Effect.hide);element.removeEventListener('mouseleave',Effect.hide)}};var TagWrapper={input:function(element){var parent=element.parentNode;if(parent.tagName.toLowerCase()==='i'&&parent.classList.contains('waves-effect')){return} var wrapper=document.createElement('i');wrapper.className=element.className+' waves-input-wrapper';element.className='waves-button-input';parent.replaceChild(wrapper,element);wrapper.appendChild(element);var elementStyle=window.getComputedStyle(element,null);var color=elementStyle.color;var backgroundColor=elementStyle.backgroundColor;wrapper.setAttribute('style','color:'+color+';background:'+backgroundColor);element.setAttribute('style','background-color:rgba(0,0,0,0);')},img:function(element){var parent=element.parentNode;if(parent.tagName.toLowerCase()==='i'&&parent.classList.contains('waves-effect')){return} var wrapper=document.createElement('i');parent.replaceChild(wrapper,element);wrapper.appendChild(element)}};function removeRipple(e,el,ripple){if(!ripple){return} ripple.classList.remove('waves-rippling');var relativeX=ripple.getAttribute('data-x');var relativeY=ripple.getAttribute('data-y');var scale=ripple.getAttribute('data-scale');var translate=ripple.getAttribute('data-translate');var diff=Date.now()-Number(ripple.getAttribute('data-hold'));var delay=0;if(e.type==='mousemove'){delay=150}var duration=e.type==='mousemove'?750:1250;setTimeout(function(){var style={top:relativeY+'px',left:relativeX+'px',opacity:'0','-webkit-transition-duration':duration+'ms','-moz-transition-duration':duration+'ms','-o-transition-duration':duration+'ms','transition-duration':duration+'ms','-webkit-transform':scale+' '+translate,'-moz-transform':scale+' '+translate,'-ms-transform':scale+' '+translate,'-o-transform':scale+' '+translate,'transform':scale+' '+translate};ripple.setAttribute('style',convertStyle(style));setTimeout(function(){try{el.removeChild(ripple)}catch(e){return!1}},duration)},delay)} var TouchHandler={touches:0,allowEvent:function(e){var allow=!0;if(/^(mousedown|mousemove)$/.test(e.type)&&TouchHandler.touches){allow=!1} return allow},registerEvent:function(e){var eType=e.type;if(eType==='touchstart'){TouchHandler.touches+=1}else if(/^(touchend|touchcancel)$/.test(eType)){setTimeout(function(){if(TouchHandler.touches){TouchHandler.touches-=1}},500)}}};function getWavesEffectElement(e){if(TouchHandler.allowEvent(e)===!1){return null} var element=null;var target=e.target||e.srcElement;while(target.parentElement){if((!(target instanceof SVGElement))&&target.classList.contains('waves-effect')){element=target;break} target=target.parentElement} return element} function showEffect(e){var element=getWavesEffectElement(e);if(element!==null){if(element.disabled||element.getAttribute('disabled')||element.classList.contains('disabled')){return} TouchHandler.registerEvent(e);if(e.type==='touchstart'&&Effect.delay){var hidden=!1;var timer=setTimeout(function(){timer=null;Effect.show(e,element)},Effect.delay);var hideEffect=function(hideEvent){if(timer){clearTimeout(timer);timer=null;Effect.show(e,element)} if(!hidden){hidden=!0;Effect.hide(hideEvent,element)} removeListeners()};var touchMove=function(moveEvent){if(timer){clearTimeout(timer);timer=null} hideEffect(moveEvent);removeListeners()};element.addEventListener('touchmove',touchMove,!1);element.addEventListener('touchend',hideEffect,!1);element.addEventListener('touchcancel',hideEffect,!1);var removeListeners=function(){element.removeEventListener('touchmove',touchMove);element.removeEventListener('touchend',hideEffect);element.removeEventListener('touchcancel',hideEffect)}}else{Effect.show(e,element);if(isTouchAvailable){element.addEventListener('touchend',Effect.hide,!1);element.addEventListener('touchcancel',Effect.hide,!1)} element.addEventListener('mouseup',Effect.hide,!1);element.addEventListener('mouseleave',Effect.hide,!1)}}}Waves.init=function(options){var body=document.body;options=options||{};if('duration' in options){Effect.duration=options.duration} if('delay' in options){Effect.delay=options.delay} if(isTouchAvailable){body.addEventListener('touchstart',showEffect,!1);body.addEventListener('touchcancel',TouchHandler.registerEvent,!1);body.addEventListener('touchend',TouchHandler.registerEvent,!1)} body.addEventListener('mousedown',showEffect,!1)};Waves.attach=function(elements,classes){elements=getWavesElements(elements);if(toString.call(classes)==='[object Array]'){classes=classes.join(' ')};classes=classes?' '+classes:'';var element,tagName;for(var i=0,len=elements.length;i<len;i++){element=elements[i];tagName=element.tagName.toLowerCase();if(['input','img'].indexOf(tagName)!==-1){TagWrapper[tagName](element);element=element.parentElement} if(element.className.indexOf('waves-effect')===-1){element.className+=' waves-effect'+classes}}};Waves.ripple=function(elements,options){elements=getWavesElements(elements);var elementsLen=elements.length;options=options||{};options.wait=options.wait||0;options.position=options.position||null;if(elementsLen){var element,pos,off,centre={},i=0;var mousedown={type:'mousedown',button:1};var hideRipple=function(mouseup,element){return function(){Effect.hide(mouseup,element)}};for(;i<elementsLen;i++){element=elements[i];pos=options.position||{x:element.clientWidth/2,y:element.clientHeight/2};off=offset(element);centre.x=off.left+pos.x;centre.y=off.top+pos.y;mousedown.pageX=centre.x;mousedown.pageY=centre.y;Effect.show(mousedown,element);if(options.wait>=0&&options.wait!==null){var mouseup={type:'mouseup',button:1};setTimeout(hideRipple(mouseup,element),options.wait)}}}};Waves.calm=function(elements){elements=getWavesElements(elements);var mouseup={type:'mouseup',button:1};for(var i=0,len=elements.length;i<len;i++){Effect.hide(mouseup,elements[i])}};Waves.displayEffect=function(options){Waves.init(options)};return Waves};$(()=>{$(".waves-effect").on("touchstart",function(e){var x=e.targetTouches[0].pageX-$(this).offset().left;var y=e.targetTouches[0].pageY-$(this).offset().top;Waves.ripple(this,{wait:1e10,position:$(this).hasClass("waves-ink")?null:{x:x,y:y}})}).on("touchend",function(e){Waves.calm(this)})});if(typeof define==='function'&&define.amd){define([],function(){window.Waves=factory.call(window);return window.Waves})}else if(typeof exports==='object'){module.exports=factory.call(window)}else{window.Waves=factory.call(window)}})(window)

var Photon = {
    autoready: true,
    API: "https://photoncss.herokuapp.com/service/api/pageinfo",
    theme: {
        colors: {
            "red": {
                "50": "#ffebee",
                "100": "#ffcdd2",
                "200": "#ef9a9a",
                "300": "#e57373",
                "400": "#ef5350",
                "500": "#f44336",
                "600": "#e53935",
                "700": "#d32f2f",
                "800": "#c62828",
                "900": "#b71c1c",
                "a100": "#ff8a80",
                "a200": "#ff5252",
                "a400": "#ff1744",
                "a700": "#d50000"
            },
            "pink": {
                "50": "#fce4ec",
                "100": "#f8bbd0",
                "200": "#f48fb1",
                "300": "#f06292",
                "400": "#ec407a",
                "500": "#e91e63",
                "600": "#d81b60",
                "700": "#c2185b",
                "800": "#ad1457",
                "900": "#880e4f",
                "a100": "#ff80ab",
                "a200": "#ff4081",
                "a400": "#f50057",
                "a700": "#c51162"
            },
            "purple": {
                "50": "#f3e5f5",
                "100": "#e1bee7",
                "200": "#ce93d8",
                "300": "#ba68c8",
                "400": "#ab47bc",
                "500": "#9c27b0",
                "600": "#8e24aa",
                "700": "#7b1fa2",
                "800": "#6a1b9a",
                "900": "#4a148c",
                "a100": "#ea80fc",
                "a200": "#e040fb",
                "a400": "#d500f9",
                "a700": "#aa00ff"
            },
            "deeppurple": {
                "50": "#ede7f6",
                "100": "#d1c4e9",
                "200": "#b39ddb",
                "300": "#9575cd",
                "400": "#7e57c2",
                "500": "#673ab7",
                "600": "#5e35b1",
                "700": "#512da8",
                "800": "#4527a0",
                "900": "#311b92",
                "a100": "#b388ff",
                "a200": "#7c4dff",
                "a400": "#651fff",
                "a700": "#6200ea"
            },
            "indigo": {
                "50": "#e8eaf6",
                "100": "#c5cae9",
                "200": "#9fa8da",
                "300": "#7986cb",
                "400": "#5c6bc0",
                "500": "#3f51b5",
                "600": "#3949ab",
                "700": "#303f9f",
                "800": "#283593",
                "900": "#1a237e",
                "a100": "#8c9eff",
                "a200": "#536dfe",
                "a400": "#3d5afe",
                "a700": "#304ffe"
            },
            "blue": {
                "50": "#e3f2fd",
                "100": "#bbdefb",
                "200": "#90caf9",
                "300": "#64b5f6",
                "400": "#42a5f5",
                "500": "#2196f3",
                "600": "#1e88e5",
                "700": "#1976d2",
                "800": "#1565c0",
                "900": "#0d47a1",
                "a100": "#82b1ff",
                "a200": "#448aff",
                "a400": "#2979ff",
                "a700": "#2962ff"
            },
            "lightblue": {
                "50": "#e1f5fe",
                "100": "#b3e5fc",
                "200": "#81d4fa",
                "300": "#4fc3f7",
                "400": "#29b6f6",
                "500": "#03a9f4",
                "600": "#039be5",
                "700": "#0288d1",
                "800": "#0277bd",
                "900": "#01579b",
                "a100": "#80d8ff",
                "a200": "#40c4ff",
                "a400": "#00b0ff",
                "a700": "#0091ea"
            },
            "cyan": {
                "50": "#e0f7fa",
                "100": "#b2ebf2",
                "200": "#80deea",
                "300": "#4dd0e1",
                "400": "#26c6da",
                "500": "#00bcd4",
                "600": "#00acc1",
                "700": "#0097a7",
                "800": "#00838f",
                "900": "#006064",
                "a100": "#84ffff",
                "a200": "#18ffff",
                "a400": "#00e5ff",
                "a700": "#00b8d4"
            },
            "teal": {
                "50": "#e0f2f1",
                "100": "#b2dfdb",
                "200": "#80cbc4",
                "300": "#4db6ac",
                "400": "#26a69a",
                "500": "#009688",
                "600": "#00897b",
                "700": "#00796b",
                "800": "#00695c",
                "900": "#004d40",
                "a100": "#a7ffeb",
                "a200": "#64ffda",
                "a400": "#1de9b6",
                "a700": "#00bfa5"
            },
            "green": {
                "50": "#e8f5e9",
                "100": "#c8e6c9",
                "200": "#a5d6a7",
                "300": "#81c784",
                "400": "#66bb6a",
                "500": "#4caf50",
                "600": "#43a047",
                "700": "#388e3c",
                "800": "#2e7d32",
                "900": "#1b5e20",
                "a100": "#b9f6ca",
                "a200": "#69f0ae",
                "a400": "#00e676",
                "a700": "#00c853"
            },
            "lightgreen": {
                "50": "#f1f8e9",
                "100": "#dcedc8",
                "200": "#c5e1a5",
                "300": "#aed581",
                "400": "#9ccc65",
                "500": "#8bc34a",
                "600": "#7cb342",
                "700": "#689f38",
                "800": "#558b2f",
                "900": "#33691e",
                "a100": "#ccff90",
                "a200": "#b2ff59",
                "a400": "#76ff03",
                "a700": "#64dd17"
            },
            "lime": {
                "50": "#f9fbe7",
                "100": "#f0f4c3",
                "200": "#e6ee9c",
                "300": "#dce775",
                "400": "#d4e157",
                "500": "#cddc39",
                "600": "#c0ca33",
                "700": "#afb42b",
                "800": "#9e9d24",
                "900": "#827717",
                "a100": "#f4ff81",
                "a200": "#eeff41",
                "a400": "#c6ff00",
                "a700": "#aeea00"
            },
            "yellow": {
                "50": "#fffde7",
                "100": "#fff9c4",
                "200": "#fff59d",
                "300": "#fff176",
                "400": "#ffee58",
                "500": "#ffeb3b",
                "600": "#fdd835",
                "700": "#fbc02d",
                "800": "#f9a825",
                "900": "#f57f17",
                "a100": "#ffff8d",
                "a200": "#ffff00",
                "a400": "#ffea00",
                "a700": "#ffd600"
            },
            "amber": {
                "50": "#fff8e1",
                "100": "#ffecb3",
                "200": "#ffe082",
                "300": "#ffd54f",
                "400": "#ffca28",
                "500": "#ffc107",
                "600": "#ffb300",
                "700": "#ffa000",
                "800": "#ff8f00",
                "900": "#ff6f00",
                "a100": "#ffe57f",
                "a200": "#ffd740",
                "a400": "#ffc400",
                "a700": "#ffab00"
            },
            "orange": {
                "50": "#fff3e0",
                "100": "#ffe0b2",
                "200": "#ffcc80",
                "300": "#ffb74d",
                "400": "#ffa726",
                "500": "#ff9800",
                "600": "#fb8c00",
                "700": "#f57c00",
                "800": "#ef6c00",
                "900": "#e65100",
                "a100": "#ffd180",
                "a200": "#ffab40",
                "a400": "#ff9100",
                "a700": "#ff6d00"
            },
            "deeporange": {
                "50": "#fbe9e7",
                "100": "#ffccbc",
                "200": "#ffab91",
                "300": "#ff8a65",
                "400": "#ff7043",
                "500": "#ff5722",
                "600": "#f4511e",
                "700": "#e64a19",
                "800": "#d84315",
                "900": "#bf360c",
                "a100": "#ff9e80",
                "a200": "#ff6e40",
                "a400": "#ff3d00",
                "a700": "#dd2c00"
            },
            "brown": {
                "50": "#efebe9",
                "100": "#d7ccc8",
                "200": "#bcaaa4",
                "300": "#a1887f",
                "400": "#8d6e63",
                "500": "#795548",
                "600": "#6d4c41",
                "700": "#5d4037",
                "800": "#4e342e",
                "900": "#3e2723"
            },
            "grey": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#eeeeee",
                "300": "#e0e0e0",
                "400": "#bdbdbd",
                "500": "#9e9e9e",
                "600": "#757575",
                "700": "#616161",
                "800": "#424242",
                "900": "#212121"
            },
            "bluegrey": {
                "50": "#eceff1",
                "100": "#cfd8dc",
                "200": "#b0bec5",
                "300": "#90a4ae",
                "400": "#78909c",
                "500": "#607d8b",
                "600": "#546e7a",
                "700": "#455a64",
                "800": "#37474f",
                "900": "#263238"
            }
        },
        setBarColor: function(c) {
            $("head meta[name='theme-color']").remove();
            $("head").append("<meta name=\"theme-color\" content=\"" + c + "\"/>")
        }
    },
    events: {},
    guid: function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    speed: 150,
    updateTextFields: function() {
        $(".input-field").not(".slider-field").each(function() {
            if ($(this).children("input").val().length > 0) {
                $(this).children("input").addClass("containscontent")
            }
        });
    }
}

Photon.disableArrowKeyScrolling = false;
window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        if (Photon.disableArrowKeyScrolling) {
            e.preventDefault();
        }
    }
}, false);

$.fn.textWidth = function(){
var html_org = $(this).html();
var html_calc = '<span>' + html_org + '</span>';
$(this).html(html_calc);
var width = $(this).find('span:first').width();
$(this).html(html_org);
return width;
};

;(function() {
    $.fn.autolink = function() {
        this.each(function() {
            if (!$(this).hasClass("photon-init")) {
                var href = $(this).attr("href");
                const content = $(this).text();
                const link = $(this);

                link.html(`<div class="progress"><div class="indeterminate"></div></div>`);
                link.addClass("photon-init");

                if (href[0] == "/") {
                    href = window.location.protocol + "//" + window.location.hostname + href;
                }

                $.ajax({
                    url: Photon.API,
                    type: "POST",
                    data: {
                        "url": href
                    },
                    success: function(data) {
                        if (data.error) {
                            link.html(`<div class="progress offl"><div class="offline"></div></div>`);
                            return;
                        }

                        link.html(`<div class="padding-layer"><div class="external-img"><img src="${data.icon}" alt=""/></div><div class="title">${data.title}</div><p>${content}</p><i class="material-icons waves-effect waves-ink">launch</i><div class="ref">${link.data("ref") || ""}</div></div>`);
                        link.click(function(e) {
                            if ($(e.target).hasClass("material-icons")) {
                                e.preventDefault();
                                window.open(href);
                            }
                        });
                        link.children(".padding-layer").children(".material-icons").tooltip({
                            "tooltip": "Open in new window",
                            "position": "bottom"
                        });
                        Photon.Waves.reload();
                    },
                    error: function() {
                        link.html(`<div class="progress offl"><div class="offline"></div></div>`);
                    }
                });
            }
        })
    };
    $.fn.collapsible = function(options, methodParam) {
        var defaults = {
            accordion: undefined,
            onOpen: undefined,
            onClose: undefined
        };

        var methodName = options;
        options = $.extend(defaults, options);

        return this.each(function() {

            var $this = $(this);
            var $panel_headers = $(this).find('> li > .collapsible-header');
            var collapsible_type = $this.data("collapsible");

            function accordionOpen(object) {
                $panel_headers = $this.find('> li > .collapsible-header');

                if (object.hasClass('active')) {
                    object.parent().addClass('active');
                } else {
                    object.parent().removeClass('active');
                }

                if (object.parent().hasClass('active')) {
                    object.siblings('.collapsible-body').stop(true, false).slideDown({
                        duration: Photon.speed,
                        queue: false,
                        complete: function() {
                            $(this).css('height', '');
                        }
                    });
                } else {
                    object.siblings('.collapsible-body').stop(true, false).slideUp({
                        duration: Photon.speed,
                        queue: false,
                        complete: function() {
                            $(this).css('height', '');
                        }
                    });
                }

                $panel_headers.not(object).removeClass('active').parent().removeClass('active');

                $panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).each(function() {

                    if ($(this).is(':visible')) {
                        $(this).slideUp({
                            duration: Photon.speed,
                            queue: false,
                            complete: function() {
                                $(this).css('height', '');
                                execCallbacks($(this).siblings('.collapsible-header'));
                            }
                        });
                    }
                });
            }

            function expandableOpen(object) {
                if (object.hasClass('active')) {
                    object.parent().addClass('active');
                } else {
                    object.parent().removeClass('active');
                }

                if (object.parent().hasClass('active')) {
                    object.siblings('.collapsible-body').stop(true, false).slideDown({
                        duration: Photon.speed,
                        queue: false,
                        complete: function() {
                            $(this).css('height', '');
                        }
                    });
                } else {
                    object.siblings('.collapsible-body').stop(true, false).slideUp({
                        duration: Photon.speed,
                        queue: false,
                        complete: function() {
                            $(this).css('height', '');
                        }
                    });
                }
            }

            function collapsibleOpen(object, noToggle) {
                if (!noToggle) {
                    object.toggleClass('active');
                }

                if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
                    accordionOpen(object);
                } else {
                    expandableOpen(object);
                }

                execCallbacks(object);
            }

            function execCallbacks(object) {
                if (object.hasClass('active')) {
                    if (typeof(options.onOpen) === "function") {
                        options.onOpen.call(this, object.parent());
                    }
                } else {
                    if (typeof(options.onClose) === "function") {
                        options.onClose.call(this, object.parent());
                    }
                }
            }

            function isChildrenOfPanelHeader(object) {
                var panelHeader = getPanelHeader(object);
                return panelHeader.length > 0;
            }

            function getPanelHeader(object) {
                return object.closest('li > .collapsible-header');
            }

            function removeEventHandlers() {
                $this.off('click.collapse', '> li > .collapsible-header');
            }

            if (methodName === 'destroy') {
                removeEventHandlers();
                return;
            } else if (methodParam >= 0 &&
                methodParam < $panel_headers.length) {
                var $curr_header = $panel_headers.eq(methodParam);
                if ($curr_header.length && (methodName === 'open' || (methodName === 'close' && $curr_header.hasClass('active')))) {
                    collapsibleOpen($curr_header);
                }
                return;
            }

            removeEventHandlers();

            $this.on('click.collapse', '> li > .collapsible-header', function(e) {
                var element = $(e.target);

                if (isChildrenOfPanelHeader(element)) {
                    element = getPanelHeader(element);
                }

                collapsibleOpen(element);
            });

            if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
                collapsibleOpen($panel_headers.filter('.active').first(), true);
            } else {
                $panel_headers.filter('.active').each(function() {
                    collapsibleOpen($(this), true);
                });
            }



        });
    };
    $.fn.scrollnav = function() {
        this.each(function() {
            $(this).children("li").children("a[go]").click(function() {
                try {
                    var stop = $($(this).attr("go"));
                    $("html").animate({
                        scrollTop: stop.offset().top - stop.height() - 64
                    })
                } catch (w) {
                    void w;
                }
            })
            $(this).children("li").children("a[href]").click(function() {
                window.location.href = $(this).attr("href")
            })
        });
        return this;
    }
    $.fn.select = function() {
        this.each(function() {

            var input = $(this).children("input");
            var acopt = $(this).children(".options");

            var selopt = -1;

            input.attr("readonly", "true")

            $(this).children("label,input").mouseup(function(e) {
                acopt.addClass("active");
                $(this).keyup();
                e.stopPropagation();
            })
            input.focus(function(e) {
				$(this).siblings("label").click()
                Photon.disableArrowKeyScrolling = true;
                $(this).keyup();
            }).blur(function() {
                Photon.disableArrowKeyScrolling = false;
            }).click(function(e) {
                e.stopPropagation();
            }).keydown(function(e) {
                if (e.which == 38) {
                    selopt--;
                    if (selopt < 0) selopt = 0;

                    var opt = $(acopt.children(".option")[selopt]);
                    opt.addClass("active").siblings().removeClass("active");
                    input.val(opt.text()).addClass("containscontent");
                } else if (e.which == 40) {
                    selopt++;
                    if (selopt >= acopt.children(".option").length) selopt = acopt.children(".option").length - 1;

                    var opt = $(acopt.children(".option")[selopt]);
                    opt.addClass("active").siblings().removeClass("active");
                    input.val(opt.text()).addClass("containscontent");
                };

                var p = acopt.children(".option.active").index() * 43 - 64;
                acopt.animate({
                    scrollTop: p
                }, {
                    duration: 175,
                    queue: false
                })

            })

            $("body").click(function() {
                acopt.removeClass("active");
            });

            acopt.children(".option").click(function(e) {

                selopt = $(this).index();

                var opt = $(acopt.children(".option")[selopt]);
                opt.addClass("active").siblings().removeClass("active");
                input.val(opt.text()).addClass("containscontent");
            })

            var preset = false;
            acopt.children(".option").each(function() {
                if ($(this).hasClass("active")) {
                    preset = true;
                    $(this).click();
                    var p = acopt.children(".option.active").index() * 44 - 64;
                    acopt.animate({
                        scrollTop: p
                    }, {
                        duration: 0,
                        queue: false
                    })
                }
            })

            if (!preset) {
                acopt.children(".option").first().click()
            }

        });
        return this;
    }
    $.fn.sidenav = function(a) {
        const i = this;
        const guid = Photon.guid();

        i.attr("data-sn", guid)

        var touch = 0;
        var og = 0;

        $(".sidenav--draghandle").remove();
        $("body").append(`<div class="sidenav--draghandle"></div>`)

        if (a) {
            switch (a.toLowerCase()) {
                case "open":
                    i.addClass("active").animate({
                        left: 300
                    }, Photon.speed, "swing");
                    $(".sidenav--draghandle").css({
                        left: 300,
                        width: "100%"
                    });
                    break;
                case "close":
                    i.animate({
                        left: 0
                    }, Photon.speed, "swing", function() {
                        $(this).removeClass("active")
                    });
                    $(".sidenav--draghandle").css({
                        left: 0,
                        width: "32px"
                    });
                    break;
            }
        }

        $(".sidenav--draghandle").on("touchstart", function(e) {
            og = e.changedTouches[0].pageX;
        }).on("touchmove", function(e) {
            e.preventDefault();
            touch = e.changedTouches[0].pageX;
            touch = touch > 300 ? 300 : touch;
            touch = touch < 0 ? 0 : touch;

            $(this).css({
                "left": touch
            })

            i.addClass("active").css({
                "left": touch
            })
        }).on("touchend", function() {
            i.animate({
                "left": touch > 150 ? 300 : 0
            }, Photon.speed, "swing");
            $(this).css({
                "left": touch > 150 ? 300 : 0,
                "width": touch > 150 ? "100%" : 10
            });
            if (touch < 150) {
                i.removeClass("active")
            }
        }).click(function() {
            i.animate({
                left: 0
            }, Photon.speed, "swing", function() {
                $(this).removeClass("active")
            });
            $(this).css({
                "left": 0,
                "width": 10
            });
        })

        return this;
    }
    $.fn.slider = function(s = "", g) {
        this.each(function() {

            var thumb = $(this).children(".thumb");
            var ripple = $(this).children(".thumb").children(".ripple");
            var track = $(this).children(".determinate");
            var slider = $(this);

            var value = parseInt($(this).attr("value") || "50");

            thumb.css("left", value + "%");
            track.width(value + "%");

            thumb.off("mousedown touchstart").on("mousedown touchstart", startDrag);

            function startDrag() {
                Waves.ripple(ripple, {
                    wait: 1e10
                });
                $("body").on("mousemove touchmove", function(e) {

                    e.preventDefault();

                    var x = (e.pageX || e.changedTouches[0].pageX);
                    var o = (x - slider.offset().left - 3) / slider.width() * 100;
                    o = o < 0 ? 0 : o
                    o = o > 100 ? 100 : o

                    thumb.css("left", o + "%");
                    track.width(o + "%");

                    slider.attr("value", o);

                });
            }

            slider.click(function(e) {
                var x = e.pageX;
                var o = (x - slider.offset().left - 3) / slider.width() * 100;
                o = o < 0 ? 0 : o
                o = o > 100 ? 100 : o

                thumb.animate({
                    "left": o + "%"
                }, Photon.speed, "swing");
                track.animate({
                    "width": o + "%"
                }, Photon.speed, "swing");

                slider.attr("value", o);

            })

            $("body").on("mouseup touchcancel touchend", function() {
                $(this).off("mousemove touchmove");
                Waves.calm(ripple);
            });

        });

        if (s.toLowerCase() == "value") {
            return parseInt(this.attr("value") || "50");
        } else if (s.toLowerCase() == "set") {

            var o = g;

            var thumb = this.children(".thumb");
            var track = this.children(".determinate");
            var slider = this;

            thumb.animate({
                "left": o + "%"
            }, Photon.speed, "swing");
            track.animate({
                "width": o + "%"
            }, Photon.speed, "swing");

            slider.attr("value", o);
        }

        return this;
    }
    $.fn.tabs = function(methodOrOptions) {

		var methods = {
            init: function(options) {
                var defaults = {
                    onShow: null
                };
                options = $.extend(defaults, options);
                var namespace = function(obj) {
                    var tagStr = obj.prop('tagName') || '';
                    var idStr = obj.attr('id') || '';
                    var classStr = obj.attr('class') || '';
                    return (tagStr + idStr + classStr).replace(/\s/g, '');
                }($(this));

                return this.each(function(i) {

                    var uniqueNamespace = namespace + i;

                    // For each set of tabs, we want to keep track of
                    // which tab is active and its associated content
                    var $this = $(this),
                        window_width = $(window).width();

                    var $active,
                        $content,
                        $links = $this.find('li.tab a'),
                        $tabs_width = $this.width(),
                        $tabs_content = $(),
                        $tabs_wrapper,
                        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
                        $indicator,
                        index = 0,
                        prev_index = 0,
                        clicked = false,
                        clickedTimeout,
                        transition = Photon.speed;

                    // Finds right attribute for indicator based on active tab.
                    // el: jQuery Object
                    var calcRightPos = function(el) {
						try {
                        	return Math.ceil($tabs_width - el.position().left - el[0].getBoundingClientRect().width - $this.scrollLeft()) + ($this.hasClass("tabs-new") ? el.realwidth()/2 - el.textWidth()/2:0);
						} catch(e) {
							void e;
						}
                    };

                    // Finds left attribute for indicator based on active tab.
                    // el: jQuery Object
                    var calcLeftPos = function(el) {
						try {
                       		return Math.floor(el.position().left + $this.scrollLeft()) + ($this.hasClass("tabs-new") ? el.realwidth()/2 - el.textWidth()/2:0);
						} catch(e) {
							void e;
						}
                    };

                    // Animates Indicator to active tab.
                    // prev_index: Number
                    var animateIndicator = function(prev_index) {
                        if (index - prev_index >= 0) {
                            $indicator.css({
                                "right": calcRightPos($active)
                            });
							setTimeout(() => $indicator.css({
                                "left": calcLeftPos($active)
                            }),$this.hasClass("tabs-new") ? 130:60);
                        } else {
                            $indicator.css({
                                "left": calcLeftPos($active)
                            });
							setTimeout(() => $indicator.css({
                                "right": calcRightPos($active)
                            }),$this.hasClass("tabs-new") ? 130:60);
                        }
                    };

                    // If the location.hash matches one of the links, use that as the active tab.
                    $active = $($links.filter('[href="' + location.hash + '"]'));

                    // If no match is found, use the first link or any with class 'active' as the initial active tab.
                    if ($active.length === 0) {
                        $active = $(this).find('li.tab a.active').first();
                    }
                    if ($active.length === 0) {
                        $active = $(this).find('li.tab a').first();
                    }

                    $active.addClass('active');
                    index = $links.index($active);
                    if (index < 0) {
                        index = 0;
                    }

                    if ($active[0] !== undefined) {
                        $content = $($active[0].hash);
                        $content.addClass('active');
                    }

                    // append indicator then set indicator width to tab width
                    if (!$this.find('.indicator').length) {
                        $this.append('<li class="indicator"></li>');
                    }
                    $indicator = $this.find('.indicator');

                    // we make sure that the indicator is at the end of the tabs
                    $this.append($indicator);

                    if ($this.is(":visible")) {
                        // $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
                        // $indicator.css({"left": index * $tab_width});
                        setTimeout(function() {
                            $indicator.css({
                                "right": calcRightPos($active)
                            });
                            $indicator.css({
                                "left": calcLeftPos($active)
                            });
                        }, 0);
                    }
                    $(window).off('resize.tabs-' + uniqueNamespace).on('resize.tabs-' + uniqueNamespace, function() {
                        $tabs_width = $this.width();
                        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
                        if (index < 0) {
                            index = 0;
                        }
                        if ($tab_width !== 0 && $tabs_width !== 0) {
                            $indicator.css({
                                "right": calcRightPos($active)
                            });
                            $indicator.css({
                                "left": calcLeftPos($active)
                            });
                        }
                    });

                    $this.off('click.tabs').on('click.tabs', 'a', function(e) {
                        if ($(this).parent().hasClass('disabled')) {
                            e.preventDefault();
                            return;
                        }

                        // Act as regular link if target attribute is specified.
                        if (!!$(this).attr("target")) {
                            return;
                        }

                        clicked = true;
                        $tabs_width = $this.width();
                        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

                        // Make the old tab inactive.
                        $active.removeClass('active');
                        var $oldContent = $content;

                        // Update the variables with the new link and content
                        $active = $(this);
                        $content = $(function(hash) {
                            return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
                        }(this.hash));
                        $links = $this.find('li.tab a');
                        var activeRect = $active.position();

                        // Make the tab active.
                        $active.addClass('active');
                        prev_index = index;
                        index = $links.index($(this));
                        if (index < 0) {
                            index = 0;
                        }
                        // Change url to current tab
                        // window.location.hash = $active.attr('href');

                        // Swap content
                        if (options.swipeable) {
                            if ($tabs_content.length) {
                                $tabs_content.carousel('set', index, function() {
                                    if (typeof options.onShow === "function") {
                                        options.onShow.call($this[0], $content);
                                    }
                                });
                            }
                        } else {
                            if ($content !== undefined) {
                                $content.show();
                                $content.addClass('active');
                                if (typeof options.onShow === "function") {
                                    options.onShow.call(this, $content);
                                }
                            }

                            if ($oldContent !== undefined && !$oldContent.is($content)) {
                                $oldContent.hide();
                                $oldContent.removeClass('active');
                            }
                        }

                        // Reset clicked state
                        clickedTimeout = setTimeout(function() {
                            clicked = false;
                        }, transition);

                        // Update indicator
                        animateIndicator(prev_index);

                        // Prevent the anchor's default click action
                        e.preventDefault();
                    });
                });

            },
            select_tab: function(id) {
                this.find('a[href="#' + id + '"]').trigger('click');
            }
        };

        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tabs');
        }


		/*return this.each(function(){
			$(this).children(".indicator").length == 0 && $(this).append(`<div class="indicator"></div>`);

			$(this).children(".tab").children("a").click(function(){
				console.log($(this))
			})

			($(this).children(".tab").children("a.active") || $(this).children(".tab").first().children("a")).click();
		})*/

    };
    $.fn.tooltip = function(options) {

		options = $.extend({
			delay: 0,
			position: "bottom",
			tooltip: "",
			classes: []
		}, options);

        return this.each(function(){

			const descriptor = $(this);

			options["delay"] = parseInt($(this).data("delay")) || options["delay"];
			options["position"] = $(this).data("position") || options["position"];
			options["tooltip"] = $(this).data("tooltip") || options["tooltip"];
			options["classes"] = ($(this).data("tooltipclass") || "").split(" ") || options["classes"];

			const guid = Photon.guid();
			if(options.position.toLowerCase() == "bottom") {
				let center = descriptor.offset().left
				pos = [descriptor.offset().top,center];
			}

			$(this).mouseenter(function(){
				setTimeout(() => $("#" + guid).addClass("active"),options.delay);
			}).mouseleave(function(){
				setTimeout(() => $("#" + guid).removeClass("active"),options.delay);
			});

			$("body").append(`<div class="material-tooltip" id="${guid}">${options.tooltip}</div>`);
			const tooltip = $("#" + guid);

			let proX = pos => {
				if(pos < 4) pos = 4;
				if(pos > window.innerWidth - 4) pos = window.innerWidth - 4;
				return pos;
			}

			let proY = pos => {
				if(pos < 4) pos = 4;
				if(pos > window.innerHeight - 4) pos = window.innerHeight - 4;
				return pos;
			}

			for (let classes of options.classes) tooltip.addClass(classes);
			if(options.position.toLowerCase() == "top") {
				tooltip.addClass("tt-top");
				(function position(){
					tooltip.css("top", proY(descriptor.offset().top - tooltip.realheight() - 4));
					tooltip.css("left", proX(descriptor.offset().left + descriptor.realwidth()/2 - tooltip.realwidth()/2));
					requestAnimationFrame(position);
				}())
			} else if(options.position.toLowerCase() == "left") {
				tooltip.addClass("tt-left");
				(function position(){
					tooltip.css("top", proY(descriptor.offset().top + descriptor.realheight()/2 - tooltip.realheight()/2));
					tooltip.css("left", proX(descriptor.offset().left - tooltip.realwidth() - 4));
					requestAnimationFrame(position);
				}())
			} else if(options.position.toLowerCase() == "right") {
				tooltip.addClass("tt-right");
				(function position(){
					tooltip.css("top", proY(descriptor.offset().top + descriptor.realheight()/2 - tooltip.realheight()/2));
					tooltip.css("left", proX(descriptor.offset().left + descriptor.realwidth() + 4));
					requestAnimationFrame(position);
				}())
			} else {
				tooltip.addClass("tt-bottom");
				(function position(){
					tooltip.css("top", proY(descriptor.offset().top + descriptor.realheight() + 4));
					tooltip.css("left", proX(descriptor.offset().left + descriptor.realwidth()/2 - tooltip.realwidth()/2));
					requestAnimationFrame(position);
				}())
			}

		});
    };
}(jQuery));


;(function(){
	Photon.toast = function(){
		return new class Toast {
			constructor(args) {
				args = this.args = {
					content: args[0] || "",
					delay: args[1] || 2000,
					classes: (typeof args[2] == "string" ? args[2].split(" ") : args[2]) || [],
					guid: Photon.guid()
				}

				$(".toasts").length == 0 && $(document.body).append(`<div class="toasts"></div>`);

				$(".toasts").append(`<div class="toast" id="${args.guid}"></div>`);
				let toast = $("#" + args.guid);

				toast.html(args.content);
				toast.addClass(args.classes.join(" "));

				requestAnimationFrame(function(){
					toast.addClass("active")
				});

				this.toast = toast;

				let todest;
				let requeue = () => {
					clearTimeout(todest);
					todest = setTimeout(() => this.destroy(), args.delay);
				}

				requeue();
				toast.on("mousedown",function(e){
					toast.attr("data-hold",e.pageX);
				}).click(function(e){
					e.stopPropagation();
					$(this).addClass("has-focus").siblings().removeClass("has-focus");
				})

				let instance = this;
				$(document.body).on("mouseup",function(){
					toast.removeAttr("data-hold");

					if(toast.css("opacity") <= 0.3) {
						instance.destroy();
					} else {
						toast.css("transform","translateX(0)");
						toast.css("opacity", 1);
					}

				}).on("mousemove",function(e){

					if(toast.attr("data-hold")){

						requeue();

						let hold = e.pageX - parseInt(toast.data("hold"));
						toast.css("transform",`translateX(${hold}px)`);
						toast.css("opacity",1 - Math.abs(hold)/100);
					}

				}).click(function() {
					$(".toasts").children(".toast").removeClass("has-focus");
				}).keydown(function(e) {
					let aftoast = $(".toasts").children(".toast.has-focus").addClass("ta");
					if(e.which === 37) {
						aftoast.css({ "transform" : `translateX(-${aftoast.width()/2}px)` });
					} else if(e.which === 39){
						aftoast.css({ "transform" : `translateX(${aftoast.width()/2}px)` });
					}
					aftoast.css({ "opacity" : 0 });

					setTimeout(() => {
						aftoast.addClass("oeff")
						setTimeout(() => aftoast.remove(),200);
					}, 150);

				});

			}

			destroy() {
				let { toast } = this;
				toast.addClass("oeff")
				toast.next().addClass("has-focus");

				setTimeout(() => toast.remove(),200);
			}

		}(arguments);
	}

}())
;(function(){
	Photon.dialog = class PhotonDialog {
		constructor(options) {
			this.options = $.extend({
				title:"This page says:",
				size:"auto",
				message:"",
				transition:"fade",
				actions:[],
				inputs:[],
				assets:1,
				force:false
			},options);

			this.resolved = false;
			this.guid = Photon.guid();
		}

		destroy(dialog = $("#" + this.guid)) {
			if(!(this.options.type == "progress" || this.options.force) || this.resolved) {
				requestAnimationFrame(() => {
					dialog.parent().removeClass("active");
					setTimeout(() => dialog.parent().remove(),200);
				});
			} else {
				this.focus();
			}
		}

		focus(dialog = $("#" + this.guid)) {
			dialog.addClass("enlarge");
			setTimeout(() => dialog.removeClass("enlarge"),150);
		}

		open() {

			const Super = this;

			$(".photon-dialog").remove();
			$("body").append(`<div class="photon-dialog"><div class="dialog" id="${this.guid}"></div></div>`);

			const dialog = $("#" + this.guid);
			dialog.parent().click(function(e){
				if($(e.target).hasClass("photon-dialog")) Super.destroy(dialog);
			});

			dialog.addClass("transition-" + this.options.transition);
			requestAnimationFrame(() => dialog.parent().addClass("active"));

			if(this.options.type == "alert"){
				dialog.append(`<div class="title">${this.options.title}</div>`);
				dialog.append(`<div class="body">${this.options.message}</div>`);
			} else if (this.options.type == "form"){
				this.promptguid = Photon.guid();
				dialog.append(`<div class="title">${this.options.title}</div>`);
				dialog.append(`<div class="body">${this.options.message.length > 0 ? "<p>":""}${this.options.message}${this.options.message.length > 0  ?"</p>":""}</div>`);

				let slug = str => {
					str = str.toLowerCase();
					str = str.replace(/\s|\@|\!|\#|\$|\%|\^|\&|\*\|9|\)|\(/g,"-")
				}

				for (let input of this.options.inputs) {
					dialog.children(".body").append(`<div class="input-field"><input type="${input.type || "text"}" id="${input.id || slug(input.label)}" /><label for="${input.id || slug(input.label)}">${input.label}</label></div>`)
				}

				this.value = () => {
					let resp = {};
					dialog.children(".body").children(".input-field").each(function(){
						resp[$(this).children("input").attr("id")] = $(this).children("input").val()
					});
					return resp;
				};
				Photon.reload();

				dialog.children(".body").children(".input-field").first().children("input").focus();
				Photon.updateTextFields();

			} else if (this.options.type == "progress"){
				if (this.options.circular) {
					let progid = Photon.guid();
					dialog.append(`<div class="body"><svg class="spinner"><circle cx="50" cy="50" r="20"></circle></svg>${this.options.message}</div>`);
					this.options.size = "spinner";
				} else {
					let progid = Photon.guid();
					let aid = Photon.guid();
					dialog.append(`<div class="body">${this.options.message}<div class="progress"><div class="determinate" id="${progid}"></div></div><div class="assets" id="${aid}">0/0</div></div>`);
					this.options.size = "progress";

					this.asset = 0;
					this.increment = function(value = 1){
						this.asset += value;
						const percent = this.asset/this.options.assets;
						$("#" + progid).css("width",percent * 100 + "%").css("transition","none");
						$("#" + aid).text(`${this.asset}/${this.options.assets}`);
						if(percent == 1){
							this.increment = function(){};
							this.resolved = true;
							this.destroy();
						}
					}
				}
			} else if (this.options.type == "radio"){

				this.options.size = "choice";
				dialog.append(`<div class="title">${this.options.title}</div>`);

				const group = Photon.guid();
				const ouid = Photon.guid();

				dialog.append(`<div class="body"><div class="options" id="${ouid}"></div></div>`);
				const options = $("#" + ouid);
				for (let option of this.options.options) {
					let uuid = Photon.guid();
					options.append(`<div class="radio-btn"><input type="radio" id="${uuid}" name="${group}"${option.default ? " checked":""}><label for="${uuid}">${option.name}</label><div class="ripple waves-effect waves-ink"></div></div>`);

					if(option.select) {
						$("#" + uuid).change(function(){
							if($(this).prop("checked")) option.select()
						})
					}
				}

				Photon.reload();

				$("[name='" + group + "']").change(function(){
					$(this).prop("checked") && Waves.ripple($(this).siblings(".ripple")[0])
				});

				this.value = () => $("[for='" + $("[name='" + group + "']:checked").attr("id") + "']").text();

			} else if (this.options.type == "checkbox"){

				this.options.size = "choice";
				dialog.append(`<div class="title">${this.options.title}</div>`);

				const group = Photon.guid();
				const ouid = Photon.guid();

				dialog.append(`<div class="body"><div class="options" id="${ouid}"></div></div>`);
				const options = $("#" + ouid);
				for (let option of this.options.options) {
					let uuid = Photon.guid();
					options.append(`<div class="checkbox"><input type="checkbox" id="${uuid}" name="${group}"${option.selected ? " checked":""}><label for="${uuid}">${option.name}</label><div class="ripple waves-effect waves-ink"></div></div>`);
				}

				Photon.reload();

				$("[name='" + group + "']").change(function(){
					$(this).prop("checked") && Waves.ripple($(this).siblings(".ripple")[0])
				});

				this.value = () => {
					let ops = [];
					$("[name='" + group + "']:checked").each(function(){
						ops.push($(this).siblings("label").text());
					});
					return ops;
				}
			} else if (this.options.type == "user") {
				this.options.size = "dense";
				dialog.append(`<div class="title">${this.options.title}</div>`);

				dialog.append(`<div class="users"></div>`);

				let img = "data:image/svg+xml;base64," + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="#1e88e5"><circle fill="#bbdefb" cx="20" cy="20" r="20"/><g transform="translate(5,4) scale(1.25)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></g></svg>`);
				for (let user of this.options.users || []) {
					let xuid = Photon.guid();
					dialog.children(".users").append(`<div id="${xuid}" class="user waves-effect"><img src="${user.image || img}" alt="" /><span class="desc">${user.desc}</span></div>`)
					user.click && $(`#${xuid}`).click(() => user.click(this))
				}

				if(this.options.methods.length > 0 && this.options.users.length > 0) dialog.children(".users").append(`<hr />`);

				let add = "data:image/svg+xml;base64," + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="#fff"><circle fill="#c1c1c1" cx="20" cy="20" r="20"/><g transform="translate(5,5) scale(1.25)"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></g></svg>`);
				for (let method of this.options.methods || []) {
					let xuid = Photon.guid();
					dialog.children(".users").append(`<div id="${xuid}" class="user method waves-effect"><img src="${method.image || add}" alt="" /><span class="desc">${method.name}</span></div>`)
					method.click && $(`#${xuid}`).click(() => method.click(this))
				}
			} else if(this.options.type == "date") {
				this.options.size = "picker";
				if(!this.options.date || !this.options.date instanceof Date) this.options.date = new Date();

				const FULLMONTHS = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
				const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
				const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

				let format = date => `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`;
				let format2 = date => `${FULLMONTHS[this.options.date.getMonth()]} ${this.options.date.getFullYear()}`;

				this.options = $.extend({
					future: true,
					past: true,
					onselect(){}
				},this.options);

				dialog.addClass("photon-datepicker");

				dialog.append(`<div class="bar"><div class="year">${this.options.date.getFullYear()}</div><div class="date active">${format(this.options.date)}</div></div>`);
				dialog.append(`<div class="body years"></div>`);
				dialog.append(`<div class="body calendar active"></div>`);

				dialog.children(".bar").children(".year").click(function(){
					$(this).addClass("active").siblings().removeClass("active");
					dialog.children(".body").removeClass("active");
					dialog.children(".body.years").addClass("active");
				});
				dialog.children(".bar").children(".date").click(function(){
					$(this).addClass("active").siblings().removeClass("active");
					dialog.children(".body").removeClass("active")
					dialog.children(".body.calendar").addClass("active");
				});

				const years = dialog.children(".body.years");
				const calendar = dialog.children(".body.calendar");

				calendar.append(`<div class="calnav"><i class="material-icons waves-effect waves-ink">chevron_left</i><div class="monthyear alt">ALT</div><div class="monthyear">${format2(this.options.date)}</div><i class="material-icons waves-effect waves-ink right">chevron_right</i></div>`)

				calendar.append(`<div class="cal-slider"></div><div class="cal-slider alt"></div>`)
				calendar.children(".cal-slider").append(`<div class="headers"><div class="header">S</div><div class="header">M</div><div class="header">T</div><div class="header">W</div><div class="header">T</div><div class="header">F</div><div class="header">S</div></div>`);

				let value = this.options.date;

				const pri = calendar.children(".calnav").children(".monthyear").not(".alt");
				const alt = calendar.children(".calnav").children(".monthyear.alt").hide();
				const both = calendar.children(".calnav").children(".monthyear");

				const cmp = calendar.children(".cal-slider").not(".alt");
				const cma = calendar.children(".cal-slider.alt").hide();
				const cmb = calendar.children(".cal-slider");

				cmb.append(`<div class="cal"></div>`);

				let selected = new Date(this.options.date);

				let update = date => {

					dialog.children(".bar").children(".year").html(date.getFullYear());
					dialog.children(".bar").children(".date").html(format(date));

					opts.onselect(date);

					value = date;
					
				}

				let opts = this.options;
				let repop = (cal,date) => {

					let today = new Date();

					cal.empty();
					years.empty();

					let frange = [date.getFullYear(),date.getFullYear()];
					if(opts.past) frange[0] -= 100;
					if(opts.future) frange[1] += 100;

					for (let i = frange[0]; i <= frange[1]; i++) {
						let classes = ["yearsel","waves-effect"];
						if(i == opts.date.getFullYear()) {
							classes.push("selected");
						}

						years.append(`<div class="${classes.join(" ")}">${i}</div>`);
					}

					let scroll = 0;
					let l = 48;
					years.children().each(function(){
						if($(this).hasClass("selected")) l = 0;
						scroll += l;
					}).click(function(){
						$(this).addClass("selected").siblings().removeClass("selected");
						selected.setYear(parseInt($(this).text()));
						update(selected);
					});

					years.scrollTop(scroll - 144)

					date.setDate(1);
					for (let i = 0; i < date.getDay(); i++) {
						cal.append(`<div class="datecell"></div>`)
					}

					date.setMonth(date.getMonth() + 1);
					date.setDate(-1);

					for (let i = 0; i < date.getDate() + 1; i++) {
						let classes = ["date"];

						if(i + 1 == today.getDate() && date.getMonth() == today.getMonth() && date.getYear() == today.getYear()) {
							classes.push("today");
						}
						if(i + 1 == selected.getDate() && date.getMonth() == selected.getMonth() && date.getYear() == selected.getYear()) {
							classes.push("selected");
						}

						let current = new Date(date);
						current.setDate(i + 1);

						let now = new Date();
						now.setDate(now.getDate() - 1);

						if(current.getTime() < now.getTime() && !opts.past) classes.push("disabled")
						if(current.getTime() > now.getTime() + 86400000 && !opts.future) classes.push("disabled")

						cal.append(`<div class="datecell"><div class="${classes.join(" ")}">${i + 1}</div></div>`);
					}

					cal.children(".datecell").children(".date").not(".disabled").click(function(){
						cal.children(".datecell").children(".date").removeClass("selected");
						$(this).addClass("selected");

						selected.setDate(parseInt($(this).text()));
						selected.setMonth(value.getMonth());
						selected.setYear(value.getFullYear());
						update(selected);
					})

				}

				this.value = () => selected;

				calendar.children(".calnav").children("i").click(function(){

					both.show();
					cmb.show();

					if($(this).hasClass("right")) {

						value.setMonth(value.getMonth() + 1);
						repop(cma.children(".cal"),value);

						pri.css("transform","translateX(0)");
						alt.css("transform","translateX(100%)").text(format2(value));
						requestAnimationFrame(() => {
							both.addClass("animating");
							pri.css("transform","translateX(-100%)");
							alt.css("transform","translateX(0)");
							setTimeout(() => {
								both.removeClass("animating");
								requestAnimationFrame(() => {
									pri.css("transform","translateX(0)").text(format2(value));
									repop(cmp.children(".cal"),value);

									alt.hide();
								})
							}, 350);
						})

						cmp.css("transform","translateX(0)");
						cma.css("transform","translateX(100%)");
						requestAnimationFrame(() => {
							cmb.addClass("animating");
							cmp.css("transform","translateX(-100%)");
							cma.css("transform","translateX(0)");
							setTimeout(() => {
								cmb.removeClass("animating");
								requestAnimationFrame(() => {
									cmp.css("transform","translateX(0)")
									cma.hide();
								})
							}, 350);
						})

					} else {

						let dc = value.getMonth();
						value.setMonth(value.getMonth() - 1);
						if(value.getMonth() == dc) {
							value.setMonth(value.getMonth() - 1);
						}

						repop(cma.children(".cal"),value);

						pri.css("transform","translateX(0)");
						alt.css("transform","translateX(-100%)").text(format2(value));
						requestAnimationFrame(() => {
							both.addClass("animating");
							pri.css("transform","translateX(100%)");
							alt.css("transform","translateX(0)");
							setTimeout(() => {
								both.removeClass("animating");
								requestAnimationFrame(() => {
									pri.css("transform","translateX(0)").text(format2(value));
									repop(cmp.children(".cal"),value);

									alt.hide();
								})
							}, 350);
						})

						cmp.css("transform","translateX(0)");
						cma.css("transform","translateX(-100%)");
						requestAnimationFrame(() => {
							cmb.addClass("animating");
							cmp.css("transform","translateX(100%)");
							cma.css("transform","translateX(0)");
							setTimeout(() => {
								cmb.removeClass("animating");
								requestAnimationFrame(() => {
									cmp.css("transform","translateX(0)")
									cma.hide();
								})
							}, 350);
						})

					}
				})

				repop(cmp.children(".cal"),value);

			}

			dialog.addClass("size-" + this.options.size);
			this.options.actions.length > 0 && dialog.append(`<div class="actions"></div>`);

			for (let action of this.options.actions) {
				action.acid = Photon.guid()
				dialog.children(".actions").append(`<a id="${action.acid}" class="btn flat waves-effect waves-accent">${action.name}</a>`);
				action.role == "primary" && $("#" + action.acid).css("left","4px").css("position","absolute");
				action.click && $(`#${action.acid}`).click(() => {
					this.resolved = true;
					action.click(this);
				})
			}

			$("body").keyup(e => {
				if(e.which == 27){
					this.destroy();
				} else if(e.which == 13){
					dialog.children(".actions").children().first().click()
				}
			});
		}

	};
}());

Photon.Waves = {
    reload: () => {
        $(".waves-ink").off("mousedown").bind("mousedown", function(e) {
            $(this).children(".waves-ripple").fadeOut(500);
            e.stopPropagation();
            Waves.ripple(this, {
                wait: 1e10
            });
        }).on("mouseup mouseleave", function() {
            Waves.calm(this);
        }).bind("touchstart", function(e) {
			e.stopPropagation();
        });

		$(".waves-effect").on("touchstart", function() {
			$(this).children(".waves-ripple").remove();
        }).on("touchend", function() {
			$(this).addClass("waves-touch");
        })
    }
};

$(() => {
    $(document.body).mousemove(function(e) {
        window.cursor = {};
        window.cursor.X = e.pageX;
        window.cursor.Y = e.pageY;
    });

    Photon.autoready && Photon.ready();

})

Photon.ready = Photon.reload = function(loaded = () => {}) {

    $(".autolink").autolink();
	$(".collapsible").collapsible();
    $(".scrollnav").scrollnav();
    $(".select").select();
    $(".sidenav").sidenav();
    $(".slider").slider();
    $(".tabs").tabs();
    $(".tooltipped").tooltip();

    Waves.init();

    $("iframe[src^='https://youtube.com/embed'],iframe[src^='http://youtube.com/embed']").each(function() {
        $(this).attr("height", $(this).width() * (9 / 16));
    });

    $("label").each(function() {
        var f = $("#" + $(this).attr("for"));
        $(this).addClass("for-" + f.attr("type"));

        $(this).on("mousedown", function() {
            Waves.calm(f.siblings(".ripple"))
            Waves.ripple(f.siblings(".ripple"), {
                wait: 1e10
            })
        }).on("mouseup", function() {
            Waves.calm(f.siblings(".ripple"))
        })
    });

    $(".input-field input,.input-field.select select").focus(function() {
        $(this).parent().append("<div class=\"bar\"></div>");
        var bar = $(this).siblings(".bar");

        var {
            X
        } = window.cursor;
        X = X - $(this).offset().left;
        X = X / $(this).width() * 100;
		X = X > $(this).parent().width() ? $(this).parent().width() : X;

        bar.css({
            left: X + "%"
        })

        bar.animate({
            left: 0,
            width: ($(this).parent().hasClass("outlined") ? $(this).parent().width() - 4:"100%")
        }, Photon.speed, "swing");
    }).blur(function() {
        const b = $(this).siblings(".bar");
        b.animate({
            opacity: 0
        }, Photon.speed, function() {
            setTimeout(() => b.remove(), Photon.speed)
        })
    }).change(function() {
        if ($(this).val() != "") {
            $(this).addClass("containscontent");
        } else {
            $(this).removeClass("containscontent");
        }
    }).each(function() {
        if ($(this).val() != "") {
            $(this).addClass("containscontent");
        } else {
            $(this).removeClass("containscontent");
        }
        if ($(this).attr("type").toLowerCase() == "password" && !$(this).is(":disabled")) {
            var id = Photon.guid();
            $("#" + id).click(function() {
                var i = $(this).siblings("input");
                if (i.attr("type").toLowerCase() == "password") {
                    i.attr("type", "text");
                    $(this).html("&#xE8F5;");
                } else {
                    i.attr("type", "password");
                    $(this).html("&#xE8F4;");
                }
                $(this).siblings("input").focus();
            })
        } else if ($(this).attr("type").toLowerCase() == "number") {
            $(this).val($(this).val() || "0").addClass("containscontent");
            $(this).off("mousewheel").on("mousewheel", function(e) {
                var v = parseInt($(this).val());
                e.preventDefault();

                function getDelta(g) {
                    if (e.originalEvent.deltaY < 0) {
                        return g * 1
                    } else {
                        return g * -1;
                    }
                }

                if (e.altKey) {
                    v += getDelta(1000)
                } else if (e.ctrlKey) {
                    v += getDelta(100)
                } else if (e.shiftKey) {
                    v += getDelta(10)
                } else {
                    v += getDelta(1)
                }

                if (v > parseInt($(this).attr("max"))) v = parseInt($(this).attr("max"))
                if (v < parseInt($(this).attr("min"))) v = parseInt($(this).attr("min"))

                $(this).val(v)
            })
        }
    }).siblings("label").click(function() {
        $(this).siblings("input").focus()
    }).each(function() {
        $(this).parent().mouseenter();
    })

    $(".btn.toggle").not(":disabled,.disabled").click(function() {
        $(this).toggleClass("active");
    })

    Photon.Waves.reload();

    setTimeout(() => {
        $(".tabs.auto").each(function() {
            $(this).children(".tab").first().children("a").click()
        })
    }, Photon.speed);

    $(".checkbox,.radio-btn,.switch").children("input").on("mousedown touchstart", function() {
        Waves.calm($(this).siblings(".ripple"));
        Waves.ripple($(this).siblings(".ripple"), {
            wait: 1e10
        });
    }).on("mouseup", function() {
        Waves.calm($(this).siblings(".ripple"));
    }).on("touchstart", function() {
        $(this).parent().addClass("held");
        Waves.calm($(this).siblings(".ripple"));
        Waves.ripple($(this).siblings(".ripple"), {
            wait: 1e10
        });
    }).on("touchend", function() {
        $(this).parent().removeClass("held");
        Waves.calm($(this).siblings(".ripple"));
    });

    ;
    (function() {
        var track = 0;
        var start = 0;

        $(".tabs-swipeable").on("touchstart", function(e) {

            e.preventDefault();
            start = e.touches[0].clientX;

        }).on("touchmove", function(e) {

            e.preventDefault();
            track = e.changedTouches[0].pageX;

        }).on("touchend", function() {

            var swipeleft = ((start - track) > 100)
            var swiperight = ((start - track) < -100);

            if (swiperight) {
                $("a[href=\"#" + $(this).attr("id") + "\"]").parent().prev().children("a").click()
            }
            if (swipeleft) {
                $("a[href=\"#" + $(this).attr("id") + "\"]").parent().next().children("a").click()
            }

            start = 0;
            track = 0;

        })
    }())

	$(".input-field.box").click(function(){
		$(this).children("input").focus()
	})

    loaded();

}

setInterval(function() {
	Waves.ripple($(".waves-pulse"), {
    	wait: 750
	})
}, 1250);

$(function(){
	(function animation() {
	    requestAnimationFrame(animation);

		$(".app-bar").each(function(){
			if($(this).children(".title").children(".subtitle").length == 1){
				$(this).children(".title").css("margin-top","-10px");
			}
		})

		if($(document).scrollTop() > 0) {
			$(".app-bar.paper").addClass("raised");
		} else {
			$(".app-bar.paper").removeClass("raised");
		}

	    $(".card-image.parallax").each(function() {
	        var t = $(this).children("img")
	        var px = ($("html").scrollTop() - t.offset().top * .75) / 20;
	        t[0].style.transform = "scale(2) translateY(" + px + "px)";
	    });

	    $(".collapsible").each(function() {
	        $(this).children().removeClass("adjact");
	        $(this).children(".active").prev("li").addClass("adjact");
	    });

		if($("html").height() + 140 < window.innerHeight){
			$("footer").css({
				"position":"fixed",
				"width":"100%",
				"bottom":"24px"
			})
		} else {
			$("footer").css({
				"position":"static",
				"width":"auto",
				"bottom":"auto"
			})
		}

		$(".app-bar.parallax").each(function(){
			const st = $("html").scrollTop();

			let padding = (260 - st) - 64;
			if(padding < 0) padding = 0;

			let opacity = 1 - st/260;
			let filter = "none";
			if(opacity > 0.73) opacity = 0.73;
			if(opacity < 0.26) {
				opacity = 0.26;
				filter = "blur(4px)";
				$(this).removeClass("flat")
			} else {
				$(this).addClass("flat")
			}

			$(this).height(260 - st);
			$(this).children("img").css("opacity",opacity).css("filter",filter);
			$(this).children(".app-bar").css("margin-top",padding);
		})

	}());
});

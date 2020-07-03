export default {
    Tooltip() {
        return new class Tooltip {

            constructor(target, options) {

                this.options = options = {
                    delay: options.delay || 0,
                    position: options.position || "bottom",
                    tooltip: typeof options === "string" ? options : options.tooltip || "",
                    classes: options.classes || []
                };

                $(target).each(function() {

                    const descriptor = $(this);

                    options["delay"] = parseInt($(this).data("delay")) || options["delay"];
                    options["position"] = $(this).data("position") || options["position"];
                    options["tooltip"] = $(this).data("tooltip") || options["tooltip"];
                    options["classes"] = ($(this).data("tooltipclass") || "").split(" ") || options["classes"];

                    const guid = Photon.guid();
                    if (options.position.toLowerCase() == "bottom") {
                        let center = descriptor.offset().left;
                    }

                    $(this).mouseenter(function() {
                        setTimeout(() => $("#" + guid).addClass("active"), options.delay);
                    }).on("mouseleave click contextmenu", function() {
                        setTimeout(() => $("#" + guid).removeClass("active"), options.delay);
                    });

                    $("body").append(`<div class="material-tooltip" id="${guid}">${options.tooltip}</div>`);
                    const tooltip = $("#" + guid);

                    let proX = pos => {
                        if (pos < 4) pos = 4;
                        if (pos > window.innerWidth - 4) pos = window.innerWidth - 4;
                        return pos;
                    }

                    let proY = pos => {
                        if (pos < 4) pos = 4;
                        return pos;
                    }

                    for (let classes of options.classes) tooltip.addClass(classes);
                    if (options.position.toLowerCase() == "top") {
                        tooltip.addClass("tt-top");
                        (function position() {
                            tooltip.css("top", proY(descriptor.offset().top - tooltip[0].clientHeight - 4));
                            tooltip.css("left", proX(descriptor.offset().left + descriptor[0].clientWidth / 2 - tooltip[0].clientWidth / 2));
                            requestAnimationFrame(position);
                        }())
                    } else if (options.position.toLowerCase() == "left") {
                        tooltip.addClass("tt-left");
                        (function position() {
                            tooltip.css("top", proY(descriptor.offset().top + descriptor[0].clientHeight / 2 - tooltip[0].clientHeight / 2));
                            tooltip.css("left", proX(descriptor.offset().left - tooltip[0].clientWidth - 4));
                            requestAnimationFrame(position);
                        }())
                    } else if (options.position.toLowerCase() == "right") {
                        tooltip.addClass("tt-right");
                        (function position() {
                            tooltip.css("top", proY(descriptor.offset().top + descriptor[0].clientHeight / 2 - tooltip[0].clientHeight / 2));
                            tooltip.css("left", proX(descriptor.offset().left + descriptor[0].clientWidth + 4));
                            requestAnimationFrame(position);
                        }())
                    } else {
                        tooltip.addClass("tt-bottom");
                        (function position() {
                            tooltip.css("top", proY(descriptor.offset().top + descriptor[0].clientHeight + 4));
                            tooltip.css("left", proX(descriptor.offset().left + descriptor[0].clientWidth / 2 - tooltip[0].clientWidth / 2));
                            requestAnimationFrame(position);
                        }())
                    }

                });

            }

        }(...arguments)
    }
}

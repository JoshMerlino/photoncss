import $ from "jquery";

export default function resize(): void {
	const main = $("main");
	const footer = $("footer");

	if (main[0]) main.height(main[0].scrollHeight);
	if (footer[0]) {
		main.css("min-height", window.innerHeight - footer[0].clientHeight - 20);
	} else {
		main.css("min-height", window.innerHeight);
	}
}

$(function render() {
	requestAnimationFrame(render);
	resize();
});

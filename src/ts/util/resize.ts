import $ from "jquery";

export default function resize(): void {
	const main = $("main");
	const footer = $("footer");

	main.height(main[0].scrollHeight);
	main.css("min-height", window.innerHeight - footer[0].clientHeight - 20);
}

$(function render() {
	requestAnimationFrame(render);
	resize();
});

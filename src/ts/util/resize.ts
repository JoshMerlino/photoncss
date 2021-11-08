import $ from "jquery";

export default function resize(): void {
	const height = $("main")[0].scrollHeight;
	$("main").height(height);
}

$(function render() {
	requestAnimationFrame(render);
	resize();
});

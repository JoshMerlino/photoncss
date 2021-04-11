import $ from "jquery";

let x = 0;
let y = 0;
let isMouseDown = false;

$("body").on("mousemove", function(event: JQuery.MouseMoveEvent) {
	x = event.pageX;
	y = event.pageY;
});

$("body").on("mousedown", function() {
	isMouseDown = true;
});

$("body").on("mouseup", function() {
	isMouseDown = false;
});

export default function getPointer(): {
	x: number;
	y: number;
	isMouseDown: boolean;
}{
	return { x, y, isMouseDown };
}

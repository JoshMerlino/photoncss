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

export interface Pointer {
	x: number;
	y: number;
	isMouseDown: boolean;
}

export default function getPointer(): Pointer {
	return { x, y, isMouseDown };
}

import $ from "jquery";

let x = 0;
let y = 0;

$(document).on("mousemove", (event: MouseEvent) => {
	x = event.pageX;
	y = event.pageY;
});

export default function getPointer(): { x: number; y: number; }{
	return { x, y };
}

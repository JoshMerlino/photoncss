export interface Pointer {
    x: number;
    y: number;
    isMouseDown: boolean;
}
export default function getPointer(): Pointer;

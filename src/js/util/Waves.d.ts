interface Position {
    x: number;
    y: number;
}
interface WavesOptions {
    duration?: number;
    delay?: number;
    wait?: number;
    ink?: boolean;
    position?: null | Position;
}
export declare function arbitraryScale(element: Element, relativeX: number, relativeY: number): number;
declare const _default: {
    init(options?: WavesOptions | undefined): void;
    attach(elements: Element[], classArr: string[]): void;
    ripple(elements: Element | Element[], options: WavesOptions): void;
    calm(elements: Element | Element[]): void;
};
export default _default;

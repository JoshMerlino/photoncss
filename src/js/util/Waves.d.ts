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
    /**
     * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
     * waves classes to a set of elements. Set drag to true if the ripple mouseover
     * or skimming effect should be applied to the elements.
     */
    attach(elements: Element[], classArr: string[]): void;
    /**
     * Cause a ripple to appear in an element via code.
     */
    ripple(elements: Element | Element[], options: WavesOptions): void;
    /**
     * Remove all ripples from an element.
     */
    calm(elements: Element | Element[]): void;
};
export default _default;

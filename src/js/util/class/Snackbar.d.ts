export interface SnackbarOptions {
    duration?: number | null;
    id?: string;
}
export declare class Snackbar {
    snackbar: JQuery;
    options: SnackbarOptions;
    constructor(element: React.DOMElement<any, Element>, options?: SnackbarOptions);
    show(): this;
    hide(): this;
    get isOpen(): boolean;
}

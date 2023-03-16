export interface SnackbarOptions {
    duration?: number;
    id?: string;
}
export declare function getNotificationContainer(): JQuery;
export declare class Snackbar {
    snackbar: JQuery;
    options: SnackbarOptions;
    constructor(element: JSX.Element, options?: SnackbarOptions);
    show(): this;
    hide(): this;
    get isOpen(): boolean;
}
export default function (target: JSX.Element, options?: SnackbarOptions): Snackbar;

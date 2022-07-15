export interface DialogOptions {
    id?: string;
    closeOnBlur?: boolean;
}
export declare class Dialog {
    target: JQuery;
    options: DialogOptions;
    constructor(dialog: JSX.Element, options?: DialogOptions);
    close(): this;
    open(): this;
    get isOpen(): boolean;
}
export default function (target: JSX.Element, options?: DialogOptions): Dialog;

import { PhotonSelector } from "../../index";
export declare class Menu {
    target: JQuery;
    private explicitPosition;
    constructor(target: JQuery);
    __getModal(id: string): JQuery<HTMLElement>;
    anchor(x: number | PhotonSelector, y?: number): this;
    open(): this;
    close(): this;
    get isOpen(): boolean;
}

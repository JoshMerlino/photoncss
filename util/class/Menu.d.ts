import { PhotonSelector } from "../../index";
export declare class Menu {
    target: JQuery;
    private explicitPosition;
    constructor(target: PhotonSelector);
    private __getModal;
    anchor(x: number | PhotonSelector, y?: number): this;
    open(): this;
    close(): this;
    get isOpen(): boolean;
}
export default function (target: PhotonSelector): Menu;

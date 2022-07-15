import { PhotonSelector } from "../../index";
export declare class Drawer {
    target: JQuery;
    constructor(target: PhotonSelector);
    open(): this;
    close(): this;
    get isOpen(): boolean;
}
export default function (target: PhotonSelector): Drawer;

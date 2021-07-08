import guid from "./util/guid";
export { guid };
export declare type PhotonSelector = string | Element | JQuery;
export declare type UnityPhotonSelector = string & Element & JQuery;
import Waves from "./util/Waves.js";
export { Waves };
import { Dialog, DialogOptions } from "./util/class/Dialog";
export { Dialog, DialogOptions } from "./util/class/Dialog";
import { Drawer } from "./util/class/Drawer";
export { Drawer } from "./util/class/Drawer";
import { Menu } from "./util/class/Menu";
export { Menu } from "./util/class/Menu";
import { Snackbar, SnackbarOptions } from "./util/class/Snackbar";
export { Snackbar, SnackbarOptions } from "./util/class/Snackbar";
export default class Photon {
    static Dialog: (target: PhotonSelector | React.DOMElement<any, Element>, options?: DialogOptions | undefined) => Dialog;
    static Drawer: (target: PhotonSelector) => Drawer;
    static Menu: (target: PhotonSelector) => Menu;
    static Snackbar: (target: React.DOMElement<any, Element>, options?: SnackbarOptions | undefined) => Snackbar;
}

// Import submodules/helper functions
import guid from "./util/guid";
export { guid };

console.log("test");

// Set up PhotonSelector type
export type PhotonSelector = string & Element & JQuery;

// Import waves
import "./util/Waves.js";

// Import active components
import { Dialog, DialogOptions } from "./util/class/Dialog";
import { Drawer } from "./util/class/Drawer";
import { Menu } from "./util/class/Menu";
import { Snackbar, SnackbarOptions } from "./util/class/Snackbar";

// Export Photon
export default class Photon {
	static Dialog = (target: PhotonSelector & React.DOMElement<any, Element>, options?: DialogOptions): Dialog => new Dialog(target, options);

	static Drawer = (target: PhotonSelector): Drawer => new Drawer(target);

	static Menu = (target: PhotonSelector): Menu => new Menu(target);

	static Snackbar = (target: React.DOMElement<any, Element>, options?: SnackbarOptions): Snackbar => new Snackbar(target, options);
}

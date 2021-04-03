import $ from "jquery";

// Import submodules/helper functions
import guid from "./util/guid";
export { guid };

// Set up PhotonSelector type
export type PhotonSelector = $ | string;

// Import waves
import "./util/Waves.js";

// Import active components
import { Drawer } from "./util/class/Drawer";
import { Menu } from "./util/class/Menu";

// Export Photon
export default class Photon {
	// static guid = guid;
	static Drawer = (target: PhotonSelector): Drawer => new Drawer(target);
	static Menu = (target: PhotonSelector): Menu => new Menu(target);
}

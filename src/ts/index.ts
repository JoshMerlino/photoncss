// Import everything
import guid from "./util/guid";
export { guid };

import resize from "./util/resize";
export { resize };

import Waves from "./util/Waves.js";
export { Waves };

import Dialog from "./util/class/Dialog";
export { Dialog };

import Drawer from "./util/class/Drawer";
export { Drawer };

import Menu from "./util/class/Menu";
export { Menu };

import Snackbar from "./util/class/Snackbar";
export { Snackbar };

// Set up PhotonSelector type
export type PhotonSelector = string | Element | JQuery;
export type UnityPhotonSelector = string & Element & JQuery;

// Export Photon
export default {

	guid,
	resize,

	Dialog,
	Drawer,
	Menu,
	Snackbar

};

import guid from "./util/guid";
export { guid };

import ThemeProvider from "./util/class/ThemeProvider";
export { ThemeProvider };

import "./util/Waves.js";

export * from "./util/class/notify";
import { notify } from "./util/class/notify";

export default class Photon {
	static guid = guid;
	static notify = notify;
}

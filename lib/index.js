"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guid = void 0;
const guid_1 = __importDefault(require("./util/guid"));
exports.guid = guid_1.default;
require("./util/Waves.js");
const Dialog_1 = require("./util/class/Dialog");
const Drawer_1 = require("./util/class/Drawer");
const Menu_1 = require("./util/class/Menu");
const Snackbar_1 = require("./util/class/Snackbar");
class Photon {
}
exports.default = Photon;
Photon.Dialog = (target, options) => new Dialog_1.Dialog(target, options);
Photon.Drawer = (target) => new Drawer_1.Drawer(target);
Photon.Menu = (target) => new Menu_1.Menu(target);
Photon.Snackbar = (target, options) => new Snackbar_1.Snackbar(target, options);
//# sourceMappingURL=index.js.map
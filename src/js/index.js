"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snackbar = exports.Menu = exports.Drawer = exports.Dialog = exports.Waves = exports.guid = void 0;
const guid_1 = __importDefault(require("./util/guid"));
exports.guid = guid_1.default;
const Waves_js_1 = __importDefault(require("./util/Waves.js"));
exports.Waves = Waves_js_1.default;
const Dialog_1 = require("./util/class/Dialog");
var Dialog_2 = require("./util/class/Dialog");
Object.defineProperty(exports, "Dialog", { enumerable: true, get: function () { return Dialog_2.Dialog; } });
const Drawer_1 = require("./util/class/Drawer");
var Drawer_2 = require("./util/class/Drawer");
Object.defineProperty(exports, "Drawer", { enumerable: true, get: function () { return Drawer_2.Drawer; } });
const Menu_1 = require("./util/class/Menu");
var Menu_2 = require("./util/class/Menu");
Object.defineProperty(exports, "Menu", { enumerable: true, get: function () { return Menu_2.Menu; } });
const Snackbar_1 = require("./util/class/Snackbar");
var Snackbar_2 = require("./util/class/Snackbar");
Object.defineProperty(exports, "Snackbar", { enumerable: true, get: function () { return Snackbar_2.Snackbar; } });
class Photon {
}
exports.default = Photon;
Photon.Dialog = (target, options) => new Dialog_1.Dialog(target, options);
Photon.Drawer = (target) => new Drawer_1.Drawer(target);
Photon.Menu = (target) => new Menu_1.Menu(target);
Photon.Snackbar = (target, options) => new Snackbar_1.Snackbar(target, options);
//# sourceMappingURL=index.js.map
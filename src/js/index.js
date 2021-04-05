"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guid = void 0;
// Import submodules/helper functions
var guid_1 = __importDefault(require("./util/guid"));
exports.guid = guid_1.default;
// Import waves
require("./util/Waves.js");
// Import active components
var Drawer_1 = require("./util/class/Drawer");
var Menu_1 = require("./util/class/Menu");
var Snackbar_1 = require("./util/class/Snackbar");
// Export Photon
var Photon = /** @class */ (function () {
    function Photon() {
    }
    Photon.Drawer = function (target) { return new Drawer_1.Drawer(target); };
    Photon.Menu = function (target) { return new Menu_1.Menu(target); };
    Photon.Snackbar = function (target, options) { return new Snackbar_1.Snackbar(target, options); };
    return Photon;
}());
exports.default = Photon;
//# sourceMappingURL=index.js.map
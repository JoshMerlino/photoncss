"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waves = exports.ThemeProvider = exports.guid = void 0;
var guid_1 = __importDefault(require("./util/guid"));
exports.guid = guid_1.default;
var ThemeProvider_1 = __importDefault(require("./util/class/ThemeProvider"));
exports.ThemeProvider = ThemeProvider_1.default;
var Waves_js_1 = __importDefault(require("./util/Waves.js"));
exports.Waves = Waves_js_1.default;
var Photon = /** @class */ (function () {
    function Photon() {
    }
    Photon.guid = guid_1.default;
    return Photon;
}());
exports.default = Photon;
//# sourceMappingURL=index.js.map
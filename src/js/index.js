"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = exports.guid = void 0;
var guid_1 = __importDefault(require("./util/guid"));
exports.guid = guid_1.default;
var ThemeProvider_1 = __importDefault(require("./util/class/ThemeProvider"));
exports.ThemeProvider = ThemeProvider_1.default;
require("./util/Waves.js");
__exportStar(require("./util/class/notify"), exports);
var notify_1 = require("./util/class/notify");
var Photon = /** @class */ (function () {
    function Photon() {
    }
    Photon.guid = guid_1.default;
    Photon.notify = notify_1.notify;
    return Photon;
}());
exports.default = Photon;
//# sourceMappingURL=index.js.map
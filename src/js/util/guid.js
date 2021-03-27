"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generates a UUID in XXXXXXXXXXXX
function guid() {
    // Generate a random 4 digit number in hex XXXX
    var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
    // String together 3 - 4 digit sections
    return "" + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}
exports.default = guid;
//# sourceMappingURL=guid.js.map
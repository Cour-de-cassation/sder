"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareNormalizedStrings = void 0;
var normalizeString_1 = require("./normalizeString");
function compareNormalizedStrings(text1, text2) {
    return normalizeString_1.normalizeString(text1) === normalizeString_1.normalizeString(text2);
}
exports.compareNormalizedStrings = compareNormalizedStrings;

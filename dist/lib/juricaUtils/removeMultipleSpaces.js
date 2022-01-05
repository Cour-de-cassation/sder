"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMultipleSpaces = void 0;
function removeMultipleSpaces(str) {
    return str.replace(/  +/gm, ' ').trim();
}
exports.removeMultipleSpaces = removeMultipleSpaces;

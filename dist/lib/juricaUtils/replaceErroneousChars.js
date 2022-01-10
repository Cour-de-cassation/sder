"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceErroneousChars = void 0;
function replaceErroneousChars(str) {
    return str.replace(/\x91/gm, '‘').replace(/\x92/gm, '’').replace(/\x80/gm, '€').replace(/\x96/gm, '–');
}
exports.replaceErroneousChars = replaceErroneousChars;

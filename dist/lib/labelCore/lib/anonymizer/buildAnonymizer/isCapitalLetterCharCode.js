"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCapitalLetterCharCode = void 0;
var A_ASCII_CODE = 65;
var Z_ASCII_CODE = 90;
function isCapitalLetterCharCode(charCode) {
    return charCode >= A_ASCII_CODE && charCode <= Z_ASCII_CODE;
}
exports.isCapitalLetterCharCode = isCapitalLetterCharCode;

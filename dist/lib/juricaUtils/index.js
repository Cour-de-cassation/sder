"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juricaUtils = void 0;
var cleanHTML_1 = require("./cleanHTML");
var normalize_1 = require("./normalize");
var removeMultipleSpaces_1 = require("./removeMultipleSpaces");
var replaceErroneousChars_1 = require("./replaceErroneousChars");
var juricaUtils = {
    cleanHTML: cleanHTML_1.cleanHTML,
    normalize: normalize_1.normalize,
    removeMultipleSpaces: removeMultipleSpaces_1.removeMultipleSpaces,
    replaceErroneousChars: replaceErroneousChars_1.replaceErroneousChars,
};
exports.juricaUtils = juricaUtils;

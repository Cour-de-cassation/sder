"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jurinetUtils = void 0;
var cleanHTML_1 = require("./cleanHTML");
var getJuricaDuplicate_1 = require("./getJuricaDuplicate");
var normalize_1 = require("./normalize");
var removeMultipleSpaces_1 = require("./removeMultipleSpaces");
var replaceErroneousChars_1 = require("./replaceErroneousChars");
var jurinetUtils = {
    cleanHTML: cleanHTML_1.cleanHTML,
    getJuricaDuplicate: getJuricaDuplicate_1.getJuricaDuplicate,
    normalize: normalize_1.normalize,
    removeMultipleSpaces: removeMultipleSpaces_1.removeMultipleSpaces,
    replaceErroneousChars: replaceErroneousChars_1.replaceErroneousChars,
};
exports.jurinetUtils = jurinetUtils;

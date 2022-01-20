"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTextIntoCharCode = void 0;
var lodash_1 = require("lodash");
var A_ASCII_CODE = 65;
function convertTextIntoCharCode(text) {
    return parseInt(lodash_1.range(text.length)
        .map(function (_, index) { return text.toUpperCase().charCodeAt(index) - A_ASCII_CODE + 1; })
        .join(''), 10);
}
exports.convertTextIntoCharCode = convertTextIntoCharCode;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanHTML = void 0;
var he_1 = __importDefault(require("he"));
var removeMultipleSpaces_1 = require("./removeMultipleSpaces");
var replaceErroneousChars_1 = require("./replaceErroneousChars");
function cleanHTML(html) {
    // Remove HTML tags:
    html = html.replace(/<\/?[^>]+(>|$)/gm, '');
    // Handling newlines and carriage returns:
    html = html.replace(/\r\n/gim, '\n');
    html = html.replace(/\r/gim, '\n');
    // Remove extra spaces:
    html = html.replace(/\t/gim, '');
    html = html.replace(/\\t/gim, ''); // That could happen...
    html = html.replace(/\f/gim, '');
    html = html.replace(/\\f/gim, ''); // That could happen too...
    html = removeMultipleSpaces_1.removeMultipleSpaces(html);
    // Mysterious chars (cf. https://www.compart.com/fr/unicode/U+0080, etc.):
    html = replaceErroneousChars_1.replaceErroneousChars(html);
    // Decode HTML entities:
    return he_1.default.decode(html);
}
exports.cleanHTML = cleanHTML;

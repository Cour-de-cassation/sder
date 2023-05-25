"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juricaLib = void 0;
var he_1 = require("he");
var juricaLib = {
    cleanText: function (text) {
        assertIsTextString(text);
        text = removeHTMLTags(text);
        text = handleNewLines(text);
        text = removeExtraSpaces(text);
        return (0, he_1.decode)(text); // Decode HTML entities
    },
};
exports.juricaLib = juricaLib;
function assertIsTextString(text) {
    if (typeof text !== 'string') {
        throw new Error('juricaLib.cleanText: text must be a string.');
    }
    if (text === '') {
        throw new Error('juricaLib.cleanText: empty text, the document could be malformed or corrupted.');
    }
}
function removeExtraSpaces(text) {
    text = text.replace(/\t/gim, '');
    text = text.replace(/\\t/gim, '');
    text = text.replace(/\f/gim, '');
    text = text.replace(/\\f/gim, '');
    text = text.replace(/  +/gm, ' ').trim();
    return text;
}
function handleNewLines(text) {
    text = text.replace(/\r\n/gim, '\n');
    text = text.replace(/\r/gim, '\n');
    return text;
}
function removeHTMLTags(text) {
    text = text.replace(/<\/?[^>]+(>|$)/gm, '');
    return text;
}

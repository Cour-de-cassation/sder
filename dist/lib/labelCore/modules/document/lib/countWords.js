"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWords = void 0;
function countWords(_a) {
    var text = _a.text;
    return text.split(' ').filter(Boolean).length;
}
exports.countWords = countWords;

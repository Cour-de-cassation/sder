"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeString = void 0;
function normalizeString(text) {
    return text
        .trim()
        .toLowerCase()
        .replace(/[àâ]/g, 'a')
        .replace(/[éèêë]/g, 'e')
        .replace(/[ç]/g, 'c')
        .replace(/[ïî]/g, 'i')
        .replace(/[ô]/g, 'o')
        .replace(/[ûùü]/g, 'u')
        .replace(/[ÿ]/g, 'y');
}
exports.normalizeString = normalizeString;

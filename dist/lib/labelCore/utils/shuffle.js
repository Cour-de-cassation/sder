"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
var lodash_1 = require("lodash");
var salt = 4.5;
function shuffle(array, seed) {
    var indexes = lodash_1.range(array.length).map(function (_, index) { return index; });
    return indexes
        .sort(function (indexA, indexB) { return Math.sin(indexA * seed * salt) - Math.sin(indexB * seed * salt); })
        .map(function (index) { return array[index]; });
}
exports.shuffle = shuffle;

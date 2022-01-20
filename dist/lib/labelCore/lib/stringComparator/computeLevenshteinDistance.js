"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeLevenshteinDistance = void 0;
var lodash_1 = require("lodash");
function computeLevenshteinDistance(str1, str2) {
    var length1 = str1.length + 1;
    var length2 = str2.length + 1;
    var prefixLevenshteinDistance = lodash_1.range(length1).map(function () { return lodash_1.range(length2).map(function () { return 0; }); });
    lodash_1.range(1, length1).forEach(function (i) { return (prefixLevenshteinDistance[i][0] = i); });
    lodash_1.range(1, length2).forEach(function (j) { return (prefixLevenshteinDistance[0][j] = j); });
    lodash_1.range(1, length1).forEach(function (i) {
        return lodash_1.range(1, length2).forEach(function (j) {
            var substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            prefixLevenshteinDistance[i][j] = Math.min(prefixLevenshteinDistance[i - 1][j] + 1, prefixLevenshteinDistance[i][j - 1] + 1, prefixLevenshteinDistance[i - 1][j - 1] + substitutionCost);
        });
    });
    return prefixLevenshteinDistance[length1 - 1][length2 - 1];
}
exports.computeLevenshteinDistance = computeLevenshteinDistance;

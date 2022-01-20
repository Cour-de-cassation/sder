"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringComparator = void 0;
var computeLevenshteinDistance_1 = require("./computeLevenshteinDistance");
var normalizeString_1 = require("./normalizeString");
var compareNormalizedStrings_1 = require("./compareNormalizedStrings");
var stringComparator = {
    insensitiveEqual: function (str1, str2) {
        var normalizedStr1 = normalizeString_1.normalizeString(str1);
        var normalizedStr2 = normalizeString_1.normalizeString(str2);
        return normalizedStr1 === normalizedStr2;
    },
    normalizeString: normalizeString_1.normalizeString,
    compareNormalizedStrings: compareNormalizedStrings_1.compareNormalizedStrings,
    similar: function (str1, str2, threshold) {
        var normalizedStr1 = normalizeString_1.normalizeString(str1);
        var normalizedStr2 = normalizeString_1.normalizeString(str2);
        var levenshteinDistance = computeLevenshteinDistance_1.computeLevenshteinDistance(normalizedStr1, normalizedStr2);
        if (Math.min(normalizedStr1.length, normalizedStr2.length) <= 4) {
            return levenshteinDistance <= 1;
        }
        else {
            return levenshteinDistance <= threshold;
        }
    },
};
exports.stringComparator = stringComparator;

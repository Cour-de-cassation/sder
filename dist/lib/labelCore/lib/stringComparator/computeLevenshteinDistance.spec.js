"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computeLevenshteinDistance_1 = require("./computeLevenshteinDistance");
describe('computeLevenshteinDistance', function () {
    it('should link the annotations of a same category with only different case (case 1)', function () {
        var str1 = 'LALA';
        var str2 = 'LOLO';
        var levenshteinDistance = computeLevenshteinDistance_1.computeLevenshteinDistance(str1, str2);
        expect(levenshteinDistance).toEqual(2);
    });
    it('should link the annotations of a same category with only different case (case 2)', function () {
        var str1 = 'Dupont';
        var str2 = 'Dupond';
        var levenshteinDistance = computeLevenshteinDistance_1.computeLevenshteinDistance(str1, str2);
        expect(levenshteinDistance).toEqual(1);
    });
    it('should link the annotations of a same category with only different case (case 3)', function () {
        var str1 = 'NICHE';
        var str2 = 'CHIENS';
        var levenshteinDistance = computeLevenshteinDistance_1.computeLevenshteinDistance(str1, str2);
        expect(levenshteinDistance).toEqual(5);
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringComparator_1 = require("./stringComparator");
describe('stringComparator', function () {
    describe('insensitiveEqual', function () {
        it('should return true if the words are equal', function () {
            var str1 = 'lala';
            var str2 = 'lala';
            var result = stringComparator_1.stringComparator.insensitiveEqual(str1, str2);
            expect(result).toEqual(true);
        });
        it('should return true if the words are equal (case insensitive)', function () {
            var str1 = 'lala';
            var str2 = 'LALA';
            var result = stringComparator_1.stringComparator.insensitiveEqual(str1, str2);
            expect(result).toEqual(true);
        });
        it('should return true if the words are equal (case accent insensitive)', function () {
            var str1 = 'lala';
            var str2 = 'lâlà';
            var result = stringComparator_1.stringComparator.insensitiveEqual(str1, str2);
            expect(result).toEqual(true);
        });
    });
    describe('similar', function () {
        it('should return true if the words are similar (Levenshtein distance inferior than 2)', function () {
            var str1 = 'LALAL';
            var str2 = 'LOLOL';
            var result = stringComparator_1.stringComparator.similar(str1, str2, 2);
            expect(result).toEqual(true);
        });
        it('should return false if the words are not similar (Levenshtein distance superior than 2)', function () {
            var str1 = 'LALAL';
            var str2 = 'LOCOL';
            var result = stringComparator_1.stringComparator.similar(str1, str2, 2);
            expect(result).toEqual(false);
        });
        it('should return true if the words are similar with a custom threshold', function () {
            var str1 = 'LALAL';
            var str2 = 'GOGOL';
            var result = stringComparator_1.stringComparator.similar(str1, str2, 4);
            expect(result).toEqual(true);
        });
        it('should return false if the words are not similar with a custom threshold', function () {
            var str1 = 'LALAL';
            var str2 = 'GOGORL';
            var result = stringComparator_1.stringComparator.similar(str1, str2, 4);
            expect(result).toEqual(false);
        });
        it('should return true if the words are similar (Levenshtein distance inferior than 2) (case insensitive)', function () {
            var str1 = 'lalaL';
            var str2 = 'LOLOL';
            var result = stringComparator_1.stringComparator.similar(str1, str2, 2);
            expect(result).toEqual(true);
        });
        it('should return true if the words are similar (Levenshtein distance inferior than 2) (case accent insensitive)', function () {
            var str1 = 'Duponte';
            var str2 = 'Dûpond';
            var result = stringComparator_1.stringComparator.similar(str1, str2, 2);
            expect(result).toEqual(true);
        });
    });
});

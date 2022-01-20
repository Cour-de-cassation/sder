"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indexer_1 = require("./indexer");
describe('indexer', function () {
    describe('assertEveryIdIsDefined', function () {
        var datas = { a: 'STRING1', b: 'STRING2', c: 'STRING3' };
        var buildErrorDescription = function (id) { return "No objet found for id " + id; };
        it('should not throw error', function () {
            indexer_1.indexer.assertEveryIdIsDefined(['a', 'c'], datas, buildErrorDescription);
        });
        it('should throw error', function () {
            expect(function () { return indexer_1.indexer.assertEveryIdIsDefined(['a', 'd'], datas, buildErrorDescription); }).toThrowError(buildErrorDescription('d'));
        });
    });
    describe('indexBy', function () {
        it('should index by the given function', function () {
            var datas = [
                { a: 'STRING1', b: 1 },
                { a: 'STRING2', b: 2 },
                { a: 'STRING3', b: 3 },
            ];
            var indexedDatas = indexer_1.indexer.indexBy(datas, function (data) { return data.a; });
            expect(indexedDatas).toEqual({
                STRING1: datas[0],
                STRING2: datas[1],
                STRING3: datas[2],
            });
        });
    });
    describe('mapIndexBy', function () {
        it('should index by the given function', function () {
            var datas = [
                { a: 'STRING1', b: 1 },
                { a: 'STRING2', b: 2 },
                { a: 'STRING3', b: 3 },
            ];
            var indexedDatas = indexer_1.indexer.mapIndexBy(datas, function (data) { return data.a; }, function (data) { return data.b * data.b; });
            expect(indexedDatas).toEqual({
                STRING1: 1,
                STRING2: 4,
                STRING3: 9,
            });
        });
    });
    describe('indexManyBy', function () {
        it('should index by the given function', function () {
            var datas = [
                { a: 'STRING1', b: 1 },
                { a: 'STRING2', b: 2 },
                { a: 'STRING1', b: 3 },
                { a: 'STRING2', b: 4 },
                { a: 'STRING1', b: 5 },
            ];
            var indexedDatas = indexer_1.indexer.indexManyBy(datas, function (data) { return data.a; });
            expect(indexedDatas).toEqual({
                STRING1: [datas[0], datas[2], datas[4]],
                STRING2: [datas[1], datas[3]],
            });
        });
    });
});

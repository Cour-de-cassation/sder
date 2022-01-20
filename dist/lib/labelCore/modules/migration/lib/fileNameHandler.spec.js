"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var fileNameHandler_1 = require("./fileNameHandler");
var id_1 = require("../../../modules/id");
describe('fileNameHandler', function () {
    describe('sortFileNames', function () {
        it('should sort file names', function () {
            var ids = lodash_1.range(4).map(function () { return id_1.idModule.lib.buildId(); });
            var fileNames = [3, 1, 2, 0].map(function (order) {
                return fileNameHandler_1.fileNameHandler.buildFileName({ _id: ids[order], order: order, extension: 'ts' });
            });
            var sortedAscFileNames = fileNameHandler_1.fileNameHandler.sortFileNames(fileNames, 'asc');
            var sortedDescFileNames = fileNameHandler_1.fileNameHandler.sortFileNames(fileNames, 'desc');
            expect(sortedAscFileNames).toEqual([fileNames[3], fileNames[1], fileNames[2], fileNames[0]]);
            expect(sortedDescFileNames).toEqual([fileNames[0], fileNames[2], fileNames[1], fileNames[3]]);
        });
    });
    describe('parseFileName', function () {
        it('should extract id and order from file name', function () {
            var fileName = '23_60a28c374703857b2cd08d1b.ts';
            var _a = fileNameHandler_1.fileNameHandler.parseFileName(fileName), _id = _a._id, order = _a.order;
            expect(id_1.idModule.lib.convertToString(_id)).toBe('60a28c374703857b2cd08d1b');
            expect(order).toBe(23);
        });
    });
    describe('buildFileName', function () {
        it('should build file name', function () {
            var _id = id_1.idModule.lib.buildId('60a28c374703857b2cd08d1b');
            var fileName = fileNameHandler_1.fileNameHandler.buildFileName({ order: 11, _id: _id, extension: 'ts' });
            expect(fileName).toEqual('11_60a28c374703857b2cd08d1b.ts');
        });
    });
});

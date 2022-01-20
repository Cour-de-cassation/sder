"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileNameHandler = void 0;
var id_1 = require("../../../modules/id");
var fileNameHandler = {
    buildFileName: buildFileName,
    parseFileName: parseFileName,
    sortFileNames: sortFileNames,
};
exports.fileNameHandler = fileNameHandler;
function buildFileName(_a) {
    var _id = _a._id, order = _a.order, extension = _a.extension;
    return order + "_" + id_1.idModule.lib.convertToString(_id) + "." + extension;
}
function sortFileNames(fileNames, direction) {
    return __spreadArrays(fileNames).sort(function (fileName1, fileName2) {
        var order1 = parseFileName(fileName1).order;
        var order2 = parseFileName(fileName2).order;
        switch (direction) {
            case 'asc':
                return order1 - order2;
            case 'desc':
                return order2 - order1;
        }
    });
}
function parseFileName(fileName) {
    var FILENAME_REGEX = /([0-9]+)_([a-f\d]{24})\.(ts|js)/;
    var result = fileName.match(FILENAME_REGEX);
    if (!result || !result[1] || !result[2]) {
        throw new Error("Wrong format for migration filename : " + fileName);
    }
    var order = Number(result[1]);
    var _id = id_1.idModule.lib.buildId(result[2]);
    return { _id: _id, order: order };
}

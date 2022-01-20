"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvExtractor = void 0;
var csvExtractor = {
    convertDataToCsv: convertDataToCsv,
};
exports.csvExtractor = csvExtractor;
var DELIMITATOR_CHARACTER = ';';
function convertDataToCsv(data, fields) {
    return __spreadArrays([
        fields.map(function (field) { return field.title; }).join(DELIMITATOR_CHARACTER)
    ], data.map(function (row) {
        return fields.map(function (field) { return field.extractor(row); }).join(DELIMITATOR_CHARACTER);
    })).join('\n');
}

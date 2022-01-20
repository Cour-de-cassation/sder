"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexer = void 0;
var errors_1 = require("../errors");
var indexer = {
    assertEveryIdIsDefined: assertEveryIdIsDefined,
    indexBy: indexBy,
    indexManyBy: indexManyBy,
    mapIndexBy: mapIndexBy,
};
exports.indexer = indexer;
function indexBy(datas, indexFun) {
    var indexedDatas = {};
    datas.forEach(function (data) { return (indexedDatas[indexFun(data)] = data); });
    return indexedDatas;
}
function mapIndexBy(datas, indexFun, mapper) {
    var indexedDatas = {};
    datas.forEach(function (data) { return (indexedDatas[indexFun(data)] = mapper(data)); });
    return indexedDatas;
}
function indexManyBy(datas, indexFun) {
    var indexedDatas = {};
    datas.forEach(function (data) {
        var index = indexFun(data);
        if (!indexedDatas[index]) {
            indexedDatas[index] = [];
        }
        indexedDatas[index].push(data);
    });
    return indexedDatas;
}
function assertEveryIdIsDefined(ids, itemsById, buildErrorDescription) {
    var idWithNoItem = ids.find(function (_id) { return !itemsById[_id]; });
    if (idWithNoItem) {
        throw errors_1.errorHandlers.notFoundErrorHandler.build(buildErrorDescription(idWithNoItem));
    }
}

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEntityIdOrderMapper = void 0;
var lodash_1 = require("lodash");
var annotation_1 = require("../../../modules/annotation");
function buildEntityIdOrderMapper(entityIds) {
    var grouppedByCategoryEntityIds = lodash_1.groupBy(entityIds, annotation_1.annotationModule.lib.entityIdHandler.getCategory);
    return Object.keys(grouppedByCategoryEntityIds).reduce(function (entityIdOrderMapper, category) {
        var grouppedEntityIds = grouppedByCategoryEntityIds[category];
        var spreadEntityIds = grouppedEntityIds.reduce(function (accumulator, entityId) {
            var _a;
            var orderInCategory = __spreadArrays(grouppedEntityIds).sort(function (entityIdA, entityIdB) { return entityIdA.localeCompare(entityIdB); })
                .indexOf(entityId);
            if (orderInCategory === -1) {
                throw new Error("Error in buildEntityIdOrderMapper: \"" + entityId + "\" not found for category \"" + category + "\" among \"" + grouppedEntityIds.join(', ') + "\"");
            }
            return __assign(__assign({}, accumulator), (_a = {}, _a[entityId] = orderInCategory, _a));
        }, {});
        return __assign(__assign({}, entityIdOrderMapper), spreadEntityIds);
    }, {});
}
exports.buildEntityIdOrderMapper = buildEntityIdOrderMapper;

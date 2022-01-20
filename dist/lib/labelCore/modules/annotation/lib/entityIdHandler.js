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
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityIdHandler = void 0;
var entityIdHandler = {
    compute: compute,
    getCategory: getCategory,
    getText: getText,
    syncEntityId: syncEntityId,
    syncEntityIdWithCategory: syncEntityIdWithCategory,
};
exports.entityIdHandler = entityIdHandler;
function compute(category, text) {
    return category + "_" + text;
}
function syncEntityId(annotation) {
    return __assign(__assign({}, annotation), { entityId: compute(annotation.category, annotation.text) });
}
function syncEntityIdWithCategory(annotation) {
    return __assign(__assign({}, annotation), { entityId: compute(annotation.category, getText(annotation.entityId)) });
}
function getCategory(entityId) {
    var category = parseEntityId(entityId).category;
    return category;
}
function getText(entityId) {
    var text = parseEntityId(entityId).text;
    return text;
}
function parseEntityId(entityId) {
    var parsedEntityId = entityId.split('_');
    return { category: parsedEntityId[0], text: parsedEntityId[1] };
}

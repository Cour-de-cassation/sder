"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAnnotations = void 0;
function sortAnnotations(annotations) {
    return __spreadArrays(annotations).sort(function (annotation1, annotation2) {
        return annotation1.start - annotation2.start ||
            annotation1.entityId.localeCompare(annotation2.entityId) ||
            annotation1.text.localeCompare(annotation2.text) ||
            annotation1.category.localeCompare(annotation2.category);
    });
}
exports.sortAnnotations = sortAnnotations;

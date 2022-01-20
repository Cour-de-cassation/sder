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
exports.annotationUpdater = void 0;
var entityIdHandler_1 = require("./entityIdHandler");
var annotationUpdater = {
    updateAnnotationCategory: updateAnnotationCategory,
    updateAnnotationsCategory: updateAnnotationsCategory,
    updateAnnotationText: updateAnnotationText,
};
exports.annotationUpdater = annotationUpdater;
function updateAnnotationsCategory(annotations, newCategory, shouldUpdate) {
    var updatedAnnotations = [];
    return {
        newAnnotations: annotations.map(function (annotation) {
            if (shouldUpdate(annotation)) {
                updatedAnnotations.push(annotation);
                return entityIdHandler_1.entityIdHandler.syncEntityIdWithCategory(__assign(__assign({}, annotation), { category: newCategory }));
            }
            else {
                return annotation;
            }
        }),
        updatedAnnotations: updatedAnnotations,
    };
}
function updateAnnotationCategory(annotation, newCategory) {
    return entityIdHandler_1.entityIdHandler.syncEntityId(__assign(__assign({}, annotation), { category: newCategory }));
}
function updateAnnotationText(annotation, newText, newStart) {
    return entityIdHandler_1.entityIdHandler.syncEntityId(__assign(__assign({}, annotation), { start: newStart, text: newText }));
}

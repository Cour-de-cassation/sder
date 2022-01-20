"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationHandler = void 0;
var annotation_1 = require("../../modules/annotation");
var annotationLinkHandler_1 = require("../annotationLinkHandler");
var autoLink_1 = require("../autoLink");
var annotationHandler = {
    create: create,
    createManyLinked: createManyLinked,
    createAll: createAll,
    deleteByTextAndCategory: deleteByTextAndCategory,
    deleteByTextAndStart: deleteByTextAndStart,
    deleteByEntityId: deleteByEntityId,
    getAnnotationIndex: getAnnotationIndex,
    updateManyCategory: updateManyCategory,
    updateOneCategory: updateOneCategory,
    updateOneText: updateOneText,
};
exports.annotationHandler = annotationHandler;
function create(annotations, fields, settings) {
    var createdAnnotation = annotation_1.annotationModule.lib.buildAnnotation(fields);
    var newAnnotations = __spreadArrays([createdAnnotation], annotations);
    return autoLink_1.autoLinker.autoLink([createdAnnotation], newAnnotations, settings);
}
function createManyLinked(annotations, fieldsArray) {
    var createdAnnotations = fieldsArray.map(function (fields) { return annotation_1.annotationModule.lib.buildAnnotation(fields); });
    var linkedAnnotations = createdAnnotations.map(function (annotation, index) {
        if (index === 0) {
            return annotation;
        }
        return annotation_1.annotationModule.lib.annotationLinker.link(annotation, createdAnnotations[0]);
    });
    var newAnnotations = __spreadArrays(annotations, linkedAnnotations);
    return newAnnotations;
}
function createAll(annotations, category, annotationTextsAndIndices, settings) {
    var createdAnnotations = annotationTextsAndIndices.map(function (_a) {
        var index = _a.index, text = _a.text;
        return annotation_1.annotationModule.lib.buildAnnotation({ category: category, start: index, text: text });
    });
    var newAnnotations = createdAnnotations.concat(annotations);
    return autoLink_1.autoLinker.autoLink(createdAnnotations, newAnnotations, settings);
}
function deleteByTextAndCategory(annotations, annotation) {
    var newAnnotations = annotations.filter(function (anotherAnnotation) {
        return anotherAnnotation.category !== annotation.category || anotherAnnotation.text !== annotation.text;
    });
    var annotationsLinkedToDeletedAnnotation = annotationLinkHandler_1.annotationLinkHandler.getLinkedAnnotationRepresentatives(annotation.entityId, newAnnotations);
    if (annotationsLinkedToDeletedAnnotation.length === 0) {
        return newAnnotations;
    }
    else {
        return annotationLinkHandler_1.annotationLinkHandler.updateMainLinkEntity(annotationsLinkedToDeletedAnnotation[0], newAnnotations);
    }
}
function deleteByTextAndStart(annotations, annotation) {
    var newAnnotations = annotations.filter(function (anotherAnnotation) { return anotherAnnotation.text !== annotation.text || anotherAnnotation.start !== annotation.start; });
    var annotationsLinkedToDeletedAnnotation = annotationLinkHandler_1.annotationLinkHandler.getLinkedAnnotationRepresentatives(annotation.entityId, newAnnotations);
    if (annotationsLinkedToDeletedAnnotation.length === 0) {
        return newAnnotations;
    }
    else {
        return annotationLinkHandler_1.annotationLinkHandler.updateMainLinkEntity(annotationsLinkedToDeletedAnnotation[0], newAnnotations);
    }
}
function deleteByEntityId(annotations, entityId) {
    return annotations.filter(function (annotation) { return annotation.entityId !== entityId; });
}
function updateManyCategory(annotations, entityId, category, settings) {
    var _a = annotation_1.annotationModule.lib.annotationUpdater.updateAnnotationsCategory(annotations, category, function (annotation) { return annotation.entityId === entityId; }), newAnnotations = _a.newAnnotations, updatedAnnotations = _a.updatedAnnotations;
    return autoLink_1.autoLinker.autoLink(updatedAnnotations, newAnnotations, settings);
}
function updateOneCategory(annotations, text, start, category, settings) {
    var updateAnnotation;
    var newAnnotations = annotations.map(function (annotation) {
        if (annotation.text === text && annotation.start === start) {
            updateAnnotation = annotation;
            return annotation_1.annotationModule.lib.annotationUpdater.updateAnnotationCategory(annotation, category);
        }
        else {
            return annotation;
        }
    });
    return updateAnnotation ? autoLink_1.autoLinker.autoLink([updateAnnotation], newAnnotations, settings) : newAnnotations;
}
function updateOneText(annotations, oldText, start, newText, settings) {
    var updateAnnotation;
    var newAnnotations = annotations.map(function (annotation) {
        if (annotation.text === oldText && annotation.start === start) {
            updateAnnotation = annotation;
            return annotation_1.annotationModule.lib.annotationUpdater.updateAnnotationText(annotation, newText, start);
        }
        else {
            return annotation;
        }
    });
    return updateAnnotation ? autoLink_1.autoLinker.autoLink([updateAnnotation], newAnnotations, settings) : newAnnotations;
}
function getAnnotationIndex(annotations, annotation) {
    var sameEntityAnnotations = annotations.filter(function (anotherAnnotation) { return anotherAnnotation.entityId === annotation.entityId; });
    var sortedSameEntityAnnotations = sameEntityAnnotations.sort(function (sameEntityAnnotation1, sameEntityAnnotation2) { return sameEntityAnnotation1.start - sameEntityAnnotation2.start; });
    var annotationIndex = sortedSameEntityAnnotations.findIndex(function (sameEntityAnnotation) { return sameEntityAnnotation.start === annotation.start; });
    return { index: annotationIndex + 1, total: sameEntityAnnotations.length };
}

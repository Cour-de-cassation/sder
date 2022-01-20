"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationOverlapDetector = void 0;
var annotation_1 = require("../../modules/annotation");
var annotationOverlapDetector = {
    isAnnotationTextOverlappedWithAnyAnnotations: isAnnotationTextOverlappedWithAnyAnnotations,
    findOverlappingAnnotation: findOverlappingAnnotation,
};
exports.annotationOverlapDetector = annotationOverlapDetector;
function isAnnotationTextOverlappedWithAnyAnnotations(annotations, annotationStart, annotationText) {
    return annotations.some(function (otherAnnotation) {
        return annotation_1.annotationModule.lib.areOverlapping(annotation_1.annotationModule.lib.buildAnnotation({
            category: otherAnnotation.category,
            start: annotationStart,
            text: annotationText,
        }), otherAnnotation);
    });
}
function findOverlappingAnnotation(annotations, annotationStart, annotationText) {
    return annotations.find(function (otherAnnotation) {
        return annotation_1.annotationModule.lib.areOverlapping(annotation_1.annotationModule.lib.buildAnnotation({
            category: otherAnnotation.category,
            start: annotationStart,
            text: annotationText,
        }), otherAnnotation);
    });
}

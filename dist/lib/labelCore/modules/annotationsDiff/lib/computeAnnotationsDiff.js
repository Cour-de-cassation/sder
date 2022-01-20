"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeAnnotationsDiff = void 0;
var annotation_1 = require("../../annotation");
function computeAnnotationsDiff(previousAnnotations, nextAnnotations) {
    return {
        before: annotation_1.annotationModule.lib.sortAnnotations(previousAnnotations.filter(function (previousAnnotation) {
            return !nextAnnotations.some(function (annotation) { return annotation_1.annotationModule.lib.comparator.equal(annotation, previousAnnotation); });
        })),
        after: annotation_1.annotationModule.lib.sortAnnotations(nextAnnotations.filter(function (nextAnnotation) {
            return !previousAnnotations.some(function (annotation) { return annotation_1.annotationModule.lib.comparator.equal(annotation, nextAnnotation); });
        })),
    };
}
exports.computeAnnotationsDiff = computeAnnotationsDiff;

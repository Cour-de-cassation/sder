"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertAnnotationsDiffCompatibleWithPreviousAnnotations = void 0;
var annotationOverlapDetector_1 = require("../../../lib/annotationOverlapDetector");
var annotation_1 = require("../../annotation");
function assertAnnotationsDiffCompatibleWithPreviousAnnotations(previousAnnotations, annotationsDiff, actionToPerform) {
    var filteredPreviousAnnotations = previousAnnotations.filter(function (previousAnnotation) {
        return isAnnotationNotInArray(previousAnnotation, annotationsDiff.before);
    });
    var overlappingAnnotations = extractOverlappingCouple(annotationsDiff.after, filteredPreviousAnnotations);
    if (overlappingAnnotations) {
        var errorMessage = (actionToPerform ? "Could not " + actionToPerform + ": " : '') + "annotations diff previousAnnotation " + annotation_1.annotationModule.lib.stringify(overlappingAnnotations.previous) + " overlaps with afterAnnotation " + annotation_1.annotationModule.lib.stringify(overlappingAnnotations.after);
        throw new Error(errorMessage);
    }
    return true;
}
exports.assertAnnotationsDiffCompatibleWithPreviousAnnotations = assertAnnotationsDiffCompatibleWithPreviousAnnotations;
function extractOverlappingCouple(afterAnnotations, previousAnnotations) {
    for (var _i = 0, afterAnnotations_1 = afterAnnotations; _i < afterAnnotations_1.length; _i++) {
        var afterAnnotation = afterAnnotations_1[_i];
        var overlappingBeforeAnnotation = annotationOverlapDetector_1.annotationOverlapDetector.findOverlappingAnnotation(previousAnnotations, afterAnnotation.start, afterAnnotation.text);
        if (overlappingBeforeAnnotation) {
            return { after: afterAnnotation, previous: overlappingBeforeAnnotation };
        }
    }
}
function isAnnotationNotInArray(annotation, annotations) {
    return !annotations.some(function (otherAnnotation) { return annotation_1.annotationModule.lib.comparator.equal(annotation, otherAnnotation); });
}

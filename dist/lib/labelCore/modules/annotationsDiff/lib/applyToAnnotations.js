"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyToAnnotations = void 0;
var annotation_1 = require("../../annotation");
function applyToAnnotations(annotations, annotationsDiff) {
    var newAnnotations = annotations.filter(function (annotation) { return !annotationsDiff.before.includes(annotation); });
    newAnnotations.push.apply(newAnnotations, annotationsDiff.after);
    return annotation_1.annotationModule.lib.sortAnnotations(newAnnotations);
}
exports.applyToAnnotations = applyToAnnotations;

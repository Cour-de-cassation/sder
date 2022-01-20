"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertAnnotationsDiffAutoConsistent = void 0;
var annotation_1 = require("../../annotation");
function assertAnnotationsDiffAutoConsistent(annotationsDiff, actionToPerform) {
    var afterAnnotations = __spreadArrays(annotationsDiff.after).sort(function (annotationA, annotationB) { return annotationA.start - annotationB.start; });
    for (var i = 1, l = afterAnnotations.length; i < l; i++) {
        var annotationA = afterAnnotations[i - 1];
        var annotationB = afterAnnotations[i];
        if (annotation_1.annotationModule.lib.areOverlapping(annotationA, annotationB)) {
            var errorMessage = (actionToPerform ? "Could not " + actionToPerform + ": " : '') + "annotations " + annotation_1.annotationModule.lib.stringify(annotationA) + " and " + annotation_1.annotationModule.lib.stringify(annotationB) + " overlap.";
            throw new Error(errorMessage);
        }
    }
    return true;
}
exports.assertAnnotationsDiffAutoConsistent = assertAnnotationsDiffAutoConsistent;

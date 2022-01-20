"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.squash = void 0;
var annotation_1 = require("../../annotation");
function squash(annotationsDiffs) {
    return annotationsDiffs.reduce(function (accumulator, annotationsDiff) {
        var updatedBefore = __spreadArrays(accumulator.before, annotationsDiff.before);
        var updatedAfter = __spreadArrays(accumulator.after, annotationsDiff.after);
        return {
            before: updatedBefore.filter(function (annotation) {
                return !updatedAfter.some(function (anotherAnnotation) {
                    return annotation_1.annotationModule.lib.comparator.equal(anotherAnnotation, annotation);
                });
            }),
            after: updatedAfter.filter(function (annotation) {
                return !updatedBefore.some(function (anotherAnnotation) {
                    return annotation_1.annotationModule.lib.comparator.equal(anotherAnnotation, annotation);
                });
            }),
        };
    }, { before: [], after: [] });
}
exports.squash = squash;

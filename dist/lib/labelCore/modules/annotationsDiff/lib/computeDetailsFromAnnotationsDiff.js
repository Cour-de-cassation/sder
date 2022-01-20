"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeDetailsFromAnnotationsDiff = void 0;
var annotation_1 = require("../../annotation");
function computeDetailsFromAnnotationsDiff(annotationsDiff) {
    var deletedAnnotations = computeDeletedAnnotations(annotationsDiff);
    var addedAnnotations = computeAddedAnnotations(annotationsDiff);
    var _a = computeModifiedAnnotations(annotationsDiff), categoryChangedAnnotations = _a.categoryChangedAnnotations, resizedBiggerAnnotations = _a.resizedBiggerAnnotations, resizedSmallerAnnotations = _a.resizedSmallerAnnotations;
    return {
        addedAnnotations: addedAnnotations,
        categoryChangedAnnotations: categoryChangedAnnotations,
        deletedAnnotations: deletedAnnotations,
        resizedBiggerAnnotations: resizedBiggerAnnotations,
        resizedSmallerAnnotations: resizedSmallerAnnotations,
    };
}
exports.computeDetailsFromAnnotationsDiff = computeDetailsFromAnnotationsDiff;
function computeDeletedAnnotations(annotationsDiff) {
    return annotationsDiff.before.filter(function (beforeAnnotation) {
        return annotationsDiff.after.every(function (afterAnnotation) {
            return !annotation_1.annotationModule.lib.comparator.equalModuloCategory(beforeAnnotation, afterAnnotation) &&
                !annotation_1.annotationModule.lib.areOverlapping(beforeAnnotation, afterAnnotation);
        });
    });
}
function computeAddedAnnotations(annotationsDiff) {
    return annotationsDiff.after.filter(function (afterAnnotation) {
        return annotationsDiff.before.every(function (beforeAnnotation) {
            return !annotation_1.annotationModule.lib.comparator.equalModuloCategory(beforeAnnotation, afterAnnotation) &&
                !annotation_1.annotationModule.lib.areOverlapping(beforeAnnotation, afterAnnotation);
        });
    });
}
function computeModifiedAnnotations(annotationsDiff) {
    var resizedBiggerAnnotations = computeResizedBiggerAnnotations(annotationsDiff);
    var resizedSmallerAnnotations = computeResizedSmallerAnnotations(annotationsDiff);
    var categoryChangedAnnotations = computeCategoryChangedAnnotations(annotationsDiff);
    return { categoryChangedAnnotations: categoryChangedAnnotations, resizedBiggerAnnotations: resizedBiggerAnnotations, resizedSmallerAnnotations: resizedSmallerAnnotations };
}
function computeResizedBiggerAnnotations(annotationsDiff) {
    return annotationsDiff.before.reduce(function (resizedBiggerAnnotations, beforeAnnotation) {
        var resizedBiggerAnnotation = annotationsDiff.after.find(function (afterAnnotation) {
            return annotation_1.annotationModule.lib.areOverlapping(beforeAnnotation, afterAnnotation) &&
                !annotation_1.annotationModule.lib.comparator.equalModuloCategory(beforeAnnotation, afterAnnotation);
        });
        if (!resizedBiggerAnnotation || beforeAnnotation.text.length >= resizedBiggerAnnotation.text.length) {
            return resizedBiggerAnnotations;
        }
        else {
            return __spreadArrays(resizedBiggerAnnotations, [
                [beforeAnnotation, resizedBiggerAnnotation],
            ]);
        }
    }, []);
}
function computeResizedSmallerAnnotations(annotationsDiff) {
    return annotationsDiff.before.reduce(function (resizedSmallerAnnotations, beforeAnnotation) {
        var resizedSmallerAnnotation = annotationsDiff.after.find(function (afterAnnotation) {
            return annotation_1.annotationModule.lib.areOverlapping(beforeAnnotation, afterAnnotation) &&
                !annotation_1.annotationModule.lib.comparator.equalModuloCategory(beforeAnnotation, afterAnnotation);
        });
        if (!resizedSmallerAnnotation || beforeAnnotation.text.length < resizedSmallerAnnotation.text.length) {
            return resizedSmallerAnnotations;
        }
        else {
            return __spreadArrays(resizedSmallerAnnotations, [
                [beforeAnnotation, resizedSmallerAnnotation],
            ]);
        }
    }, []);
}
function computeCategoryChangedAnnotations(annotationsDiff) {
    return annotationsDiff.before.reduce(function (modifiedAnnotations, beforeAnnotation) {
        var strictlyModifiedAnnotation = annotationsDiff.after.find(function (afterAnnotation) {
            return annotation_1.annotationModule.lib.comparator.equalModuloCategory(beforeAnnotation, afterAnnotation) &&
                beforeAnnotation.category !== afterAnnotation.category;
        });
        if (!strictlyModifiedAnnotation) {
            return modifiedAnnotations;
        }
        else {
            return __spreadArrays(modifiedAnnotations, [
                [beforeAnnotation, strictlyModifiedAnnotation],
            ]);
        }
    }, []);
}

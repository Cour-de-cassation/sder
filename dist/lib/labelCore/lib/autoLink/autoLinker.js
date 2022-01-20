"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoLinker = void 0;
var annotationLinkHandler_1 = require("../annotationLinkHandler");
var stringComparator_1 = require("../stringComparator");
var autoLinker = {
    autoLink: autoLink,
    autoLinkAll: autoLinkAll,
};
exports.autoLinker = autoLinker;
function autoLinkAll(annotations, settings) {
    return autoLink(annotations, annotations, settings);
}
function autoLink(annotationsToLink, annotations, settings) {
    return annotationsToLink.reduce(function (linkedAnnotations, annotation) {
        var annotationsToLinkTo = computeAnnotationsToLinkTo(annotation, linkedAnnotations, settings);
        return linkToAnnotations(annotation, annotationsToLinkTo, linkedAnnotations);
    }, annotations);
}
function linkToAnnotations(annotation, annotationsToLinkTo, annotations) {
    return annotationsToLinkTo.reduce(function (linkedAnnotations, annotationToLinkTo) {
        return annotationLinkHandler_1.annotationLinkHandler.link(annotation, annotationToLinkTo, linkedAnnotations);
    }, annotations);
}
function computeAnnotationsToLinkTo(annotation, annotations, settings) {
    return annotations.filter(function (someAnnotation) {
        var autoLinkSensitivity = settings[annotation.category].autoLinkSensitivity;
        return (annotation.category === someAnnotation.category &&
            !annotationLinkHandler_1.annotationLinkHandler.isLinkedTo(annotation, someAnnotation) &&
            autoLinkSensitivity.reduce(function (accumulator, stringComparisonSensitivity) {
                switch (stringComparisonSensitivity.kind) {
                    case 'caseInsensitive':
                        return accumulator || stringComparator_1.stringComparator.insensitiveEqual(annotation.text, someAnnotation.text);
                    case 'levenshteinDistance':
                        return (accumulator ||
                            stringComparator_1.stringComparator.similar(someAnnotation.text, annotation.text, stringComparisonSensitivity.threshold));
                    case 'inclusion':
                        return accumulator || isSubWord(annotation, someAnnotation) || isSubWord(someAnnotation, annotation);
                }
            }, false));
    });
}
function isSubWord(annotation1, annotation2) {
    return (stringComparator_1.stringComparator
        .normalizeString(annotation2.text)
        .includes(stringComparator_1.stringComparator.normalizeString(annotation1.text) + " ") ||
        stringComparator_1.stringComparator
            .normalizeString(annotation2.text)
            .includes(" " + stringComparator_1.stringComparator.normalizeString(annotation1.text)));
}

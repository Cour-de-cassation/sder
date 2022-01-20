"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationTextDetector = void 0;
var annotationOverlapDetector_1 = require("../annotationOverlapDetector");
var stringComparator_1 = require("../stringComparator");
var annotationTextDetector = {
    detectAnnotationTextsAndIndices: detectAnnotationTextsAndIndices,
};
exports.annotationTextDetector = annotationTextDetector;
function detectAnnotationTextsAndIndices(_a) {
    var documentText = _a.documentText, annotationText = _a.annotationText, annotations = _a.annotations;
    var currentIndex = -1;
    var textsAndIndices = [];
    do {
        var annotationDetection = computeAnnotationDetection(documentText, annotationText, currentIndex);
        currentIndex = annotationDetection.index;
        if (currentIndex !== -1 &&
            !annotationOverlapDetector_1.annotationOverlapDetector.isAnnotationTextOverlappedWithAnyAnnotations(annotations, currentIndex, annotationDetection.text) &&
            !isAnnotationTextInsideLargerWord(documentText, annotationText, currentIndex)) {
            textsAndIndices.push({ index: currentIndex, text: annotationDetection.text });
        }
    } while (currentIndex !== -1);
    return textsAndIndices;
}
function isAnnotationTextInsideLargerWord(documentText, annotationText, index) {
    var boundaryCharacterRegex = /^[a-zA-Z0-9ÈÉÊÎÏÔÖÙÚÛÜèéêîïôöùû]/;
    var isWordBeginningOnBoundary = index === 0 ||
        !documentText[index].match(boundaryCharacterRegex) ||
        !documentText[index - 1].match(boundaryCharacterRegex);
    var isWordEndingOnBoundary = index + annotationText.length === documentText.length ||
        !documentText[index + annotationText.length - 1].match(boundaryCharacterRegex) ||
        !documentText[index + annotationText.length].match(boundaryCharacterRegex);
    return !isWordBeginningOnBoundary || !isWordEndingOnBoundary;
}
function computeAnnotationDetection(documentText, annotationText, currentIndex) {
    var text = stringComparator_1.stringComparator.normalizeString(annotationText);
    var index = stringComparator_1.stringComparator.normalizeString(documentText).indexOf(text, currentIndex + 1);
    if (index !== -1) {
        return {
            index: index,
            text: documentText.substr(index, text.length),
        };
    }
    return {
        text: annotationText,
        index: -1,
    };
}

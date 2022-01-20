"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnnotationTextInAnnotations = void 0;
var splitTextIntoWords_1 = require("./splitTextIntoWords");
function isAnnotationTextInAnnotations(annotation, annotationsToSearchIn) {
    var annotationWords = splitTextIntoWords_1.splitTextIntoWords(annotation.text, annotation.start);
    return annotationWords.every(function (word) {
        return annotationsToSearchIn.some(function (annotationToSearchIn) {
            return annotationToSearchIn.text.includes(word.text) &&
                annotationToSearchIn.start <= word.start &&
                annotationToSearchIn.start + annotationToSearchIn.text.length >= word.start + word.text.length;
        });
    });
}
exports.isAnnotationTextInAnnotations = isAnnotationTextInAnnotations;

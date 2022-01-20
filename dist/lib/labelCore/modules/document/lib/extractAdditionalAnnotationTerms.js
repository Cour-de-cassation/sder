"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAdditionalAnnotationTerms = void 0;
var DELIMITATOR_CHARACTER = '/';
function extractAdditionalAnnotationTerms(additionalTermsToAnnotate) {
    return additionalTermsToAnnotate.split(DELIMITATOR_CHARACTER).map(function (annotationTerm) { return annotationTerm.trim(); });
}
exports.extractAdditionalAnnotationTerms = extractAdditionalAnnotationTerms;

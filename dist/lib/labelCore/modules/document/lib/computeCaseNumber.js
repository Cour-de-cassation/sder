"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeCaseNumber = void 0;
function computeCaseNumber(document) {
    if (document.decisionMetadata.boundDecisionDocumentNumbers.length > 0) {
        return document.decisionMetadata.boundDecisionDocumentNumbers[0];
    }
    return document.documentNumber;
}
exports.computeCaseNumber = computeCaseNumber;

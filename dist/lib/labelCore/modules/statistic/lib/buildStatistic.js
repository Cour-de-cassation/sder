"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStatistic = void 0;
var document_1 = require("../../document");
var id_1 = require("../../id");
function buildStatistic(_a) {
    var annotationsCount = _a.annotationsCount, humanTreatmentsSummary = _a.humanTreatmentsSummary, document = _a.document, linkedEntitiesCount = _a.linkedEntitiesCount, treatmentInfo = _a.treatmentInfo, lastUpdateDate = _a.lastUpdateDate;
    return {
        _id: id_1.idModule.lib.buildId(),
        annotationsCount: annotationsCount,
        appealNumber: document.decisionMetadata.appealNumber || undefined,
        chamberName: document.decisionMetadata.chamberName
            ? document.decisionMetadata.chamberName.trim().toLowerCase()
            : undefined,
        decisionDate: document.decisionMetadata.date,
        documentExternalId: document.externalId,
        documentNumber: document.documentNumber,
        jurisdiction: document.decisionMetadata.jurisdiction
            ? document.decisionMetadata.jurisdiction.trim().toLowerCase()
            : undefined,
        linkedEntitiesCount: linkedEntitiesCount,
        session: document.decisionMetadata.session || undefined,
        publicationCategory: document.publicationCategory,
        source: document.source,
        surAnnotationsCount: treatmentInfo.surAnnotationsCount,
        subAnnotationsSensitiveCount: treatmentInfo.subAnnotationsSensitiveCount,
        subAnnotationsNonSensitiveCount: treatmentInfo.subAnnotationsNonSensitiveCount,
        treatmentDate: lastUpdateDate,
        treatmentsSummary: humanTreatmentsSummary,
        wordsCount: document_1.documentModule.lib.countWords(document),
    };
}
exports.buildStatistic = buildStatistic;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticGenerator = void 0;
var id_1 = require("../../id");
var statisticGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, annotationsCount = _b.annotationsCount, appealNumber = _b.appealNumber, chamberName = _b.chamberName, decisionDate = _b.decisionDate, documentExternalId = _b.documentExternalId, documentNumber = _b.documentNumber, jurisdiction = _b.jurisdiction, linkedEntitiesCount = _b.linkedEntitiesCount, publicationCategory = _b.publicationCategory, session = _b.session, source = _b.source, subAnnotationsSensitiveCount = _b.subAnnotationsSensitiveCount, surAnnotationsCount = _b.surAnnotationsCount, subAnnotationsNonSensitiveCount = _b.subAnnotationsNonSensitiveCount, treatmentDate = _b.treatmentDate, treatmentsSummary = _b.treatmentsSummary, wordsCount = _b.wordsCount;
        return ({
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            annotationsCount: annotationsCount ? annotationsCount : 0,
            appealNumber: appealNumber ? appealNumber : undefined,
            chamberName: chamberName || "SOURCE_" + Math.random(),
            decisionDate: decisionDate,
            documentExternalId: documentExternalId ? documentExternalId : id_1.idModule.lib.convertToString(id_1.idModule.lib.buildId()),
            documentNumber: documentNumber !== undefined ? documentNumber : Math.floor(Math.random() * 1000000),
            jurisdiction: jurisdiction,
            linkedEntitiesCount: linkedEntitiesCount ? linkedEntitiesCount : 0,
            publicationCategory: publicationCategory ? publicationCategory : [],
            session: session || undefined,
            source: source ? source : "SOURCE_" + Math.random(),
            subAnnotationsNonSensitiveCount: subAnnotationsNonSensitiveCount !== undefined ? subAnnotationsNonSensitiveCount : 0,
            subAnnotationsSensitiveCount: subAnnotationsSensitiveCount !== undefined ? subAnnotationsSensitiveCount : 0,
            surAnnotationsCount: surAnnotationsCount !== undefined ? surAnnotationsCount : 0,
            treatmentDate: treatmentDate ? treatmentDate : new Date().getTime(),
            treatmentsSummary: treatmentsSummary ? treatmentsSummary : [],
            wordsCount: wordsCount ? wordsCount : 0,
        });
    },
};
exports.statisticGenerator = statisticGenerator;

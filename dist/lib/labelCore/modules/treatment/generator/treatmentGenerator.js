"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treatmentGenerator = void 0;
var annotationsDiff_1 = require("../../annotationsDiff");
var id_1 = require("../../id");
var treatmentGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, annotationsDiff = _b.annotationsDiff, documentId = _b.documentId, duration = _b.duration, lastUpdateDate = _b.lastUpdateDate, order = _b.order, source = _b.source, subAnnotationsSensitiveCount = _b.subAnnotationsSensitiveCount, surAnnotationsCount = _b.surAnnotationsCount, subAnnotationsNonSensitiveCount = _b.subAnnotationsNonSensitiveCount;
        return ({
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            annotationsDiff: annotationsDiff ? annotationsDiff : annotationsDiff_1.annotationsDiffModule.generator.generate(),
            documentId: documentId ? id_1.idModule.lib.buildId(documentId) : id_1.idModule.lib.buildId(),
            duration: duration ? duration : 0,
            lastUpdateDate: lastUpdateDate ? lastUpdateDate : new Date().getTime(),
            order: order ? order : 0,
            source: source ? source : 'NLP',
            subAnnotationsNonSensitiveCount: subAnnotationsNonSensitiveCount !== undefined ? subAnnotationsNonSensitiveCount : 0,
            subAnnotationsSensitiveCount: subAnnotationsSensitiveCount !== undefined ? subAnnotationsSensitiveCount : 0,
            surAnnotationsCount: surAnnotationsCount !== undefined ? surAnnotationsCount : 0,
        });
    },
};
exports.treatmentGenerator = treatmentGenerator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treatmentModel = void 0;
var annotationsDiff_1 = require("../annotationsDiff");
var modelType_1 = require("../modelType");
var treatmentModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        _id: { kind: 'custom', content: 'id' },
        annotationsDiff: annotationsDiff_1.annotationsDiffModule.model,
        documentId: { kind: 'custom', content: 'id' },
        duration: { kind: 'primitive', content: 'number' },
        lastUpdateDate: { kind: 'primitive', content: 'number' },
        order: { kind: 'primitive', content: 'number' },
        surAnnotationsCount: {
            kind: 'primitive',
            content: 'number',
        },
        subAnnotationsSensitiveCount: {
            kind: 'primitive',
            content: 'number',
        },
        subAnnotationsNonSensitiveCount: {
            kind: 'primitive',
            content: 'number',
        },
        source: {
            kind: 'constant',
            content: ['annotator', 'admin', 'NLP', 'postProcess', 'supplementaryAnnotations'],
        },
    },
});
exports.treatmentModel = treatmentModel;

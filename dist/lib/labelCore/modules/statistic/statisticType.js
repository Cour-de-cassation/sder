"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticModel = void 0;
var documentType_1 = require("../document/documentType");
var modelType_1 = require("../modelType");
var statisticModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        _id: { kind: 'custom', content: 'id' },
        annotationsCount: { kind: 'primitive', content: 'number' },
        appealNumber: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'string' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        documentNumber: documentType_1.documentModel.content.documentNumber,
        decisionDate: documentType_1.documentModel.content.decisionMetadata.content.date,
        documentExternalId: { kind: 'primitive', content: 'string' },
        chamberName: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'string' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        jurisdiction: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'string' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        linkedEntitiesCount: { kind: 'primitive', content: 'number' },
        publicationCategory: { kind: 'array', content: { kind: 'primitive', content: 'string' } },
        session: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'string' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        source: { kind: 'primitive', content: 'string' },
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
        treatmentDate: { kind: 'primitive', content: 'number' },
        treatmentsSummary: {
            kind: 'array',
            content: {
                kind: 'object',
                content: {
                    userId: { kind: 'custom', content: 'id' },
                    treatmentDuration: { kind: 'primitive', content: 'number' },
                },
            },
        },
        wordsCount: { kind: 'primitive', content: 'number' },
    },
});
exports.statisticModel = statisticModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decisionsValidationSchema = void 0;
var decisionsValidationSchema = {
    $jsonSchema: {
        bsonType: 'object',
        additionalProperties: false,
        required: ['labelStatus', 'labelTreatments', 'originalText', 'sourceId'],
        properties: {
            _id: { bsonType: 'objectId' },
            _rev: { bsonType: 'int' },
            analysis: {
                bsonType: 'object',
                additionalProperties: false,
                properties: {
                    doctrine: { bsonType: 'string' },
                    link: { bsonType: 'string' },
                    reference: {
                        bsonType: 'array',
                        additionalProperties: false,
                        items: {
                            bsonType: 'string',
                        },
                    },
                    source: { bsonType: 'string' },
                    summary: { bsonType: 'string' },
                    target: { bsonType: 'string' },
                    title: {
                        bsonType: 'array',
                        additionalProperties: false,
                        items: {
                            bsonType: 'string',
                        },
                    },
                },
            },
            appeals: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'string',
                },
            },
            chamberId: { bsonType: 'string' },
            chamberName: { bsonType: 'string' },
            dateCreation: { bsonType: 'date' },
            dateDecision: { bsonType: 'date' },
            jurisdictionCode: { bsonType: 'string' },
            jurisdictionId: { bsonType: 'string' },
            jurisdictionName: { bsonType: 'string' },
            labelStatus: { bsonType: 'string', enum: ['toBeTreated', 'loaded', 'done', 'exported'] },
            labelTreatments: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'object',
                    additionalProperties: false,
                    properties: {
                        annotations: {
                            bsonType: 'array',
                            additionalProperties: false,
                            items: {
                                bsonType: 'object',
                                additionalProperties: false,
                                properties: {
                                    category: { bsonType: 'string' },
                                    entityId: { bsonType: 'string' },
                                    start: { bsonType: 'int' },
                                    text: { bsonType: 'string' },
                                },
                            },
                        },
                        source: { bsonType: 'string' },
                        order: { bsonType: 'int' },
                    },
                },
            },
            locked: { bsonType: 'bool' },
            originalText: { bsonType: 'string' },
            parties: { bsonType: 'string' },
            pseudoStatus: { bsonType: 'string' },
            pseudoText: { bsonType: 'string' },
            pubCategory: { bsonType: 'string' },
            registerNumber: { bsonType: 'string' },
            solution: { bsonType: 'string' },
            sourceId: { bsonType: 'number' },
            sourceName: { bsonType: 'string' },
            zoning: {
                bsonType: 'object',
                additionalProperties: false,
                properties: {
                    introduction_subzonage: {
                        bsonType: 'object',
                        additionalProperties: false,
                        properties: {
                            publication: {
                                bsonType: 'array',
                                additionalProperties: false,
                                items: {
                                    bsonType: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.decisionsValidationSchema = decisionsValidationSchema;

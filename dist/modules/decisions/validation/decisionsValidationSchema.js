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
            _version: { bsonType: 'double' },
            analysis: {
                bsonType: 'object',
                additionalProperties: false,
                properties: {
                    analyse: {
                        bsonType: 'array',
                        additionalProperties: false,
                        items: {
                            bsonType: 'string',
                        },
                    },
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
            decatt: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'number',
                },
            },
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
                        version: {
                            bsonType: 'object',
                            // additionalProperties: false,
                            properties: {
                                juriSpacyTokenizer: {
                                    bsonType: 'object',
                                    additionalProperties: false,
                                    properties: {
                                        version: { bsonType: 'string' },
                                        date: { bsonType: 'string' },
                                    },
                                },
                                juritools: {
                                    bsonType: 'object',
                                    additionalProperties: false,
                                    properties: {
                                        version: { bsonType: 'string' },
                                        date: { bsonType: 'string' },
                                    },
                                },
                                pseudonymisationApi: {
                                    bsonType: 'object',
                                    additionalProperties: false,
                                    properties: {
                                        version: { bsonType: 'string' },
                                        date: { bsonType: 'string' },
                                    },
                                },
                                model: {
                                    bsonType: 'object',
                                    additionalProperties: false,
                                    properties: {
                                        name: { bsonType: 'string' },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            locked: { bsonType: 'bool' },
            occultation: {
                bsonType: 'object',
                additionalProperties: false,
                properties: {
                    additionalTerms: {
                        bsonType: 'string',
                    },
                    categoriesToOmit: {
                        bsonType: 'array',
                        additionalProperties: false,
                        items: {
                            bsonType: 'string',
                        },
                    },
                },
            },
            originalText: { bsonType: 'string' },
            parties: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'string',
                },
            },
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
            publication: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'string',
                },
            },
            formation: { bsonType: 'string' },
            natureAffaireCivil: { bsonType: 'string' },
            natureAffairePenal: { bsonType: 'string' },
            codeMatiereCivil: { bsonType: 'string' },
            NACCode: { bsonType: 'string' },
            endCaseCode: { bsonType: 'string' },
        },
    },
};
exports.decisionsValidationSchema = decisionsValidationSchema;

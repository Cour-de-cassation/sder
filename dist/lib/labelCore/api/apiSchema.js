"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSchema = void 0;
var modules_1 = require("../modules");
var modelType_1 = require("../modules/modelType");
var apiSchema = {
    get: {
        aggregatedStatistics: {
            in: {
                ressourceFilter: modules_1.ressourceFilterModule.model,
            },
            out: modelType_1.buildModel({
                kind: 'object',
                content: {
                    cumulatedValue: {
                        kind: 'object',
                        content: {
                            subAnnotationsSensitiveCount: modelType_1.buildModel({
                                kind: 'primitive',
                                content: 'number',
                            }),
                            subAnnotationsNonSensitiveCount: modelType_1.buildModel({
                                kind: 'primitive',
                                content: 'number',
                            }),
                            surAnnotationsCount: modelType_1.buildModel({
                                kind: 'primitive',
                                content: 'number',
                            }),
                            treatmentDuration: modules_1.treatmentModule.model.content.duration,
                            annotationsCount: modules_1.statisticModule.model.content.annotationsCount,
                            wordsCount: modules_1.statisticModule.model.content.wordsCount,
                        },
                    },
                    total: { kind: 'primitive', content: 'number' },
                },
            }),
        },
        annotations: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'array',
                content: modules_1.annotationModule.model,
            }),
        },
        annotationsDiffDetails: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'object',
                content: {
                    addedAnnotations: {
                        kind: 'array',
                        content: {
                            kind: 'object',
                            content: {
                                text: { kind: 'primitive', content: 'string' },
                                textStart: { kind: 'primitive', content: 'number' },
                                addedAnnotation: modules_1.annotationModule.model,
                            },
                        },
                    },
                    deletedAnnotations: {
                        kind: 'array',
                        content: {
                            kind: 'object',
                            content: {
                                text: { kind: 'primitive', content: 'string' },
                                textStart: { kind: 'primitive', content: 'number' },
                                deletedAnnotation: modules_1.annotationModule.model,
                            },
                        },
                    },
                    resizedBiggerAnnotations: {
                        kind: 'array',
                        content: {
                            kind: 'object',
                            content: {
                                text: { kind: 'primitive', content: 'string' },
                                textStart: { kind: 'primitive', content: 'number' },
                                annotationBefore: modules_1.annotationModule.model,
                                annotationAfter: modules_1.annotationModule.model,
                            },
                        },
                    },
                    resizedSmallerAnnotations: {
                        kind: 'array',
                        content: {
                            kind: 'object',
                            content: {
                                text: { kind: 'primitive', content: 'string' },
                                textStart: { kind: 'primitive', content: 'number' },
                                annotationBefore: modules_1.annotationModule.model,
                                annotationAfter: modules_1.annotationModule.model,
                            },
                        },
                    },
                    categoryChangedAnnotations: {
                        kind: 'array',
                        content: {
                            kind: 'object',
                            content: {
                                text: { kind: 'primitive', content: 'string' },
                                textStart: { kind: 'primitive', content: 'number' },
                                annotationBefore: modules_1.annotationModule.model,
                                annotationAfter: modules_1.annotationModule.model,
                            },
                        },
                    },
                },
            }),
        },
        anonymizedDocumentText: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'string',
            }),
        },
        availableStatisticFilters: {
            out: modelType_1.buildModel({
                kind: 'object',
                content: {
                    publicationCategories: {
                        kind: 'array',
                        content: {
                            kind: 'primitive',
                            content: 'string',
                        },
                    },
                    maxDate: {
                        kind: 'or',
                        content: [
                            { kind: 'primitive', content: 'number' },
                            { kind: 'primitive', content: 'undefined' },
                        ],
                    },
                    minDate: {
                        kind: 'or',
                        content: [
                            { kind: 'primitive', content: 'number' },
                            { kind: 'primitive', content: 'undefined' },
                        ],
                    },
                    sources: {
                        kind: 'array',
                        content: {
                            kind: 'primitive',
                            content: 'string',
                        },
                    },
                    jurisdictions: {
                        kind: 'array',
                        content: {
                            kind: 'primitive',
                            content: 'string',
                        },
                    },
                },
            }),
        },
        document: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
            },
            out: modules_1.documentModule.fetchedModel,
        },
        documentsForUser: {
            in: {
                documentsMaxCount: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'number',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'array',
                content: {
                    kind: 'object',
                    content: {
                        document: modules_1.documentModule.fetchedModel,
                        assignationId: modelType_1.buildModel({
                            kind: 'custom',
                            content: 'id',
                        }),
                    },
                },
            }),
        },
        health: {
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'boolean',
            }),
        },
        problemReportsWithDetails: {
            out: modelType_1.buildModel({
                kind: 'array',
                content: {
                    kind: 'object',
                    content: {
                        problemReport: modules_1.problemReportModule.model,
                        document: {
                            kind: 'object',
                            content: {
                                _id: modules_1.documentModule.fetchedModel.content._id,
                                documentNumber: modules_1.documentModule.fetchedModel.content.documentNumber,
                                publicationCategory: modules_1.documentModule.fetchedModel.content.publicationCategory,
                                route: modules_1.documentModule.fetchedModel.content.route,
                                status: modules_1.documentModule.fetchedModel.content.status,
                            },
                        },
                        user: {
                            kind: 'object',
                            content: {
                                email: modules_1.userModule.models.user.content.email,
                                name: modules_1.userModule.models.user.content.name,
                            },
                        },
                    },
                },
            }),
        },
        settings: {
            out: modules_1.settingsModule.model,
        },
        publishableDocuments: {
            out: modelType_1.buildModel({
                kind: 'array',
                content: {
                    kind: 'object',
                    content: {
                        _id: modules_1.documentModule.fetchedModel.content._id,
                        appealNumber: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.appealNumber,
                        chamberName: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.chamberName,
                        creationDate: modules_1.documentModule.fetchedModel.content.creationDate,
                        documentNumber: modules_1.documentModule.fetchedModel.content.documentNumber,
                        jurisdiction: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.jurisdiction,
                        publicationCategory: modules_1.documentModule.fetchedModel.content.publicationCategory,
                        route: modules_1.documentModule.fetchedModel.content.route,
                        status: modules_1.documentModule.fetchedModel.content.status,
                    },
                },
            }),
        },
        toBeConfirmedDocuments: {
            out: modelType_1.buildModel({
                kind: 'array',
                content: {
                    kind: 'object',
                    content: {
                        document: {
                            kind: 'object',
                            content: {
                                _id: modules_1.documentModule.fetchedModel.content._id,
                                documentNumber: modules_1.documentModule.fetchedModel.content.documentNumber,
                                jurisdiction: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.jurisdiction,
                                occultationBlock: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.occultationBlock,
                                reviewStatus: modules_1.documentModule.fetchedModel.content.reviewStatus,
                                publicationCategory: modules_1.documentModule.fetchedModel.content.publicationCategory,
                                route: modules_1.documentModule.fetchedModel.content.route,
                            },
                        },
                        totalTreatmentDuration: {
                            kind: 'or',
                            content: [
                                { kind: 'primitive', content: 'number' },
                                { kind: 'primitive', content: 'undefined' },
                            ],
                        },
                        lastTreatmentDate: {
                            kind: 'or',
                            content: [
                                { kind: 'primitive', content: 'number' },
                                { kind: 'primitive', content: 'undefined' },
                            ],
                        },
                        userNames: {
                            kind: 'array',
                            content: {
                                kind: 'primitive',
                                content: 'string',
                            },
                        },
                    },
                },
            }),
        },
        treatedDocuments: {
            out: modelType_1.buildModel({
                kind: 'array',
                content: {
                    kind: 'object',
                    content: {
                        document: {
                            kind: 'object',
                            content: {
                                _id: modules_1.documentModule.fetchedModel.content._id,
                                creationDate: modules_1.documentModule.fetchedModel.content.creationDate,
                                documentNumber: modules_1.documentModule.fetchedModel.content.documentNumber,
                                jurisdiction: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.jurisdiction,
                                occultationBlock: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.occultationBlock,
                                publicationCategory: modules_1.documentModule.fetchedModel.content.publicationCategory,
                                reviewStatus: modules_1.documentModule.fetchedModel.content.reviewStatus,
                                route: modules_1.documentModule.fetchedModel.content.route,
                                source: modules_1.documentModule.fetchedModel.content.source,
                            },
                        },
                        totalTreatmentDuration: {
                            kind: 'or',
                            content: [
                                { kind: 'primitive', content: 'number' },
                                { kind: 'primitive', content: 'undefined' },
                            ],
                        },
                        lastTreatmentDate: {
                            kind: 'or',
                            content: [
                                { kind: 'primitive', content: 'number' },
                                { kind: 'primitive', content: 'undefined' },
                            ],
                        },
                        statistic: {
                            kind: 'object',
                            content: {
                                surAnnotationsCount: {
                                    kind: 'or',
                                    content: [
                                        { kind: 'primitive', content: 'number' },
                                        { kind: 'primitive', content: 'undefined' },
                                    ],
                                },
                                subAnnotationsSensitiveCount: {
                                    kind: 'or',
                                    content: [
                                        { kind: 'primitive', content: 'number' },
                                        { kind: 'primitive', content: 'undefined' },
                                    ],
                                },
                                subAnnotationsNonSensitiveCount: {
                                    kind: 'or',
                                    content: [
                                        { kind: 'primitive', content: 'number' },
                                        { kind: 'primitive', content: 'undefined' },
                                    ],
                                },
                            },
                        },
                        userNames: {
                            kind: 'array',
                            content: {
                                kind: 'primitive',
                                content: 'string',
                            },
                        },
                    },
                },
            }),
        },
        untreatedDocuments: {
            out: modelType_1.buildModel({
                kind: 'array',
                content: {
                    kind: 'object',
                    content: {
                        document: {
                            kind: 'object',
                            content: {
                                _id: modules_1.documentModule.fetchedModel.content._id,
                                creationDate: modules_1.documentModule.fetchedModel.content.creationDate,
                                decisionDate: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.date,
                                documentNumber: modules_1.documentModule.fetchedModel.content.documentNumber,
                                occultationBlock: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.occultationBlock,
                                jurisdiction: modules_1.documentModule.fetchedModel.content.decisionMetadata.content.jurisdiction,
                                publicationCategory: modules_1.documentModule.fetchedModel.content.publicationCategory,
                                route: modules_1.documentModule.fetchedModel.content.route,
                                source: modules_1.documentModule.fetchedModel.content.source,
                                status: modules_1.documentModule.fetchedModel.content.status,
                            },
                        },
                        userNames: {
                            kind: 'array',
                            content: {
                                kind: 'primitive',
                                content: 'string',
                            },
                        },
                    },
                },
            }),
        },
        workingUsers: {
            out: modelType_1.buildModel({
                kind: 'array',
                content: {
                    kind: 'object',
                    content: {
                        _id: modules_1.userModule.models.user.content._id,
                        email: modules_1.userModule.models.user.content.email,
                        isActivated: modules_1.userModule.models.user.content.isActivated,
                        name: modules_1.userModule.models.user.content.name,
                        role: modules_1.userModule.models.user.content.role,
                    },
                },
            }),
        },
    },
    post: {
        assignDocumentToUser: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
                userId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modules_1.documentModule.fetchedModel,
        },
        changePassword: {
            in: {
                previousPassword: modelType_1.buildModel({ kind: 'primitive', content: 'string' }),
                newPassword: modelType_1.buildModel({ kind: 'primitive', content: 'string' }),
            },
            out: modelType_1.buildModel({
                kind: 'constant',
                content: ['notValidNewPassword', 'passwordUpdated', 'wrongPassword'],
            }),
        },
        createUser: {
            in: {
                name: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
                email: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
                role: modules_1.userModule.models.user.content.role,
            },
            out: modelType_1.buildModel({ kind: 'primitive', content: 'string' }),
        },
        deleteProblemReport: {
            in: {
                problemReportId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        deleteHumanTreatmentsForDocument: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        login: {
            in: {
                email: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
                password: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'object',
                content: {
                    _id: modules_1.userModule.models.user.content._id,
                    email: modules_1.userModule.models.user.content.email,
                    name: modules_1.userModule.models.user.content.name,
                    role: modules_1.userModule.models.user.content.role,
                    token: { kind: 'primitive', content: 'string' },
                    passwordTimeValidityStatus: modules_1.userModule.models.passwordTimeValidityStatus,
                },
            }),
        },
        monitoringEntries: {
            in: {
                newMonitoringEntries: modelType_1.buildModel({
                    kind: 'array',
                    content: modules_1.monitoringEntryModule.fetchedModel,
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        problemReport: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
                problemType: modules_1.problemReportModule.model.content.type,
                problemText: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'string',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        resetPassword: {
            in: {
                userId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'string',
            }),
        },
        resetTreatmentLastUpdateDate: {
            in: {
                assignationId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        setDeletionDateForUser: {
            in: {
                userId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        setIsActivatedForUser: {
            in: {
                userId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
                isActivated: modules_1.userModule.models.user.content.isActivated,
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        updateAssignationDocumentStatus: {
            in: {
                assignationId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
                status: modules_1.documentModule.fetchedModel.content.status,
            },
            out: modules_1.documentModule.fetchedModel,
        },
        updateDocumentStatus: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
                status: modules_1.documentModule.fetchedModel.content.status,
            },
            out: modules_1.documentModule.fetchedModel,
        },
        updatePublishableDocumentStatus: {
            in: {
                documentId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
                status: modelType_1.buildModel({
                    kind: modules_1.documentModule.fetchedModel.content.status.kind,
                    content: ['done', 'toBePublished'],
                }),
            },
            out: modules_1.documentModule.fetchedModel,
        },
        updateProblemReportHasBeenRead: {
            in: {
                problemReportId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
                hasBeenRead: modelType_1.buildModel({
                    kind: 'primitive',
                    content: 'boolean',
                }),
            },
            out: {
                kind: 'primitive',
                content: 'void',
            },
        },
        updateTreatmentDuration: {
            in: {
                assignationId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        updateTreatmentForAssignationId: {
            in: {
                annotationsDiff: modules_1.annotationsDiffModule.model,
                assignationId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
        updateTreatmentForDocumentId: {
            in: {
                annotationsDiff: modules_1.annotationsDiffModule.model,
                documentId: modelType_1.buildModel({
                    kind: 'custom',
                    content: 'id',
                }),
            },
            out: modelType_1.buildModel({
                kind: 'primitive',
                content: 'void',
            }),
        },
    },
};
exports.apiSchema = apiSchema;
// We need this line for type checking
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var _typeCheck = apiSchema;

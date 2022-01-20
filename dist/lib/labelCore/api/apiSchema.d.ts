import { modelType } from '../modules/modelType';
export { apiSchema };
export type { apiSchemaType, apiSchemaMethodNameType, apiSchemaMethodType, apiSchemaEntryType };
declare const apiSchema: {
    readonly get: {
        readonly aggregatedStatistics: {
            readonly in: {
                readonly ressourceFilter: {
                    readonly kind: "object";
                    readonly content: {
                        readonly mustHaveSurAnnotations: {
                            readonly kind: "primitive";
                            readonly content: "boolean";
                        };
                        readonly mustHaveSubAnnotations: {
                            readonly kind: "primitive";
                            readonly content: "boolean";
                        };
                        readonly publicationCategory: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "string";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly startDate: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly endDate: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly source: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "string";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly jurisdiction: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "string";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly userId: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "custom";
                                readonly content: "id";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                    };
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly cumulatedValue: {
                        readonly kind: "object";
                        readonly content: {
                            readonly subAnnotationsSensitiveCount: {
                                readonly kind: "primitive";
                                readonly content: "number";
                            };
                            readonly subAnnotationsNonSensitiveCount: {
                                readonly kind: "primitive";
                                readonly content: "number";
                            };
                            readonly surAnnotationsCount: {
                                readonly kind: "primitive";
                                readonly content: "number";
                            };
                            readonly treatmentDuration: {
                                readonly kind: "primitive";
                                readonly content: "number";
                            };
                            readonly annotationsCount: {
                                readonly kind: "primitive";
                                readonly content: "number";
                            };
                            readonly wordsCount: {
                                readonly kind: "primitive";
                                readonly content: "number";
                            };
                        };
                    };
                    readonly total: {
                        readonly kind: "primitive";
                        readonly content: "number";
                    };
                };
            };
        };
        readonly annotations: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly out: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly category: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly entityId: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly start: {
                            readonly kind: "primitive";
                            readonly content: "number";
                        };
                        readonly text: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly certaintyScore: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                    };
                };
            };
        };
        readonly annotationsDiffDetails: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly addedAnnotations: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "object";
                            readonly content: {
                                readonly text: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly textStart: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly addedAnnotation: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly deletedAnnotations: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "object";
                            readonly content: {
                                readonly text: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly textStart: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly deletedAnnotation: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly resizedBiggerAnnotations: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "object";
                            readonly content: {
                                readonly text: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly textStart: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly annotationBefore: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                                readonly annotationAfter: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly resizedSmallerAnnotations: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "object";
                            readonly content: {
                                readonly text: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly textStart: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly annotationBefore: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                                readonly annotationAfter: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly categoryChangedAnnotations: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "object";
                            readonly content: {
                                readonly text: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly textStart: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly annotationBefore: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                                readonly annotationAfter: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly category: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly entityId: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly start: {
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        };
                                        readonly text: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly certaintyScore: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly anonymizedDocumentText: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "string";
            };
        };
        readonly availableStatisticFilters: {
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly publicationCategories: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                    readonly maxDate: {
                        readonly kind: "or";
                        readonly content: readonly [{
                            readonly kind: "primitive";
                            readonly content: "number";
                        }, {
                            readonly kind: "primitive";
                            readonly content: "undefined";
                        }];
                    };
                    readonly minDate: {
                        readonly kind: "or";
                        readonly content: readonly [{
                            readonly kind: "primitive";
                            readonly content: "number";
                        }, {
                            readonly kind: "primitive";
                            readonly content: "undefined";
                        }];
                    };
                    readonly sources: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                    readonly jurisdictions: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                };
            };
        };
        readonly document: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly creationDate: {
                        readonly kind: "or";
                        readonly content: readonly [{
                            readonly kind: "primitive";
                            readonly content: "number";
                        }, {
                            readonly kind: "primitive";
                            readonly content: "undefined";
                        }];
                    };
                    readonly decisionMetadata: {
                        readonly kind: "object";
                        readonly content: {
                            readonly appealNumber: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly additionalTermsToAnnotate: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly boundDecisionDocumentNumbers: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                            };
                            readonly categoriesToOmit: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly chamberName: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilMatterCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly criminalCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly date: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly jurisdiction: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly occultationBlock: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly NACCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly endCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly parties: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly session: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly solution: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                    readonly documentNumber: {
                        readonly kind: "primitive";
                        readonly content: "number";
                    };
                    readonly _id: {
                        readonly kind: "custom";
                        readonly content: "id";
                    };
                    readonly publicationCategory: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                    readonly reviewStatus: {
                        readonly kind: "object";
                        readonly content: {
                            readonly viewerNames: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly hasBeenAmended: {
                                readonly kind: "primitive";
                                readonly content: "boolean";
                            };
                        };
                    };
                    readonly route: {
                        readonly kind: "constant";
                        readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                    };
                    readonly source: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly status: {
                        readonly kind: "constant";
                        readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                    };
                    readonly title: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly text: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                };
            };
        };
        readonly documentsForUser: {
            readonly in: {
                readonly documentsMaxCount: {
                    readonly kind: "primitive";
                    readonly content: "number";
                };
            };
            readonly out: {
                kind: "array";
                content: {
                    kind: "object";
                    content: {
                        document: {
                            readonly kind: "object";
                            readonly content: {
                                readonly creationDate: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly decisionMetadata: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly appealNumber: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly additionalTermsToAnnotate: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly boundDecisionDocumentNumbers: {
                                            readonly kind: "array";
                                            readonly content: {
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            };
                                        };
                                        readonly categoriesToOmit: {
                                            readonly kind: "array";
                                            readonly content: {
                                                readonly kind: "primitive";
                                                readonly content: "string";
                                            };
                                        };
                                        readonly chamberName: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly civilCaseCode: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly civilMatterCode: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly criminalCaseCode: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly date: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                        readonly jurisdiction: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly occultationBlock: {
                                            readonly kind: "or";
                                            readonly content: readonly [{
                                                readonly kind: "primitive";
                                                readonly content: "number";
                                            }, {
                                                readonly kind: "primitive";
                                                readonly content: "undefined";
                                            }];
                                        };
                                        readonly NACCode: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly endCaseCode: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly parties: {
                                            readonly kind: "array";
                                            readonly content: {
                                                readonly kind: "primitive";
                                                readonly content: "string";
                                            };
                                        };
                                        readonly session: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                        readonly solution: {
                                            readonly kind: "primitive";
                                            readonly content: "string";
                                        };
                                    };
                                };
                                readonly documentNumber: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly _id: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly publicationCategory: {
                                    readonly kind: "array";
                                    readonly content: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                };
                                readonly reviewStatus: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly viewerNames: {
                                            readonly kind: "array";
                                            readonly content: {
                                                readonly kind: "primitive";
                                                readonly content: "string";
                                            };
                                        };
                                        readonly hasBeenAmended: {
                                            readonly kind: "primitive";
                                            readonly content: "boolean";
                                        };
                                    };
                                };
                                readonly route: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                                };
                                readonly source: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly status: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                                };
                                readonly title: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly text: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                        };
                        assignationId: {
                            readonly kind: "custom";
                            readonly content: "id";
                        };
                    };
                };
            };
        };
        readonly health: {
            readonly out: {
                readonly kind: "primitive";
                readonly content: "boolean";
            };
        };
        readonly problemReportsWithDetails: {
            readonly out: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly problemReport: {
                            readonly kind: "object";
                            readonly content: {
                                readonly _id: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly documentId: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly userId: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly date: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly text: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly hasBeenRead: {
                                    readonly kind: "primitive";
                                    readonly content: "boolean";
                                };
                                readonly type: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["bug", "annotationProblem", "suggestion"];
                                };
                            };
                        };
                        readonly document: {
                            readonly kind: "object";
                            readonly content: {
                                readonly _id: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly documentNumber: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly publicationCategory: {
                                    readonly kind: "array";
                                    readonly content: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                };
                                readonly route: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                                };
                                readonly status: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                                };
                            };
                        };
                        readonly user: {
                            readonly kind: "object";
                            readonly content: {
                                readonly email: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly name: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly settings: {
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly json: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                };
            };
        };
        readonly publishableDocuments: {
            readonly out: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly _id: {
                            readonly kind: "custom";
                            readonly content: "id";
                        };
                        readonly appealNumber: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly chamberName: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly creationDate: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly documentNumber: {
                            readonly kind: "primitive";
                            readonly content: "number";
                        };
                        readonly jurisdiction: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly publicationCategory: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                        readonly route: {
                            readonly kind: "constant";
                            readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                        };
                        readonly status: {
                            readonly kind: "constant";
                            readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                        };
                    };
                };
            };
        };
        readonly toBeConfirmedDocuments: {
            readonly out: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly document: {
                            readonly kind: "object";
                            readonly content: {
                                readonly _id: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly documentNumber: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly jurisdiction: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly occultationBlock: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly reviewStatus: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly viewerNames: {
                                            readonly kind: "array";
                                            readonly content: {
                                                readonly kind: "primitive";
                                                readonly content: "string";
                                            };
                                        };
                                        readonly hasBeenAmended: {
                                            readonly kind: "primitive";
                                            readonly content: "boolean";
                                        };
                                    };
                                };
                                readonly publicationCategory: {
                                    readonly kind: "array";
                                    readonly content: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                };
                                readonly route: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                                };
                            };
                        };
                        readonly totalTreatmentDuration: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly lastTreatmentDate: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly userNames: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                };
            };
        };
        readonly treatedDocuments: {
            readonly out: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly document: {
                            readonly kind: "object";
                            readonly content: {
                                readonly _id: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly creationDate: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly documentNumber: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly jurisdiction: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly occultationBlock: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly publicationCategory: {
                                    readonly kind: "array";
                                    readonly content: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                };
                                readonly reviewStatus: {
                                    readonly kind: "object";
                                    readonly content: {
                                        readonly viewerNames: {
                                            readonly kind: "array";
                                            readonly content: {
                                                readonly kind: "primitive";
                                                readonly content: "string";
                                            };
                                        };
                                        readonly hasBeenAmended: {
                                            readonly kind: "primitive";
                                            readonly content: "boolean";
                                        };
                                    };
                                };
                                readonly route: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                                };
                                readonly source: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                        };
                        readonly totalTreatmentDuration: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly lastTreatmentDate: {
                            readonly kind: "or";
                            readonly content: readonly [{
                                readonly kind: "primitive";
                                readonly content: "number";
                            }, {
                                readonly kind: "primitive";
                                readonly content: "undefined";
                            }];
                        };
                        readonly statistic: {
                            readonly kind: "object";
                            readonly content: {
                                readonly surAnnotationsCount: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly subAnnotationsSensitiveCount: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly subAnnotationsNonSensitiveCount: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                            };
                        };
                        readonly userNames: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                };
            };
        };
        readonly untreatedDocuments: {
            readonly out: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly document: {
                            readonly kind: "object";
                            readonly content: {
                                readonly _id: {
                                    readonly kind: "custom";
                                    readonly content: "id";
                                };
                                readonly creationDate: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly decisionDate: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly documentNumber: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                                readonly occultationBlock: {
                                    readonly kind: "or";
                                    readonly content: readonly [{
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    }, {
                                        readonly kind: "primitive";
                                        readonly content: "undefined";
                                    }];
                                };
                                readonly jurisdiction: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly publicationCategory: {
                                    readonly kind: "array";
                                    readonly content: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                };
                                readonly route: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                                };
                                readonly source: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                                readonly status: {
                                    readonly kind: "constant";
                                    readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                                };
                            };
                        };
                        readonly userNames: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                };
            };
        };
        readonly workingUsers: {
            readonly out: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly _id: {
                            readonly kind: "custom";
                            readonly content: "id";
                        };
                        readonly email: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly isActivated: {
                            readonly kind: "primitive";
                            readonly content: "boolean";
                        };
                        readonly name: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                        readonly role: {
                            readonly kind: "constant";
                            readonly content: readonly ["admin", "annotator", "publicator", "scrutator"];
                        };
                    };
                };
            };
        };
    };
    readonly post: {
        readonly assignDocumentToUser: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
                readonly userId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly creationDate: {
                        readonly kind: "or";
                        readonly content: readonly [{
                            readonly kind: "primitive";
                            readonly content: "number";
                        }, {
                            readonly kind: "primitive";
                            readonly content: "undefined";
                        }];
                    };
                    readonly decisionMetadata: {
                        readonly kind: "object";
                        readonly content: {
                            readonly appealNumber: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly additionalTermsToAnnotate: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly boundDecisionDocumentNumbers: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                            };
                            readonly categoriesToOmit: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly chamberName: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilMatterCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly criminalCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly date: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly jurisdiction: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly occultationBlock: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly NACCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly endCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly parties: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly session: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly solution: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                    readonly documentNumber: {
                        readonly kind: "primitive";
                        readonly content: "number";
                    };
                    readonly _id: {
                        readonly kind: "custom";
                        readonly content: "id";
                    };
                    readonly publicationCategory: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                    readonly reviewStatus: {
                        readonly kind: "object";
                        readonly content: {
                            readonly viewerNames: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly hasBeenAmended: {
                                readonly kind: "primitive";
                                readonly content: "boolean";
                            };
                        };
                    };
                    readonly route: {
                        readonly kind: "constant";
                        readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                    };
                    readonly source: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly status: {
                        readonly kind: "constant";
                        readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                    };
                    readonly title: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly text: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                };
            };
        };
        readonly changePassword: {
            readonly in: {
                readonly previousPassword: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
                readonly newPassword: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly out: {
                readonly kind: "constant";
                readonly content: readonly ["notValidNewPassword", "passwordUpdated", "wrongPassword"];
            };
        };
        readonly createUser: {
            readonly in: {
                readonly name: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
                readonly email: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
                readonly role: {
                    readonly kind: "constant";
                    readonly content: readonly ["admin", "annotator", "publicator", "scrutator"];
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "string";
            };
        };
        readonly deleteProblemReport: {
            readonly in: {
                readonly problemReportId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly deleteHumanTreatmentsForDocument: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly login: {
            readonly in: {
                readonly email: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
                readonly password: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly _id: {
                        readonly kind: "custom";
                        readonly content: "id";
                    };
                    readonly email: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly name: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly role: {
                        readonly kind: "constant";
                        readonly content: readonly ["admin", "annotator", "publicator", "scrutator"];
                    };
                    readonly token: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly passwordTimeValidityStatus: {
                        kind: "constant";
                        content: readonly ["valid", "outdated"];
                    };
                };
            };
        };
        readonly monitoringEntries: {
            readonly in: {
                readonly newMonitoringEntries: {
                    readonly kind: "array";
                    readonly content: {
                        readonly kind: "object";
                        readonly content: {
                            readonly _id: {
                                readonly kind: "custom";
                                readonly content: "id";
                            };
                            readonly action: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly creationDate: {
                                readonly kind: "primitive";
                                readonly content: "number";
                            };
                            readonly documentId: {
                                readonly kind: "custom";
                                readonly content: "id";
                            };
                            readonly origin: {
                                readonly kind: "constant";
                                readonly content: readonly ["document", "panel", "footer", "shortcut"];
                            };
                        };
                    };
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly problemReport: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
                readonly problemType: {
                    readonly kind: "constant";
                    readonly content: readonly ["bug", "annotationProblem", "suggestion"];
                };
                readonly problemText: {
                    readonly kind: "primitive";
                    readonly content: "string";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly resetPassword: {
            readonly in: {
                readonly userId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "string";
            };
        };
        readonly resetTreatmentLastUpdateDate: {
            readonly in: {
                readonly assignationId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly setDeletionDateForUser: {
            readonly in: {
                readonly userId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly setIsActivatedForUser: {
            readonly in: {
                readonly userId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
                readonly isActivated: {
                    readonly kind: "primitive";
                    readonly content: "boolean";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly updateAssignationDocumentStatus: {
            readonly in: {
                readonly assignationId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
                readonly status: {
                    readonly kind: "constant";
                    readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly creationDate: {
                        readonly kind: "or";
                        readonly content: readonly [{
                            readonly kind: "primitive";
                            readonly content: "number";
                        }, {
                            readonly kind: "primitive";
                            readonly content: "undefined";
                        }];
                    };
                    readonly decisionMetadata: {
                        readonly kind: "object";
                        readonly content: {
                            readonly appealNumber: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly additionalTermsToAnnotate: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly boundDecisionDocumentNumbers: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                            };
                            readonly categoriesToOmit: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly chamberName: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilMatterCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly criminalCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly date: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly jurisdiction: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly occultationBlock: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly NACCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly endCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly parties: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly session: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly solution: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                    readonly documentNumber: {
                        readonly kind: "primitive";
                        readonly content: "number";
                    };
                    readonly _id: {
                        readonly kind: "custom";
                        readonly content: "id";
                    };
                    readonly publicationCategory: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                    readonly reviewStatus: {
                        readonly kind: "object";
                        readonly content: {
                            readonly viewerNames: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly hasBeenAmended: {
                                readonly kind: "primitive";
                                readonly content: "boolean";
                            };
                        };
                    };
                    readonly route: {
                        readonly kind: "constant";
                        readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                    };
                    readonly source: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly status: {
                        readonly kind: "constant";
                        readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                    };
                    readonly title: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly text: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                };
            };
        };
        readonly updateDocumentStatus: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
                readonly status: {
                    readonly kind: "constant";
                    readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly creationDate: {
                        readonly kind: "or";
                        readonly content: readonly [{
                            readonly kind: "primitive";
                            readonly content: "number";
                        }, {
                            readonly kind: "primitive";
                            readonly content: "undefined";
                        }];
                    };
                    readonly decisionMetadata: {
                        readonly kind: "object";
                        readonly content: {
                            readonly appealNumber: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly additionalTermsToAnnotate: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly boundDecisionDocumentNumbers: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                            };
                            readonly categoriesToOmit: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly chamberName: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilMatterCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly criminalCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly date: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly jurisdiction: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly occultationBlock: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly NACCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly endCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly parties: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly session: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly solution: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                    readonly documentNumber: {
                        readonly kind: "primitive";
                        readonly content: "number";
                    };
                    readonly _id: {
                        readonly kind: "custom";
                        readonly content: "id";
                    };
                    readonly publicationCategory: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                    readonly reviewStatus: {
                        readonly kind: "object";
                        readonly content: {
                            readonly viewerNames: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly hasBeenAmended: {
                                readonly kind: "primitive";
                                readonly content: "boolean";
                            };
                        };
                    };
                    readonly route: {
                        readonly kind: "constant";
                        readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                    };
                    readonly source: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly status: {
                        readonly kind: "constant";
                        readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                    };
                    readonly title: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly text: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                };
            };
        };
        readonly updatePublishableDocumentStatus: {
            readonly in: {
                readonly documentId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
                readonly status: {
                    readonly kind: "constant";
                    readonly content: readonly ["done", "toBePublished"];
                };
            };
            readonly out: {
                readonly kind: "object";
                readonly content: {
                    readonly creationDate: {
                        readonly kind: "or";
                        readonly content: readonly [{
                            readonly kind: "primitive";
                            readonly content: "number";
                        }, {
                            readonly kind: "primitive";
                            readonly content: "undefined";
                        }];
                    };
                    readonly decisionMetadata: {
                        readonly kind: "object";
                        readonly content: {
                            readonly appealNumber: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly additionalTermsToAnnotate: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly boundDecisionDocumentNumbers: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                };
                            };
                            readonly categoriesToOmit: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly chamberName: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly civilMatterCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly criminalCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly date: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly jurisdiction: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly occultationBlock: {
                                readonly kind: "or";
                                readonly content: readonly [{
                                    readonly kind: "primitive";
                                    readonly content: "number";
                                }, {
                                    readonly kind: "primitive";
                                    readonly content: "undefined";
                                }];
                            };
                            readonly NACCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly endCaseCode: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly parties: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly session: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                            readonly solution: {
                                readonly kind: "primitive";
                                readonly content: "string";
                            };
                        };
                    };
                    readonly documentNumber: {
                        readonly kind: "primitive";
                        readonly content: "number";
                    };
                    readonly _id: {
                        readonly kind: "custom";
                        readonly content: "id";
                    };
                    readonly publicationCategory: {
                        readonly kind: "array";
                        readonly content: {
                            readonly kind: "primitive";
                            readonly content: "string";
                        };
                    };
                    readonly reviewStatus: {
                        readonly kind: "object";
                        readonly content: {
                            readonly viewerNames: {
                                readonly kind: "array";
                                readonly content: {
                                    readonly kind: "primitive";
                                    readonly content: "string";
                                };
                            };
                            readonly hasBeenAmended: {
                                readonly kind: "primitive";
                                readonly content: "boolean";
                            };
                        };
                    };
                    readonly route: {
                        readonly kind: "constant";
                        readonly content: readonly ["automatic", "exhaustive", "simple", "confirmation", "request", "default"];
                    };
                    readonly source: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly status: {
                        readonly kind: "constant";
                        readonly content: readonly ["done", "free", "loaded", "nlpAnnotating", "pending", "rejected", "saved", "toBePublished", "toBeConfirmed"];
                    };
                    readonly title: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                    readonly text: {
                        readonly kind: "primitive";
                        readonly content: "string";
                    };
                };
            };
        };
        readonly updateProblemReportHasBeenRead: {
            readonly in: {
                readonly problemReportId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
                readonly hasBeenRead: {
                    kind: "primitive";
                    content: "boolean";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly updateTreatmentDuration: {
            readonly in: {
                readonly assignationId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly updateTreatmentForAssignationId: {
            readonly in: {
                readonly annotationsDiff: {
                    readonly kind: "object";
                    readonly content: {
                        readonly before: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "object";
                                readonly content: {
                                    readonly category: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly entityId: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly start: {
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    };
                                    readonly text: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly certaintyScore: {
                                        readonly kind: "or";
                                        readonly content: readonly [{
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        }, {
                                            readonly kind: "primitive";
                                            readonly content: "undefined";
                                        }];
                                    };
                                };
                            };
                        };
                        readonly after: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "object";
                                readonly content: {
                                    readonly category: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly entityId: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly start: {
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    };
                                    readonly text: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly certaintyScore: {
                                        readonly kind: "or";
                                        readonly content: readonly [{
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        }, {
                                            readonly kind: "primitive";
                                            readonly content: "undefined";
                                        }];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly assignationId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
        readonly updateTreatmentForDocumentId: {
            readonly in: {
                readonly annotationsDiff: {
                    readonly kind: "object";
                    readonly content: {
                        readonly before: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "object";
                                readonly content: {
                                    readonly category: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly entityId: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly start: {
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    };
                                    readonly text: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly certaintyScore: {
                                        readonly kind: "or";
                                        readonly content: readonly [{
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        }, {
                                            readonly kind: "primitive";
                                            readonly content: "undefined";
                                        }];
                                    };
                                };
                            };
                        };
                        readonly after: {
                            readonly kind: "array";
                            readonly content: {
                                readonly kind: "object";
                                readonly content: {
                                    readonly category: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly entityId: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly start: {
                                        readonly kind: "primitive";
                                        readonly content: "number";
                                    };
                                    readonly text: {
                                        readonly kind: "primitive";
                                        readonly content: "string";
                                    };
                                    readonly certaintyScore: {
                                        readonly kind: "or";
                                        readonly content: readonly [{
                                            readonly kind: "primitive";
                                            readonly content: "number";
                                        }, {
                                            readonly kind: "primitive";
                                            readonly content: "undefined";
                                        }];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly documentId: {
                    readonly kind: "custom";
                    readonly content: "id";
                };
            };
            readonly out: {
                readonly kind: "primitive";
                readonly content: "void";
            };
        };
    };
};
declare type apiSchemaType = {
    get: apiSchemaMethodType;
    post: apiSchemaMethodType;
};
declare type apiSchemaMethodNameType = keyof apiSchemaType;
declare type apiSchemaMethodType = {
    [key: string]: apiSchemaEntryType;
};
declare type apiSchemaEntryType = {
    in?: {
        [param: string]: modelType;
    };
    out: modelType;
};

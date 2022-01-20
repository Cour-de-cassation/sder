import { documentType, fetchedDocumentType } from './documentType';
import { buildDocument, computeCaseNumber, countWords, extractAdditionalAnnotationTerms, getNextStatus, getMinutesBeforeFreeingPendingDocuments } from './lib';
export { documentModule };
export type { documentType, fetchedDocumentType };
declare const documentModule: {
    fetchedModel: {
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
    model: {
        readonly kind: "object";
        readonly content: {
            readonly externalId: {
                readonly kind: "primitive";
                readonly content: "string";
            };
            readonly priority: {
                readonly kind: "primitive";
                readonly content: "number";
            };
            readonly updateDate: {
                readonly kind: "primitive";
                readonly content: "number";
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
    generator: import("../../types/generatorType").generatorType<{
        readonly externalId: string;
        readonly priority: number;
        readonly updateDate: number;
        readonly creationDate: number | undefined;
        readonly decisionMetadata: {
            readonly appealNumber: string;
            readonly additionalTermsToAnnotate: string;
            readonly boundDecisionDocumentNumbers: number[];
            readonly categoriesToOmit: string[];
            readonly chamberName: string;
            readonly civilCaseCode: string;
            readonly civilMatterCode: string;
            readonly criminalCaseCode: string;
            readonly date: number | undefined;
            readonly jurisdiction: string;
            readonly occultationBlock: number | undefined;
            readonly NACCode: string;
            readonly endCaseCode: string;
            readonly parties: string[];
            readonly session: string;
            readonly solution: string;
        };
        readonly documentNumber: number;
        readonly _id: import("bson").ObjectId;
        readonly publicationCategory: string[];
        readonly reviewStatus: {
            readonly viewerNames: string[];
            readonly hasBeenAmended: boolean;
        };
        readonly route: "default" | "request" | "automatic" | "exhaustive" | "simple" | "confirmation";
        readonly source: string;
        readonly status: "done" | "pending" | "loaded" | "free" | "nlpAnnotating" | "rejected" | "saved" | "toBePublished" | "toBeConfirmed";
        readonly title: string;
        readonly text: string;
    }>;
    lib: {
        buildDocument: typeof buildDocument;
        comparator: {
            compareByPriority(document1: {
                readonly externalId: string;
                readonly priority: number;
                readonly updateDate: number;
                readonly creationDate: number | undefined;
                readonly decisionMetadata: {
                    readonly appealNumber: string;
                    readonly additionalTermsToAnnotate: string;
                    readonly boundDecisionDocumentNumbers: number[];
                    readonly categoriesToOmit: string[];
                    readonly chamberName: string;
                    readonly civilCaseCode: string;
                    readonly civilMatterCode: string;
                    readonly criminalCaseCode: string;
                    readonly date: number | undefined;
                    readonly jurisdiction: string;
                    readonly occultationBlock: number | undefined;
                    readonly NACCode: string;
                    readonly endCaseCode: string;
                    readonly parties: string[];
                    readonly session: string;
                    readonly solution: string;
                };
                readonly documentNumber: number;
                readonly _id: import("bson").ObjectId;
                readonly publicationCategory: string[];
                readonly reviewStatus: {
                    readonly viewerNames: string[];
                    readonly hasBeenAmended: boolean;
                };
                readonly route: "default" | "request" | "automatic" | "exhaustive" | "simple" | "confirmation";
                readonly source: string;
                readonly status: "done" | "pending" | "loaded" | "free" | "nlpAnnotating" | "rejected" | "saved" | "toBePublished" | "toBeConfirmed";
                readonly title: string;
                readonly text: string;
            }, document2: {
                readonly externalId: string;
                readonly priority: number;
                readonly updateDate: number;
                readonly creationDate: number | undefined;
                readonly decisionMetadata: {
                    readonly appealNumber: string;
                    readonly additionalTermsToAnnotate: string;
                    readonly boundDecisionDocumentNumbers: number[];
                    readonly categoriesToOmit: string[];
                    readonly chamberName: string;
                    readonly civilCaseCode: string;
                    readonly civilMatterCode: string;
                    readonly criminalCaseCode: string;
                    readonly date: number | undefined;
                    readonly jurisdiction: string;
                    readonly occultationBlock: number | undefined;
                    readonly NACCode: string;
                    readonly endCaseCode: string;
                    readonly parties: string[];
                    readonly session: string;
                    readonly solution: string;
                };
                readonly documentNumber: number;
                readonly _id: import("bson").ObjectId;
                readonly publicationCategory: string[];
                readonly reviewStatus: {
                    readonly viewerNames: string[];
                    readonly hasBeenAmended: boolean;
                };
                readonly route: "default" | "request" | "automatic" | "exhaustive" | "simple" | "confirmation";
                readonly source: string;
                readonly status: "done" | "pending" | "loaded" | "free" | "nlpAnnotating" | "rejected" | "saved" | "toBePublished" | "toBeConfirmed";
                readonly title: string;
                readonly text: string;
            }): number;
        };
        computeCaseNumber: typeof computeCaseNumber;
        countWords: typeof countWords;
        extractAdditionalAnnotationTerms: typeof extractAdditionalAnnotationTerms;
        getNextStatus: typeof getNextStatus;
        getMinutesBeforeFreeingPendingDocuments: typeof getMinutesBeforeFreeingPendingDocuments;
        publicationHandler: {
            mustBePublished: (publicationCategory: string[]) => boolean;
            getPublishedPublicationCategory: () => string[];
        };
    };
};

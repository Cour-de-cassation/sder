import { idType } from '../id';
import { buildType } from '../modelType';
export { documentModel, fetchedDocumentModel };
export type { documentType, fetchedDocumentType };
declare const fetchedDocumentModel: {
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
declare const documentModel: {
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
declare type fetchedDocumentType = buildType<typeof fetchedDocumentModel, {
    id: idType;
}>;
declare type documentType = buildType<typeof documentModel, {
    id: idType;
}>;

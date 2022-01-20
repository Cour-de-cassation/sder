import { idType } from '../id';
import { buildType } from '../modelType';
export { treatmentModel };
export type { treatmentType };
declare const treatmentModel: {
    readonly kind: "object";
    readonly content: {
        readonly _id: {
            readonly kind: "custom";
            readonly content: "id";
        };
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
        readonly duration: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly lastUpdateDate: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly order: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly surAnnotationsCount: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly subAnnotationsSensitiveCount: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly subAnnotationsNonSensitiveCount: {
            readonly kind: "primitive";
            readonly content: "number";
        };
        readonly source: {
            readonly kind: "constant";
            readonly content: readonly ["annotator", "admin", "NLP", "postProcess", "supplementaryAnnotations"];
        };
    };
};
declare type treatmentType = buildType<typeof treatmentModel, {
    id: idType;
}>;

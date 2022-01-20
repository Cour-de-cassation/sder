import { treatmentType } from './treatmentType';
import { aggregateTreatmentInfo, assertTreatmentsSourcesFollowRightOrder, build, buildEmpty, computeAnnotations, computeAnnotationsDiff, computeTreatmentInfo, extractHumanTreatments, extractLastUpdateDate, getLastTreatment, getTimeThresholdToUpdateDuration, treatmentInfoType, sortInConsistentOrder, update } from './lib';
export { treatmentModule };
export type { treatmentType, treatmentInfoType };
declare const treatmentModule: {
    model: {
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
    generator: import("../../types/generatorType").generatorType<{
        readonly _id: import("bson").ObjectId;
        readonly annotationsDiff: {
            readonly before: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }[];
            readonly after: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }[];
        };
        readonly documentId: import("bson").ObjectId;
        readonly duration: number;
        readonly lastUpdateDate: number;
        readonly order: number;
        readonly surAnnotationsCount: number;
        readonly subAnnotationsSensitiveCount: number;
        readonly subAnnotationsNonSensitiveCount: number;
        readonly source: "annotator" | "admin" | "NLP" | "postProcess" | "supplementaryAnnotations";
    }>;
    lib: {
        aggregateTreatmentInfo: typeof aggregateTreatmentInfo;
        assertTreatmentsSourcesFollowRightOrder: typeof assertTreatmentsSourcesFollowRightOrder;
        build: typeof build;
        buildEmpty: typeof buildEmpty;
        computeAnnotations: typeof computeAnnotations;
        computeAnnotationsDiff: typeof computeAnnotationsDiff;
        computeTreatmentInfo: typeof computeTreatmentInfo;
        extractHumanTreatments: typeof extractHumanTreatments;
        extractLastUpdateDate: typeof extractLastUpdateDate;
        getLastTreatment: typeof getLastTreatment;
        getTimeThresholdToUpdateDuration: typeof getTimeThresholdToUpdateDuration;
        sortInConsistentOrder: typeof sortInConsistentOrder;
        update: typeof update;
    };
};

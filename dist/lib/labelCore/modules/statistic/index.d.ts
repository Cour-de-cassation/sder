import { aggregate, buildStatistic } from './lib';
import { statisticType } from './statisticType';
export { statisticModule };
export type { statisticType };
declare const statisticModule: {
    model: {
        readonly kind: "object";
        readonly content: {
            readonly _id: {
                readonly kind: "custom";
                readonly content: "id";
            };
            readonly annotationsCount: {
                readonly kind: "primitive";
                readonly content: "number";
            };
            readonly appealNumber: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "primitive";
                    readonly content: "string";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
            readonly documentNumber: {
                readonly kind: "primitive";
                readonly content: "number";
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
            readonly documentExternalId: {
                readonly kind: "primitive";
                readonly content: "string";
            };
            readonly chamberName: {
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
            readonly linkedEntitiesCount: {
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
            readonly session: {
                readonly kind: "or";
                readonly content: readonly [{
                    readonly kind: "primitive";
                    readonly content: "string";
                }, {
                    readonly kind: "primitive";
                    readonly content: "undefined";
                }];
            };
            readonly source: {
                readonly kind: "primitive";
                readonly content: "string";
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
            readonly treatmentDate: {
                readonly kind: "primitive";
                readonly content: "number";
            };
            readonly treatmentsSummary: {
                readonly kind: "array";
                readonly content: {
                    readonly kind: "object";
                    readonly content: {
                        readonly userId: {
                            readonly kind: "custom";
                            readonly content: "id";
                        };
                        readonly treatmentDuration: {
                            readonly kind: "primitive";
                            readonly content: "number";
                        };
                    };
                };
            };
            readonly wordsCount: {
                readonly kind: "primitive";
                readonly content: "number";
            };
        };
    };
    generator: import("../../types/generatorType").generatorType<{
        readonly _id: import("bson").ObjectId;
        readonly annotationsCount: number;
        readonly appealNumber: string | undefined;
        readonly documentNumber: number;
        readonly decisionDate: number | undefined;
        readonly documentExternalId: string;
        readonly chamberName: string | undefined;
        readonly jurisdiction: string | undefined;
        readonly linkedEntitiesCount: number;
        readonly publicationCategory: string[];
        readonly session: string | undefined;
        readonly source: string;
        readonly surAnnotationsCount: number;
        readonly subAnnotationsSensitiveCount: number;
        readonly subAnnotationsNonSensitiveCount: number;
        readonly treatmentDate: number;
        readonly treatmentsSummary: {
            readonly userId: import("bson").ObjectId;
            readonly treatmentDuration: number;
        }[];
        readonly wordsCount: number;
    }>;
    lib: {
        aggregate: typeof aggregate;
        buildStatistic: typeof buildStatistic;
    };
};

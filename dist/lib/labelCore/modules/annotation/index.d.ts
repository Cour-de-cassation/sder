import { annotationType } from './annotationType';
import { areAnnotationsIncluded, areOverlapping, buildAnnotation, computeNearbyText, isAnnotationTextInAnnotations, sortAnnotations, stringify } from './lib';
export { annotationModule };
export type { annotationType };
declare const annotationModule: {
    model: {
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
    generator: import("../../types/generatorType").generatorType<{
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }>;
    lib: {
        annotationLinker: {
            link: (annotationSource: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }, annotationTarget: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }) => {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            };
            unlink: (annotation: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }) => {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            };
        };
        annotationUpdater: {
            updateAnnotationCategory: (annotation: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }, newCategory: string) => {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            };
            updateAnnotationsCategory: (annotations: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }[], newCategory: string, shouldUpdate: (annotation: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }) => boolean) => {
                newAnnotations: {
                    readonly category: string;
                    readonly entityId: string;
                    readonly start: number;
                    readonly text: string;
                    readonly certaintyScore: number | undefined;
                }[];
                updatedAnnotations: {
                    readonly category: string;
                    readonly entityId: string;
                    readonly start: number;
                    readonly text: string;
                    readonly certaintyScore: number | undefined;
                }[];
            };
            updateAnnotationText: (annotation: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }, newText: string, newStart: number) => {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            };
        };
        areAnnotationsIncluded: typeof areAnnotationsIncluded;
        areOverlapping: typeof areOverlapping;
        buildAnnotation: typeof buildAnnotation;
        comparator: {
            equal(annotation1: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }, annotation2: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }): boolean;
            equalModuloCategory(annotation1: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }, annotation2: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }): boolean;
            compareByText(annotation1: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }, annotation2: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }): number;
        };
        computeNearbyText: typeof computeNearbyText;
        entityIdHandler: {
            compute: (category: string, text: string) => string;
            getCategory: (entityId: string) => string;
            getText: (entityId: string) => string;
            syncEntityId: (annotation: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }) => {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            };
            syncEntityIdWithCategory: (annotation: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }) => {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            };
        };
        isAnnotationTextInAnnotations: typeof isAnnotationTextInAnnotations;
        sortAnnotations: typeof sortAnnotations;
        stringify: typeof stringify;
    };
};

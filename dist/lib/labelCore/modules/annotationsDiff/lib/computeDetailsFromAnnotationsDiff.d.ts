import { annotationsDiffType } from '../annotationsDiffType';
export { computeDetailsFromAnnotationsDiff };
declare function computeDetailsFromAnnotationsDiff(annotationsDiff: annotationsDiffType): {
    addedAnnotations: {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }[];
    categoryChangedAnnotations: [{
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }, {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }][];
    deletedAnnotations: {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }[];
    resizedBiggerAnnotations: [{
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }, {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }][];
    resizedSmallerAnnotations: [{
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }, {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }][];
};

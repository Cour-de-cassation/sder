import { annotationType } from '../../modules/annotation';
export { annotationOverlapDetector };
declare const annotationOverlapDetector: {
    isAnnotationTextOverlappedWithAnyAnnotations: typeof isAnnotationTextOverlappedWithAnyAnnotations;
    findOverlappingAnnotation: typeof findOverlappingAnnotation;
};
declare function isAnnotationTextOverlappedWithAnyAnnotations(annotations: annotationType[], annotationStart: number, annotationText: string): boolean;
declare function findOverlappingAnnotation(annotations: annotationType[], annotationStart: number, annotationText: string): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
} | undefined;

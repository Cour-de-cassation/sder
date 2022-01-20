import { annotationType } from '../annotationType';
export { annotationUpdater };
declare const annotationUpdater: {
    updateAnnotationCategory: typeof updateAnnotationCategory;
    updateAnnotationsCategory: typeof updateAnnotationsCategory;
    updateAnnotationText: typeof updateAnnotationText;
};
declare function updateAnnotationsCategory(annotations: annotationType[], newCategory: string, shouldUpdate: (annotation: annotationType) => boolean): {
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
declare function updateAnnotationCategory(annotation: annotationType, newCategory: string): annotationType;
declare function updateAnnotationText(annotation: annotationType, newText: string, newStart: number): annotationType;

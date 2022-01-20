import { annotationType } from '../../modules/annotation';
export { annotationTextDetector };
declare const annotationTextDetector: {
    detectAnnotationTextsAndIndices: typeof detectAnnotationTextsAndIndices;
};
declare function detectAnnotationTextsAndIndices({ documentText, annotationText, annotations, }: {
    documentText: string;
    annotationText: string;
    annotations: annotationType[];
}): {
    text: string;
    index: number;
}[];

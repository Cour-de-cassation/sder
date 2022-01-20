import { annotationType } from '../../modules/annotation';
export { textSplitter };
export type { annotationChunkType, textChunkType, textChunkContentType };
declare const textSplitter: {
    splitTextAccordingToAnnotations: typeof splitTextAccordingToAnnotations;
    buildTextChunk: typeof buildTextChunk;
    buildAnnotationChunk: typeof buildAnnotationChunk;
    removeEmptyTextChunks: typeof removeEmptyTextChunks;
};
declare type annotationChunkType = {
    type: 'annotation';
    index: number;
    annotation: annotationType;
};
declare type textChunkType = {
    type: 'text';
    content: textChunkContentType;
    before: textChunkContentType[];
    after: textChunkContentType[];
};
declare type textChunkContentType = {
    index: number;
    text: string;
};
declare function splitTextAccordingToAnnotations(text: string, annotations: annotationType[]): Array<annotationChunkType | textChunkType>;
declare function buildTextChunk(text: string, index: number, before?: textChunkContentType[], after?: textChunkContentType[]): textChunkType;
declare function buildAnnotationChunk(annotation: annotationType): annotationChunkType;
declare function removeEmptyTextChunks(chunks: Array<textChunkType | annotationChunkType>): Array<textChunkType | annotationChunkType>;

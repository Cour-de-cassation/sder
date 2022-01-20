"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textSplitter = void 0;
var textSplitter = {
    splitTextAccordingToAnnotations: splitTextAccordingToAnnotations,
    buildTextChunk: buildTextChunk,
    buildAnnotationChunk: buildAnnotationChunk,
    removeEmptyTextChunks: removeEmptyTextChunks,
};
exports.textSplitter = textSplitter;
function splitTextAccordingToAnnotations(text, annotations) {
    var sortedAnnotations = __spreadArrays(annotations).sort(function (annotation1, annotation2) { return annotation1.start - annotation2.start; });
    var splittedText = [];
    var currentIndex = 0;
    sortedAnnotations.forEach(function (annotation) {
        splittedText.push(buildTextChunk(text.slice(currentIndex, annotation.start), currentIndex));
        splittedText.push(buildAnnotationChunk(annotation));
        currentIndex = annotation.start + annotation.text.length;
    });
    splittedText.push(buildTextChunk(text.slice(currentIndex), currentIndex));
    return removeEmptyTextChunks(splittedText);
}
function buildTextChunk(text, index, before, after) {
    return {
        type: 'text',
        content: {
            index: index,
            text: text,
        },
        before: before || [],
        after: after || [],
    };
}
function buildAnnotationChunk(annotation) {
    return {
        type: 'annotation',
        index: annotation.start,
        annotation: annotation,
    };
}
function removeEmptyTextChunks(chunks) {
    return chunks.filter(function (chunk) { return chunk.type !== 'text' || chunk.content.text !== ''; });
}

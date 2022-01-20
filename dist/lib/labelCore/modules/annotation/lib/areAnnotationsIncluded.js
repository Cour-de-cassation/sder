"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areAnnotationsIncluded = void 0;
function areAnnotationsIncluded(annotation1, annotation2) {
    if (annotation1.start === annotation2.start && annotation1.text === annotation2.text) {
        return 0;
    }
    if (annotation1.start >= annotation2.start &&
        annotation1.start + annotation1.text.length <= annotation2.start + annotation2.text.length) {
        return -1;
    }
    if (annotation1.start <= annotation2.start &&
        annotation1.start + annotation1.text.length >= annotation2.start + annotation2.text.length) {
        return 1;
    }
    return undefined;
}
exports.areAnnotationsIncluded = areAnnotationsIncluded;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverse = void 0;
function inverse(annotationsDiff) {
    return {
        before: annotationsDiff.after,
        after: annotationsDiff.before,
    };
}
exports.inverse = inverse;

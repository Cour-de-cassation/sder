"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAnnotationsDiff = void 0;
var annotation_1 = require("../../annotation");
function buildAnnotationsDiff(before, after) {
    return { before: annotation_1.annotationModule.lib.sortAnnotations(before), after: annotation_1.annotationModule.lib.sortAnnotations(after) };
}
exports.buildAnnotationsDiff = buildAnnotationsDiff;

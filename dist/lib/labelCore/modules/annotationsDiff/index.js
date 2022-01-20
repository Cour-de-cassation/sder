"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationsDiffModule = void 0;
var annotationsDiffType_1 = require("./annotationsDiffType");
var generator_1 = require("./generator");
var lib_1 = require("./lib");
var annotationsDiffModule = {
    model: annotationsDiffType_1.annotationsDiffModel,
    generator: generator_1.annotationsDiffGenerator,
    lib: {
        applyToAnnotations: lib_1.applyToAnnotations,
        assertAnnotationsDiffAreConsistent: lib_1.assertAnnotationsDiffAreConsistent,
        buildAnnotationsDiff: lib_1.buildAnnotationsDiff,
        computeAnnotationsDiff: lib_1.computeAnnotationsDiff,
        computeDetailsFromAnnotationsDiff: lib_1.computeDetailsFromAnnotationsDiff,
        inverse: lib_1.inverse,
        squash: lib_1.squash,
    },
};
exports.annotationsDiffModule = annotationsDiffModule;

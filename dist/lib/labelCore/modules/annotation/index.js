"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationModule = void 0;
var annotationType_1 = require("./annotationType");
var generator_1 = require("./generator");
var lib_1 = require("./lib");
var annotationModule = {
    model: annotationType_1.annotationModel,
    generator: generator_1.annotationGenerator,
    lib: {
        annotationLinker: lib_1.annotationLinker,
        annotationUpdater: lib_1.annotationUpdater,
        areAnnotationsIncluded: lib_1.areAnnotationsIncluded,
        areOverlapping: lib_1.areOverlapping,
        buildAnnotation: lib_1.buildAnnotation,
        comparator: lib_1.comparator,
        computeNearbyText: lib_1.computeNearbyText,
        entityIdHandler: lib_1.entityIdHandler,
        isAnnotationTextInAnnotations: lib_1.isAnnotationTextInAnnotations,
        sortAnnotations: lib_1.sortAnnotations,
        stringify: lib_1.stringify,
    },
};
exports.annotationModule = annotationModule;

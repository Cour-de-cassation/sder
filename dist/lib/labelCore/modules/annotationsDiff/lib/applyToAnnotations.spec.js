"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var generator_1 = require("../generator");
var applyToAnnotations_1 = require("./applyToAnnotations");
describe('applyToAnnotations', function () {
    it('should compute the annotations after the application of the diff', function () {
        var annotations = [{}, {}, {}, {}].map(annotation_1.annotationModule.generator.generate);
        var newAnnotation = annotation_1.annotationModule.generator.generate();
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            before: [annotations[0], annotations[3]],
            after: [newAnnotation],
        });
        var newAnnotations = applyToAnnotations_1.applyToAnnotations(annotations, annotationsDiff);
        expect(newAnnotations).toEqual(annotation_1.annotationModule.lib.sortAnnotations([annotations[1], annotations[2], newAnnotation]));
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var buildAnnotationsDiff_1 = require("./buildAnnotationsDiff");
var computeAnnotationsDiff_1 = require("./computeAnnotationsDiff");
describe('computeAnnotationsDiff', function () {
    it('should compute the annotations diff between two set of annotations', function () {
        var annotations = [{}, {}, {}, {}, {}].map(annotation_1.annotationModule.generator.generate);
        var annotations1 = [annotations[0], annotations[1], annotations[2]];
        var annotations2 = [annotations[3], annotations[4], annotations[1]];
        var annotationsDiff = computeAnnotationsDiff_1.computeAnnotationsDiff(annotations1, annotations2);
        expect(annotationsDiff).toEqual(buildAnnotationsDiff_1.buildAnnotationsDiff([annotations[0], annotations[2]], [annotations[3], annotations[4]]));
    });
    it('should compute the annotations diff between after an association', function () {
        var annotation1 = annotation_1.annotationModule.generator.generate();
        var annotation2 = annotation_1.annotationModule.generator.generate();
        var annotation1Linked = annotation_1.annotationModule.lib.annotationLinker.link(annotation1, annotation2);
        var annotations1 = [annotation1, annotation2];
        var annotations2 = [annotation1Linked, annotation2];
        var annotationsDiff = computeAnnotationsDiff_1.computeAnnotationsDiff(annotations1, annotations2);
        expect(annotationsDiff).toEqual(buildAnnotationsDiff_1.buildAnnotationsDiff([annotation1], [annotation1Linked]));
    });
});

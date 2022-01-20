"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var buildAnnotationsDiff_1 = require("./buildAnnotationsDiff");
var computeDetailsFromAnnotationsDiff_1 = require("./computeDetailsFromAnnotationsDiff");
describe('computeDetailsFromAnnotationsDiff', function () {
    var annotationsBefore = [
        { category: 'CATEGORY', text: 'TEXT', start: 10 },
        { category: 'ANOTHER_CATEGORY', text: 'ANOTHER_TEXT', start: 30 },
        { category: 'CATEGORY', text: 'LAP', start: 24 },
        { category: 'CATEGORY', text: 'TOO_BIG', start: 70 },
        { category: 'ANOTHER_CATEGORY', text: 'RESIZED', start: 100 },
    ].map(annotation_1.annotationModule.generator.generate);
    var annotationsAfter = [
        { category: 'CATEGORY', text: 'ANOTHER_TEXT', start: 30 },
        { category: 'CATEGORY', text: 'OVERLAP', start: 20 },
        { category: 'CATEGORY', text: 'NEW_TEXT', start: 0 },
        { category: 'CATEGORY', text: 'BIG', start: 74 },
        { category: 'CATEGORY', text: 'RESIZED_TEXT', start: 100 },
    ].map(annotation_1.annotationModule.generator.generate);
    var annotationsDiff = buildAnnotationsDiff_1.buildAnnotationsDiff(annotationsBefore, annotationsAfter);
    it('should compute the details of the annotations added in the diff', function () {
        var addedAnnotations = computeDetailsFromAnnotationsDiff_1.computeDetailsFromAnnotationsDiff(annotationsDiff).addedAnnotations;
        expect(addedAnnotations).toEqual([annotationsAfter[2]]);
    });
    it('should compute the details of the annotations deleted in the diff', function () {
        var deletedAnnotations = computeDetailsFromAnnotationsDiff_1.computeDetailsFromAnnotationsDiff(annotationsDiff).deletedAnnotations;
        expect(deletedAnnotations).toEqual([annotationsBefore[0]]);
    });
    it('should compute the details of the annotations with a modified category in the diff', function () {
        var categoryChangedAnnotations = computeDetailsFromAnnotationsDiff_1.computeDetailsFromAnnotationsDiff(annotationsDiff).categoryChangedAnnotations;
        expect(categoryChangedAnnotations).toEqual([[annotationsBefore[1], annotationsAfter[0]]]);
    });
    it('should compute the details of the annotations resized bigger in the diff', function () {
        var resizedBiggerAnnotations = computeDetailsFromAnnotationsDiff_1.computeDetailsFromAnnotationsDiff(annotationsDiff).resizedBiggerAnnotations;
        expect(resizedBiggerAnnotations).toEqual([
            [annotationsBefore[2], annotationsAfter[1]],
            [annotationsBefore[4], annotationsAfter[4]],
        ]);
    });
    it('should compute the details of the annotations resized smaller in the diff', function () {
        var resizedSmallerAnnotations = computeDetailsFromAnnotationsDiff_1.computeDetailsFromAnnotationsDiff(annotationsDiff).resizedSmallerAnnotations;
        expect(resizedSmallerAnnotations).toEqual([[annotationsBefore[3], annotationsAfter[3]]]);
    });
});

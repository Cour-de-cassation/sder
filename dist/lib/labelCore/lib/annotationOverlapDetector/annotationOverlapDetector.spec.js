"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../modules/annotation");
var annotationOverlapDetector_1 = require("./annotationOverlapDetector");
describe('annotationOverlapDetector', function () {
    describe('isAnnotationTextOverlappedWithAnyAnnotations', function () {
        it('should return true if the annotation is overlapped', function () {
            var annotations = [{ text: 'MACHIN', start: 10 }].map(annotation_1.annotationModule.generator.generate);
            var annotationStart = 13;
            var annotationText = 'TRUC';
            expect(annotationOverlapDetector_1.annotationOverlapDetector.isAnnotationTextOverlappedWithAnyAnnotations(annotations, annotationStart, annotationText)).toBeTruthy();
        });
        it('should return false if the annotation is not overlapped', function () {
            var annotations = [
                { text: 'MACHIN', start: 10 },
                { text: 'CHOSE', start: 30 },
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationStart = 20;
            var annotationText = 'TRUC';
            expect(annotationOverlapDetector_1.annotationOverlapDetector.isAnnotationTextOverlappedWithAnyAnnotations(annotations, annotationStart, annotationText)).toBeFalsy();
        });
    });
    describe('findOverlappingAnnotation', function () {
        it('should return the overlapping annotation if relevant', function () {
            var annotations = [{ text: 'MACHIN', start: 10 }].map(annotation_1.annotationModule.generator.generate);
            var annotationStart = 13;
            var annotationText = 'TRUC';
            expect(annotationOverlapDetector_1.annotationOverlapDetector.findOverlappingAnnotation(annotations, annotationStart, annotationText)).toEqual(annotations[0]);
        });
        it('should return undefined if not relevant', function () {
            var annotations = [
                { text: 'MACHIN', start: 10 },
                { text: 'CHOSE', start: 30 },
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationStart = 20;
            var annotationText = 'TRUC';
            expect(annotationOverlapDetector_1.annotationOverlapDetector.findOverlappingAnnotation(annotations, annotationStart, annotationText)).toEqual(undefined);
        });
    });
});

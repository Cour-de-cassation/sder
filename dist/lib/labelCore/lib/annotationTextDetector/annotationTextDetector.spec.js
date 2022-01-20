"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../modules/annotation");
var annotationTextDetector_1 = require("./annotationTextDetector");
describe('annotationTextDetector', function () {
    describe('detectAnnotationTextsAndIndices', function () {
        it('should return all the annotation text and indices for the given text and document', function () {
            var documentText = 'engineering: Benoit is a software engineer. Nicolas is a software engineer. They are engineers.';
            var annotationText = 'engineer';
            var annotations = [
                generateFetchedAnnotation({
                    category: 'FIRST_NAME',
                    start: 13,
                    text: 'Benoit',
                }),
                generateFetchedAnnotation({
                    category: 'FIRST_NAME',
                    start: 44,
                    text: 'Nicolas',
                }),
            ];
            var annotationTextsAndIndices = annotationTextDetector_1.annotationTextDetector.detectAnnotationTextsAndIndices({
                documentText: documentText,
                annotationText: annotationText,
                annotations: annotations,
            });
            expect(annotationTextsAndIndices).toEqual([
                {
                    index: 34,
                    text: annotationText,
                },
                {
                    index: 66,
                    text: annotationText,
                },
            ]);
        });
        it('should return all the annotation text and indices for the given text and document, including different cases and accents', function () {
            var documentText = 'M. ELEVES, Mrs Élevès and Sir elevès';
            var annotationText = 'ELEVES';
            var annotationTextsAndIndices = annotationTextDetector_1.annotationTextDetector.detectAnnotationTextsAndIndices({
                documentText: documentText,
                annotationText: annotationText,
                annotations: [],
            });
            expect(annotationTextsAndIndices).toEqual([
                {
                    index: 3,
                    text: 'ELEVES',
                },
                {
                    index: 15,
                    text: 'Élevès',
                },
                {
                    index: 30,
                    text: 'elevès',
                },
            ]);
        });
        it('should not return any text and index if it is inside another annotation', function () {
            var annotationText = 'Baker';
            var documentText = 'He lives at 221B, Baker street';
            var annotations = [
                generateFetchedAnnotation({
                    category: 'ADRESS',
                    start: 12,
                    text: '221B, Baker street',
                }),
            ];
            var annotationTextsAndIndices = annotationTextDetector_1.annotationTextDetector.detectAnnotationTextsAndIndices({
                documentText: documentText,
                annotationText: annotationText,
                annotations: annotations,
            });
            expect(annotationTextsAndIndices).toEqual([]);
        });
        it('should not return any text and index if it overlaps another annotation at its beginning', function () {
            var annotationText = 'Baker Street';
            var documentText = 'Josephine Baker Street';
            var annotations = [
                generateFetchedAnnotation({
                    category: 'FULL_NAME',
                    start: 0,
                    text: 'Josephine Baker',
                }),
            ];
            var annotationTextsAndIndices = annotationTextDetector_1.annotationTextDetector.detectAnnotationTextsAndIndices({
                documentText: documentText,
                annotationText: annotationText,
                annotations: annotations,
            });
            expect(annotationTextsAndIndices).toEqual([]);
        });
        it('should not return any text and index if it overlaps another annotation at its end', function () {
            var annotationText = 'Josephine Baker';
            var documentText = 'Josephine Baker Street';
            var annotations = [
                generateFetchedAnnotation({
                    category: 'ADRESS',
                    start: 10,
                    text: 'Baker Street',
                }),
            ];
            var annotationTextsAndIndices = annotationTextDetector_1.annotationTextDetector.detectAnnotationTextsAndIndices({
                documentText: documentText,
                annotationText: annotationText,
                annotations: annotations,
            });
            expect(annotationTextsAndIndices).toEqual([]);
        });
        it('should not return text and indices of occurences inside another word', function () {
            var documentText = 'engineering. engineering is difficult';
            var annotationText = 'engineer';
            var annotations = [];
            var annotationTextsAndIndices = annotationTextDetector_1.annotationTextDetector.detectAnnotationTextsAndIndices({
                documentText: documentText,
                annotationText: annotationText,
                annotations: annotations,
            });
            expect(annotationTextsAndIndices).toEqual([]);
        });
        it('should return text and indices when initials', function () {
            var documentText = 'B.SERRANO and B.GLE';
            var annotationText = 'B.';
            var annotations = [];
            var annotationTextsAndIndices = annotationTextDetector_1.annotationTextDetector.detectAnnotationTextsAndIndices({
                documentText: documentText,
                annotationText: annotationText,
                annotations: annotations,
            });
            expect(annotationTextsAndIndices).toEqual([
                { index: 0, text: annotationText },
                { index: 14, text: annotationText },
            ]);
        });
    });
});
function generateFetchedAnnotation(fields) {
    return annotation_1.annotationModule.generator.generate(fields);
}

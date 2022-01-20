"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../modules/annotation");
var textSplitter_1 = require("./textSplitter");
describe('textSplitter', function () {
    describe('splitTextAccordingToAnnotations', function () {
        var annotations = [
            { category: 'firstName', text: 'Benoit', start: 0 },
            { category: 'firstName', text: 'Nicolas', start: 29 },
            { category: 'firstName', text: 'Romain', start: 61 },
        ].map(annotation_1.annotationModule.generator.generate);
        it('should split a text according to the given annotations', function () {
            var text = 'Benoit is software engineer. Nicolas is a software engineer. Romain is a designer.';
            var splittedText = textSplitter_1.textSplitter.splitTextAccordingToAnnotations(text, annotations);
            expect(splittedText).toEqual([
                {
                    type: 'annotation',
                    index: annotations[0].start,
                    annotation: annotations[0],
                },
                { type: 'text', content: { index: 6, text: ' is software engineer. ' }, before: [], after: [] },
                {
                    type: 'annotation',
                    index: annotations[1].start,
                    annotation: annotations[1],
                },
                { type: 'text', content: { index: 36, text: ' is a software engineer. ' }, before: [], after: [] },
                {
                    type: 'annotation',
                    index: annotations[2].start,
                    annotation: annotations[2],
                },
                { type: 'text', content: { index: 67, text: ' is a designer.' }, before: [], after: [] },
            ]);
        });
    });
});

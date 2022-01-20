"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var annotationLinker_1 = require("./annotationLinker");
describe('annotationLinker', function () {
    describe('link/unlink', function () {
        it('should be identity', function () {
            var annotationSource = generator_1.annotationGenerator.generate();
            var annotationTarget = generator_1.annotationGenerator.generate();
            var newAnnotationSource = annotationLinker_1.annotationLinker.unlink(annotationLinker_1.annotationLinker.link(annotationSource, annotationTarget));
            expect(newAnnotationSource).toEqual(annotationSource);
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var areAnnotationsIncluded_1 = require("./areAnnotationsIncluded");
var buildAnnotation_1 = require("./buildAnnotation");
describe('areAnnotationsIncluded', function () {
    it('should return 0 if the annotations are equal', function () {
        var annotation1 = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 0, text: 'Marie' });
        var annotation2 = buildAnnotation_1.buildAnnotation({ category: 'prenom', start: 0, text: 'Marie' });
        expect(areAnnotationsIncluded_1.areAnnotationsIncluded(annotation1, annotation2)).toBe(0);
    });
    it('should return 1 if the first annotation contains the second one', function () {
        var annotation1 = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 0, text: 'Jean-Marie' });
        var annotation2 = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 0, text: 'Jean' });
        expect(areAnnotationsIncluded_1.areAnnotationsIncluded(annotation1, annotation2)).toBe(1);
    });
    it('should return -1 if the first annotation is contained by the second one', function () {
        var annotation1 = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 0, text: 'Jean' });
        var annotation2 = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 0, text: 'Jean-Marie' });
        expect(areAnnotationsIncluded_1.areAnnotationsIncluded(annotation1, annotation2)).toBe(-1);
    });
    it('should return undefined if no annotation contains the other one', function () {
        var annotation1 = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 0, text: 'Jean' });
        var annotation2 = buildAnnotation_1.buildAnnotation({ category: 'nom', start: 5, text: 'Marie' });
        expect(areAnnotationsIncluded_1.areAnnotationsIncluded(annotation1, annotation2)).toBe(undefined);
    });
});

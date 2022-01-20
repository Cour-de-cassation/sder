"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildAnnotation_1 = require("./buildAnnotation");
var isAnnotationTextInAnnotations_1 = require("./isAnnotationTextInAnnotations");
describe('isAnnotationTextInAnnotations', function () {
    it('should return true if the annotation text is in annotations with space', function () {
        var annotation = buildAnnotation_1.buildAnnotation({
            start: 90,
            text: 'Harry Potter',
            category: 'personnePhysiqueNom',
        });
        var annotationsToSearchIn = [
            { start: 90, text: 'Harry', category: 'personnePhysiqueNom' },
            { start: 96, text: 'Potter', category: 'personnePhysiqueNom' },
        ].map(buildAnnotation_1.buildAnnotation);
        expect(isAnnotationTextInAnnotations_1.isAnnotationTextInAnnotations(annotation, annotationsToSearchIn)).toBe(true);
    });
    it('should return true if the annotation text is in annotations with dash', function () {
        var annotation = buildAnnotation_1.buildAnnotation({
            start: 90,
            text: 'Bruni-Sarkozy',
            category: 'personnePhysiqueNom',
        });
        var annotationsToSearchIn = [
            { start: 90, text: 'Bruni', category: 'personnePhysiqueNom' },
            { start: 96, text: 'Sarkozy', category: 'personnePhysiqueNom' },
        ].map(buildAnnotation_1.buildAnnotation);
        expect(isAnnotationTextInAnnotations_1.isAnnotationTextInAnnotations(annotation, annotationsToSearchIn)).toBe(true);
    });
    it('should return false if the annotation text is not in annotations', function () {
        var annotation = buildAnnotation_1.buildAnnotation({
            start: 90,
            text: 'Harry Potter',
            category: 'personnePhysiqueNom',
        });
        var annotationsToSearchIn = [
            { start: 90, text: 'Harry', category: 'personnePhysiqueNom' },
            { start: 150, text: 'Potter', category: 'personnePhysiqueNom' },
        ].map(buildAnnotation_1.buildAnnotation);
        expect(isAnnotationTextInAnnotations_1.isAnnotationTextInAnnotations(annotation, annotationsToSearchIn)).toBe(false);
    });
});

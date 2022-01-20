"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var generator_1 = require("../generator");
var assertAnnotationsDiffCompatibleWithPreviousAnnotations_1 = require("./assertAnnotationsDiffCompatibleWithPreviousAnnotations");
describe('assertAnnotationsDiffCompatibleWithPreviousAnnotations', function () {
    it('should return true if no discrepancy is found', function () {
        var previousAnnotations = [
            { start: 0, text: 'TRUC' },
            { start: 20, text: 'MACHIN' },
        ].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            after: [annotation_1.annotationModule.generator.generate({ start: 10, text: 'BIDULE' })],
        });
        expect(assertAnnotationsDiffCompatibleWithPreviousAnnotations_1.assertAnnotationsDiffCompatibleWithPreviousAnnotations(previousAnnotations, annotationsDiff)).toBeTruthy();
    });
    it('should return true if there is a change in before array', function () {
        var previousAnnotations = [
            { start: 0, text: 'TRUC' },
            { start: 20, text: 'MACHIN' },
            { start: 30, text: 'BIDULE' },
        ].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            before: [previousAnnotations[1]],
            after: [annotation_1.annotationModule.generator.generate({ start: 19, text: ' MACHIN' })],
        });
        expect(assertAnnotationsDiffCompatibleWithPreviousAnnotations_1.assertAnnotationsDiffCompatibleWithPreviousAnnotations(previousAnnotations, annotationsDiff)).toBeTruthy();
    });
    it('should throw if a created annotation overlaps a previous one', function () {
        var previousAnnotations = [
            { start: 0, text: 'TRUC', category: 'nom' },
            { start: 20, text: 'MACHIN', category: 'nom' },
        ].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            after: [annotation_1.annotationModule.generator.generate({ start: 15, text: 'BIDULE', category: 'nom' })],
        });
        var functionCall = function () {
            return assertAnnotationsDiffCompatibleWithPreviousAnnotations_1.assertAnnotationsDiffCompatibleWithPreviousAnnotations(previousAnnotations, annotationsDiff);
        };
        expect(functionCall).toThrowError(Error('annotations diff previousAnnotation (nom / MACHIN / 20) overlaps with afterAnnotation (nom / BIDULE / 15)'));
    });
    it('should throw if a bigger annotation overlaps a previous one', function () {
        var previousAnnotations = [
            { start: 0, text: 'TRUC', category: 'nom' },
            { start: 20, text: 'MACHIN', category: 'nom' },
            { start: 10, text: 'BIDULE', category: 'nom' },
        ].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiff = {
            before: [annotation_1.annotationModule.generator.generate({ start: 10, text: 'BIDULE', category: 'nom' })],
            after: [annotation_1.annotationModule.generator.generate({ start: 10, text: 'BIDULE CHOSE', category: 'nom' })],
        };
        var functionCall = function () {
            return assertAnnotationsDiffCompatibleWithPreviousAnnotations_1.assertAnnotationsDiffCompatibleWithPreviousAnnotations(previousAnnotations, annotationsDiff);
        };
        expect(functionCall).toThrowError(Error('annotations diff previousAnnotation (nom / MACHIN / 20) overlaps with afterAnnotation (nom / BIDULE CHOSE / 10)'));
    });
});

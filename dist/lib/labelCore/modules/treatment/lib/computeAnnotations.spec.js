"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var annotationsDiff_1 = require("../../annotationsDiff");
var id_1 = require("../../id");
var generator_1 = require("../generator");
var computeAnnotations_1 = require("./computeAnnotations");
describe('computeAnnotations', function () {
    var annotations = [{ text: '0' }, { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }].map(annotation_1.annotationModule.generator.generate);
    var documentId = id_1.idModule.lib.buildId();
    it('should compute the annotations set from treatments', function () {
        var treatments = [
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [],
                    after: [annotations[0], annotations[1]],
                }),
                documentId: documentId,
                order: 0,
                source: 'NLP',
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[0]],
                    after: [annotations[2]],
                }),
                documentId: documentId,
                order: 1,
                source: 'postProcess',
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[1]],
                    after: [annotations[3], annotations[4]],
                }),
                documentId: documentId,
                order: 2,
                source: 'annotator',
            },
        ].map(generator_1.treatmentGenerator.generate);
        var annotationsFromTreatments = computeAnnotations_1.computeAnnotations(treatments);
        expect(annotation_1.annotationModule.lib.sortAnnotations(annotationsFromTreatments)).toEqual(annotation_1.annotationModule.lib.sortAnnotations([annotations[2], annotations[3], annotations[4]]));
    });
    it('should throw if the treatment are not on the same document', function () {
        var treatments = [
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [],
                    after: [annotations[0], annotations[1]],
                }),
                documentId: id_1.idModule.lib.buildId(),
                order: 0,
                source: 'NLP',
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[0]],
                    after: [annotations[2]],
                }),
                documentId: id_1.idModule.lib.buildId(),
                order: 1,
                source: 'postProcess',
            },
        ].map(generator_1.treatmentGenerator.generate);
        expect(function () { return computeAnnotations_1.computeAnnotations(treatments); }).toThrow("Can not compute annotations from inconsistent treatments : [" + id_1.idModule.lib.convertToString(treatments[0]._id) + ", " + id_1.idModule.lib.convertToString(treatments[1]._id) + "]");
    });
    it('should throw if the first treatment is empty at the beginning', function () {
        var treatments = [
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[3]],
                    after: [annotations[0], annotations[1]],
                }),
                documentId: documentId,
                order: 0,
                source: 'NLP',
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[0]],
                    after: [annotations[2]],
                }),
                documentId: documentId,
                order: 1,
                source: 'postProcess',
            },
        ].map(generator_1.treatmentGenerator.generate);
        expect(function () { return computeAnnotations_1.computeAnnotations(treatments); }).toThrow("Can not compute annotations from inconsistent treatments : [" + id_1.idModule.lib.convertToString(treatments[0]._id) + ", " + id_1.idModule.lib.convertToString(treatments[1]._id) + "]");
    });
    it('should throw if there are missing treatments', function () {
        var treatments = [
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [],
                    after: [annotations[0], annotations[1]],
                }),
                documentId: documentId,
                order: 0,
                source: 'NLP',
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[0]],
                    after: [annotations[2]],
                }),
                documentId: documentId,
                order: 2,
                source: 'postProcess',
            },
        ].map(generator_1.treatmentGenerator.generate);
        expect(function () { return computeAnnotations_1.computeAnnotations(treatments); }).toThrow("Can not compute annotations from inconsistent treatments : [" + id_1.idModule.lib.convertToString(treatments[0]._id) + ", " + id_1.idModule.lib.convertToString(treatments[1]._id) + "]");
    });
});
describe('computeAnnotationsDiff', function () {
    var annotations = [{ text: '0' }, { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }].map(annotation_1.annotationModule.generator.generate);
    var documentId = id_1.idModule.lib.buildId();
    it('should compute the annotations set from treatments', function () {
        var treatments = [
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [],
                    after: [annotations[0], annotations[1]],
                }),
                documentId: documentId,
                order: 0,
                source: 'NLP',
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[0]],
                    after: [annotations[2]],
                }),
                documentId: documentId,
                order: 1,
                source: 'postProcess',
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[1]],
                    after: [annotations[3], annotations[4]],
                }),
                documentId: documentId,
                order: 2,
                source: 'annotator',
            },
        ].map(generator_1.treatmentGenerator.generate);
        var annotationDiffs = computeAnnotations_1.computeAnnotationsDiff(treatments);
        expect(annotationDiffs).toEqual({ before: [], after: [annotations[2], annotations[3], annotations[4]] });
    });
});

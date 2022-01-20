"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var annotationsDiff_1 = require("../../annotationsDiff");
var id_1 = require("../../id");
var generator_1 = require("../generator");
var sortInConsistentOrder_1 = require("./sortInConsistentOrder");
describe('sortInConsistentOrder', function () {
    var annotations = [{ text: '0' }, { text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }].map(annotation_1.annotationModule.generator.generate);
    var documentId = id_1.idModule.lib.buildId();
    it('should sort the treatments in a consistent order', function () {
        var treatments = [
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[1]],
                    after: [annotations[3], annotations[4]],
                }),
                documentId: documentId,
                order: 2,
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [],
                    after: [annotations[0], annotations[1]],
                }),
                documentId: documentId,
                order: 0,
            },
            {
                annotationsDiff: annotationsDiff_1.annotationsDiffModule.generator.generate({
                    before: [annotations[0]],
                    after: [annotations[2]],
                }),
                documentId: documentId,
                order: 1,
            },
        ].map(generator_1.treatmentGenerator.generate);
        var sortedTreatments = sortInConsistentOrder_1.sortInConsistentOrder(treatments);
        expect(sortedTreatments).toEqual([treatments[1], treatments[2], treatments[0]]);
    });
});

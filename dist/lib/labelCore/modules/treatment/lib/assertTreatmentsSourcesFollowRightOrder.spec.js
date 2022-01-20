"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var assertTreatmentsSourcesFollowRightOrder_1 = require("./assertTreatmentsSourcesFollowRightOrder");
describe('assertTreatmentsSourcesFollowRightOrder', function () {
    it('return true if treatments without supplementary annotations are consistent', function () {
        var treatments = [
            { source: 'NLP' },
            { source: 'postProcess' },
            { source: 'annotator' },
            { source: 'admin' },
        ].map(generator_1.treatmentGenerator.generate);
        var functionCall = function () { return assertTreatmentsSourcesFollowRightOrder_1.assertTreatmentsSourcesFollowRightOrder(treatments); };
        expect(functionCall()).toBe(true);
    });
    it('return true if treatments with supplementary annotations are consistent', function () {
        var treatments = [
            { source: 'NLP', order: 0 },
            { source: 'supplementaryAnnotations', order: 1 },
            { source: 'postProcess', order: 2 },
            { source: 'admin', order: 3 },
        ].map(generator_1.treatmentGenerator.generate);
        var functionCall = function () { return assertTreatmentsSourcesFollowRightOrder_1.assertTreatmentsSourcesFollowRightOrder(treatments); };
        expect(functionCall()).toBe(true);
    });
    it('return true if the treatments are not yet completed', function () {
        var treatments = [
            { source: 'NLP', order: 0 },
            { source: 'postProcess', order: 1 },
        ].map(generator_1.treatmentGenerator.generate);
        var functionCall = function () { return assertTreatmentsSourcesFollowRightOrder_1.assertTreatmentsSourcesFollowRightOrder(treatments); };
        expect(functionCall()).toBe(true);
    });
    it('throw if the treatments are doubled', function () {
        var treatments = [
            { source: 'NLP', order: 0 },
            { source: 'postProcess', order: 1 },
            { source: 'NLP', order: 2 },
            { source: 'postProcess', order: 3 },
        ].map(generator_1.treatmentGenerator.generate);
        var functionCall = function () { return assertTreatmentsSourcesFollowRightOrder_1.assertTreatmentsSourcesFollowRightOrder(treatments); };
        expect(functionCall).toThrowError(Error('Treatment sources do not follow the pattern: [NLP, postProcess, NLP, postProcess]'));
    });
});

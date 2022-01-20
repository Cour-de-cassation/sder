"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var generator_1 = require("../generator");
var squash_1 = require("./squash");
describe('squash', function () {
    it('should squash the given annotationsDiffs', function () {
        var annotations = [{ start: 0 }, { start: 1 }, { start: 2 }, { start: 3 }, { start: 4 }].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiffs = [
            { before: [], after: [annotations[0], annotations[1]] },
            { before: [annotations[0]], after: [annotations[2]] },
            { before: [annotations[1]], after: [annotations[3], annotations[4]] },
        ].map(generator_1.annotationsDiffGenerator.generate);
        var annotationsDiff = squash_1.squash(annotationsDiffs);
        expect(annotationsDiff.before).toEqual([]);
        expect(annotationsDiff.after).toEqual(annotation_1.annotationModule.lib.sortAnnotations([annotations[2], annotations[3], annotations[4]]));
    });
    it('should squash the given annotationsDiffs (none initialy empty case)', function () {
        var annotations = [{ start: 0 }, { start: 1 }, { start: 2 }, { start: 3 }, { start: 4 }, { start: 5 }].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiffs = [
            { before: [annotations[5]], after: [annotations[0], annotations[1]] },
            { before: [annotations[0]], after: [annotations[2]] },
            { before: [annotations[1]], after: [annotations[3], annotations[4]] },
        ].map(generator_1.annotationsDiffGenerator.generate);
        var annotationsDiff = squash_1.squash(annotationsDiffs);
        expect(annotationsDiff.before.sort()).toEqual([annotations[5]]);
        expect(annotationsDiff.after.sort()).toEqual(annotation_1.annotationModule.lib.sortAnnotations([annotations[2], annotations[3], annotations[4]]));
    });
    it('should squash the given annotationsDiffs (with 4 annotations)', function () {
        var annotations = [{ start: 1 }, { start: 2 }, { start: 3 }, { start: 4 }].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiffs = [
            { before: [annotations[0]], after: [annotations[2]] },
            { before: [annotations[1]], after: [annotations[3]] },
        ].map(generator_1.annotationsDiffGenerator.generate);
        var annotationsDiff = squash_1.squash(annotationsDiffs);
        expect(annotationsDiff.before.sort()).toEqual([annotations[0], annotations[1]]);
        expect(annotationsDiff.after.sort()).toEqual(annotation_1.annotationModule.lib.sortAnnotations([annotations[2], annotations[3]]));
    });
    it('should squash the given annotationsDiffs (with an annotation that is restored)', function () {
        var annotations = [{ start: 1 }, { start: 2 }].map(annotation_1.annotationModule.generator.generate);
        var annotationsDiffs = [
            { before: [], after: [annotations[0]] },
            { before: [annotations[0]], after: [] },
        ].map(generator_1.annotationsDiffGenerator.generate);
        var annotationsDiff = squash_1.squash(annotationsDiffs);
        expect(annotationsDiff.before).toEqual([]);
        expect(annotationsDiff.after).toEqual([]);
    });
    it('should work with no annotationDiff', function () {
        var annotationsDiffs = [].map(generator_1.annotationsDiffGenerator.generate);
        var annotationsDiff = squash_1.squash(annotationsDiffs);
        expect(annotationsDiff).toEqual({ before: [], after: [] });
    });
});

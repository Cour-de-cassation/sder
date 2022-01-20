"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var comparator_1 = require("./comparator");
describe('comparator', function () {
    describe('compareByPriority', function () {
        it('low should be equal to low', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 0 });
            var document2 = generator_1.documentGenerator.generate({ priority: 0 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toEqual(0);
        });
        it('low should be greater than medium', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 0 });
            var document2 = generator_1.documentGenerator.generate({ priority: 2 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toBeGreaterThanOrEqual(1);
        });
        it('low should be greater than high', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 0 });
            var document2 = generator_1.documentGenerator.generate({ priority: 4 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toBeGreaterThanOrEqual(1);
        });
        it('medium should be less than low', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 2 });
            var document2 = generator_1.documentGenerator.generate({ priority: 0 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toBeLessThanOrEqual(-1);
        });
        it('medium should be equal to medium', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 2 });
            var document2 = generator_1.documentGenerator.generate({ priority: 2 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toEqual(0);
        });
        it('medium should be greater than high', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 2 });
            var document2 = generator_1.documentGenerator.generate({ priority: 4 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toBeGreaterThanOrEqual(1);
        });
        it('high should be less than low', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 4 });
            var document2 = generator_1.documentGenerator.generate({ priority: 0 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toBeLessThanOrEqual(-1);
        });
        it('high should be less than medium', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 4 });
            var document2 = generator_1.documentGenerator.generate({ priority: 2 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toBeLessThanOrEqual(-1);
        });
        it('high should be equal to high', function () {
            var document1 = generator_1.documentGenerator.generate({ priority: 4 });
            var document2 = generator_1.documentGenerator.generate({ priority: 4 });
            var result = comparator_1.comparator.compareByPriority(document1, document2);
            expect(result).toEqual(0);
        });
    });
});

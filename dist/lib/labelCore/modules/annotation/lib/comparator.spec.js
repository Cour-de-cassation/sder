"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var comparator_1 = require("./comparator");
describe('comparator', function () {
    describe('equal', function () {
        it('should return true for equal annotations', function () {
            var annotation = generator_1.annotationGenerator.generate();
            var result = comparator_1.comparator.equal(annotation, annotation);
            expect(result).toEqual(true);
        });
        it('should return false otherwise', function () {
            var annotation1 = generator_1.annotationGenerator.generate({ text: 'TEXT1' });
            var annotation2 = generator_1.annotationGenerator.generate({ text: 'TEXT1' });
            var result = comparator_1.comparator.equal(annotation1, annotation2);
            expect(result).toEqual(false);
        });
    });
    describe('equalModuloCategory', function () {
        it('should return true if the annotations have the same text and start index', function () {
            var annotation1 = generator_1.annotationGenerator.generate({ category: 'CATEGORY', text: 'TEXT', start: 0 });
            var annotation2 = generator_1.annotationGenerator.generate({ category: 'ANOTHER_CATEGORY', text: 'TEXT', start: 0 });
            var result = comparator_1.comparator.equalModuloCategory(annotation1, annotation2);
            expect(result).toEqual(true);
        });
        it('should return false otherwise', function () {
            var annotation1 = generator_1.annotationGenerator.generate({ category: 'CATEGORY', text: 'TEXT', start: 0 });
            var annotation2 = generator_1.annotationGenerator.generate({
                category: 'ANOTHER_CATEGORY',
                text: 'ANOTHER_TEXT',
                start: 0,
            });
            var result = comparator_1.comparator.equalModuloCategory(annotation1, annotation2);
            expect(result).toEqual(false);
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var areOverlapping_1 = require("./areOverlapping");
describe('areOverlapping', function () {
    it('should return true if the given annotations are the same', function () {
        var annotations = [
            { text: 'TRUC', start: 10 },
            { text: 'TRUC', start: 10 },
        ].map(generator_1.annotationGenerator.generate);
        var result = areOverlapping_1.areOverlapping(annotations[0], annotations[1]);
        expect(result).toEqual(true);
    });
    it('should return true if the given annotations are the same modulo category', function () {
        var annotations = [
            { category: 'A', text: 'TRUC', start: 10 },
            { category: 'B', text: 'TRUC', start: 10 },
        ].map(generator_1.annotationGenerator.generate);
        var result = areOverlapping_1.areOverlapping(annotations[0], annotations[1]);
        expect(result).toEqual(true);
    });
    it('should return true if the given annotations are overlapping', function () {
        var annotations = [
            { text: 'MACHIN TRUC', start: 10 },
            { text: 'TRUC', start: 17 },
        ].map(generator_1.annotationGenerator.generate);
        var result = areOverlapping_1.areOverlapping(annotations[0], annotations[1]);
        expect(result).toEqual(true);
    });
    it('should return false if the given annotations are not overlapping', function () {
        var annotations = [
            { text: 'MACHIN TRUC', start: 10 },
            { text: 'TRUC', start: 27 },
        ].map(generator_1.annotationGenerator.generate);
        var result = areOverlapping_1.areOverlapping(annotations[0], annotations[1]);
        expect(result).toEqual(false);
    });
});

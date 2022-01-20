"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var generator_1 = require("../generator");
var assertAnnotationsDiffAutoConsistent_1 = require("./assertAnnotationsDiffAutoConsistent");
describe('assertAnnotationsDiffAutoConsistent', function () {
    it('should return true if no discrepancy is found', function () {
        var beforeAnnotations = [
            { start: 0, text: 'TRUC' },
            { start: 20, text: 'MACHIN' },
        ].map(function (fields) { return annotation_1.annotationModule.generator.generate(__assign(__assign({}, fields), { category: 'nom' })); });
        var afterAnnotations = [annotation_1.annotationModule.generator.generate({ start: 10, text: 'BIDULE' })];
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            before: beforeAnnotations,
            after: afterAnnotations,
        });
        expect(assertAnnotationsDiffAutoConsistent_1.assertAnnotationsDiffAutoConsistent(annotationsDiff)).toBeTruthy();
    });
    it('should return true if there is a change in before array', function () {
        var beforeAnnotations = [
            { start: 0, text: 'TRUC' },
            { start: 20, text: 'MACHIN' },
            { start: 30, text: 'BIDULE' },
        ].map(function (fields) { return annotation_1.annotationModule.generator.generate(__assign(__assign({}, fields), { category: 'nom' })); });
        var afterAnnotations = [annotation_1.annotationModule.generator.generate({ start: 40, text: ' MACHIN' })];
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            before: [beforeAnnotations[1]],
            after: afterAnnotations,
        });
        expect(assertAnnotationsDiffAutoConsistent_1.assertAnnotationsDiffAutoConsistent(annotationsDiff)).toBeTruthy();
    });
    it('should return throw if there is an total overlap in the after array', function () {
        var afterAnnotations = [
            { start: 0, text: 'TRUC' },
            { start: 20, text: 'MACHIN' },
            { start: 30, text: 'BIDULE' },
            { start: 27, text: 'LE BIDULE' },
        ].map(function (fields) { return annotation_1.annotationModule.generator.generate(__assign(__assign({}, fields), { category: 'nom' })); });
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            after: afterAnnotations,
        });
        var functionCall = function () { return assertAnnotationsDiffAutoConsistent_1.assertAnnotationsDiffAutoConsistent(annotationsDiff); };
        expect(functionCall).toThrow(Error('annotations (nom / LE BIDULE / 27) and (nom / BIDULE / 30) overlap.'));
    });
    it('should return throw if there is a partial left overlap in the after array', function () {
        var afterAnnotations = [
            { start: 0, text: 'TRUC' },
            { start: 20, text: 'MACHIN' },
            { start: 30, text: 'BIDULE' },
            { start: 30, text: 'BID' },
        ].map(function (fields) { return annotation_1.annotationModule.generator.generate(__assign(__assign({}, fields), { category: 'nom' })); });
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            after: afterAnnotations,
        });
        var functionCall = function () { return assertAnnotationsDiffAutoConsistent_1.assertAnnotationsDiffAutoConsistent(annotationsDiff); };
        expect(functionCall).toThrow(Error('annotations (nom / BIDULE / 30) and (nom / BID / 30) overlap.'));
    });
    it('should return throw if there is a partial right overlap in the after array', function () {
        var afterAnnotations = [
            { start: 0, text: 'TRUC' },
            { start: 20, text: 'MACHIN' },
            { start: 30, text: 'BIDULE' },
            { start: 33, text: 'ULE' },
        ].map(function (fields) { return annotation_1.annotationModule.generator.generate(__assign(__assign({}, fields), { category: 'nom' })); });
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({
            after: afterAnnotations,
        });
        var functionCall = function () { return assertAnnotationsDiffAutoConsistent_1.assertAnnotationsDiffAutoConsistent(annotationsDiff); };
        expect(functionCall).toThrow(Error('annotations (nom / BIDULE / 30) and (nom / ULE / 33) overlap.'));
    });
});

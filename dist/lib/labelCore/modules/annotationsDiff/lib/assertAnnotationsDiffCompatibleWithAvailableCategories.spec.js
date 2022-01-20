"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = require("../../settings");
var annotation_1 = require("../../annotation");
var generator_1 = require("../generator");
var assertAnnotationsDiffCompatibleWithAvailableCategories_1 = require("./assertAnnotationsDiffCompatibleWithAvailableCategories");
describe('assertAnnotationsDiffCompatibleWithAvailableCategories', function () {
    it('should return true', function () {
        var afterAnnotations = [{ category: 'prenom', start: 0, text: 'Benoit' }].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({ after: afterAnnotations });
        var settings = settings_1.settingsModule.lib.buildSettings({ prenom: {} });
        var availableCategories = Object.keys(settings);
        expect(assertAnnotationsDiffCompatibleWithAvailableCategories_1.assertAnnotationsDiffCompatibleWithAvailableCategories(annotationsDiff, availableCategories)).toBeTruthy();
    });
    it('should throw', function () {
        var beforeAnnotations = [{ category: 'prenom', start: 0, text: 'Benoit' }].map(annotation_1.annotationModule.lib.buildAnnotation);
        var afterAnnotations = [
            { category: 'nom', start: 0, text: 'Benoit' },
            { category: 'prenom', start: 10, text: 'Benoit' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = generator_1.annotationsDiffGenerator.generate({ before: beforeAnnotations, after: afterAnnotations });
        var settings = settings_1.settingsModule.lib.buildSettings({ prenom: {} });
        var availableCategories = Object.keys(settings);
        var functionCall = function () {
            return assertAnnotationsDiffCompatibleWithAvailableCategories_1.assertAnnotationsDiffCompatibleWithAvailableCategories(annotationsDiff, availableCategories);
        };
        expect(functionCall).toThrowError('(nom / Benoit (nom_Benoit) / 0) category is not in availableCategories: [prenom]');
    });
});

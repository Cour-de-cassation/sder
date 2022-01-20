"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../annotation");
var annotationsDiff_1 = require("../../annotationsDiff");
var settings_1 = require("../../settings");
var computeTreatmentInfo_1 = require("./computeTreatmentInfo");
describe('computeTreatmentInfo', function () {
    var settings = settings_1.settingsModule.lib.buildSettings({
        personnePhysiqueNom: { isSensitive: true, isAnonymized: true },
        personnePhysiquePrenom: { isSensitive: false, isAnonymized: true },
        personneMorale: { isSensitive: false, isAnonymized: false },
        adresse: { isSensitive: false, isAnonymized: true },
    });
    it('should compute the treatments info for a treatment', function () {
        // 'Spirou works at the Editions Dupuis with his cat';
        var previousAnnotations = [
            { start: 29, text: 'Dupuis', category: 'personnePhysiqueNom' },
            { start: 41, text: 'his cat', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Gaston', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [
            { start: 0, text: 'Spirou', category: 'personnePhysiqueNom' },
            { start: 20, text: 'Editions Dupuis', category: 'personneMorale' },
            { start: 90, text: 'Gaston', category: 'personnePhysiquePrenom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 2,
            subAnnotationsSensitiveCount: 1,
            subAnnotationsNonSensitiveCount: 0,
        });
    });
    it('should compute the treatments info for a treatment (addition case)', function () {
        var previousAnnotations = [].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [
            { start: 29, text: 'Gaston', category: 'personnePhysiqueNom' },
            { start: 40, text: 'Pierre', category: 'personnePhysiqueNom' },
            { start: 65, text: 'Lagaffe', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Lagaffe', category: 'adresse' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 0,
            subAnnotationsSensitiveCount: 3,
            subAnnotationsNonSensitiveCount: 1,
        });
    });
    it('should compute the treatments info for a treatment (deletion case)', function () {
        var previousAnnotations = [
            { start: 29, text: 'Gaston', category: 'personnePhysiqueNom' },
            { start: 40, text: 'Pierre', category: 'personnePhysiqueNom' },
            { start: 65, text: 'Lagaffe', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Lagaffe', category: 'personneMorale' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 3,
            subAnnotationsSensitiveCount: 0,
            subAnnotationsNonSensitiveCount: 0,
        });
    });
    it('should compute the treatments info for a treatment (modification case)', function () {
        var previousAnnotations = [
            { start: 29, text: 'Gaston', category: 'personnePhysiqueNom' },
            { start: 40, text: 'Pierre', category: 'personnePhysiqueNom' },
            { start: 65, text: 'Lagaffe', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Thomas', category: 'adresse' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [
            { start: 29, text: 'Gaston', category: 'personnePhysiquePrenom' },
            { start: 40, text: 'Pierre', category: 'personnePhysiquePrenom' },
            { start: 65, text: 'Lagaffe', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Thomas', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 0,
            subAnnotationsSensitiveCount: 0,
            subAnnotationsNonSensitiveCount: 0,
        });
    });
    it('should compute the treatments info for a treatment (resize bigger case)', function () {
        var previousAnnotations = [
            { start: 29, text: 'Gaston', category: 'personnePhysiqueNom' },
            { start: 60, text: 'Pierre', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Harry', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [
            { start: 29, text: 'Gaston Lagaffe', category: 'personnePhysiquePrenom' },
            { start: 60, text: 'Pierre Lagaffe', category: 'personnePhysiquePrenom' },
            { start: 90, text: 'Harry Potter', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 0,
            subAnnotationsSensitiveCount: 1,
            subAnnotationsNonSensitiveCount: 2,
        });
    });
    it('should compute the treatments info for a treatment (resize smaller case)', function () {
        var previousAnnotations = [
            { start: 29, text: 'Gaston Lagaffe', category: 'personnePhysiquePrenom' },
            { start: 60, text: 'Pierre Lagaffe', category: 'personnePhysiquePrenom' },
            { start: 90, text: 'Harry Potter', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [
            { start: 29, text: 'Gaston', category: 'personnePhysiqueNom' },
            { start: 60, text: 'Pierre', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Harry', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 3,
            subAnnotationsSensitiveCount: 0,
            subAnnotationsNonSensitiveCount: 0,
        });
    });
    it('should not raise subannotations count if the annotations are split', function () {
        var previousAnnotations = [
            { start: 90, text: 'Harry Potter', category: 'personnePhysiqueNom' },
            { start: 10, text: 'Bruni-Sarkozy', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [
            { start: 10, text: 'Bruni', category: 'personnePhysiqueNom' },
            { start: 16, text: 'Sarkozy', category: 'personnePhysiqueNom' },
            { start: 90, text: 'Harry', category: 'personnePhysiqueNom' },
            { start: 96, text: 'Potter', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 0,
            subAnnotationsSensitiveCount: 0,
            subAnnotationsNonSensitiveCount: 0,
        });
    });
    it('should not raise surannotations count if the annotations are split', function () {
        var previousAnnotations = [
            { start: 90, text: 'Harry', category: 'personnePhysiqueNom' },
            { start: 96, text: 'Potter', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [{ start: 90, text: 'Harry Potter', category: 'personnePhysiqueNom' }].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 0,
            subAnnotationsSensitiveCount: 0,
            subAnnotationsNonSensitiveCount: 0,
        });
    });
    it('should raise only one subannotation count if the annotations are of the same', function () {
        var previousAnnotations = [].map(annotation_1.annotationModule.lib.buildAnnotation);
        var nextAnnotations = [
            { start: 29, text: 'Gaston', category: 'personnePhysiqueNom' },
            { start: 40, text: 'Gaston', category: 'personnePhysiqueNom' },
        ].map(annotation_1.annotationModule.lib.buildAnnotation);
        var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff(previousAnnotations, nextAnnotations);
        var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
        expect(treatmentInfo).toEqual({
            surAnnotationsCount: 0,
            subAnnotationsSensitiveCount: 1,
            subAnnotationsNonSensitiveCount: 0,
        });
    });
});

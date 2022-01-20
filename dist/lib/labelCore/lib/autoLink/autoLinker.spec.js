"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = require("../../modules/settings");
var annotation_1 = require("../../modules/annotation");
var annotationLinkHandler_1 = require("../annotationLinkHandler");
var autoLinker_1 = require("./autoLinker");
describe('autoLinker', function () {
    var settings = settings_1.settingsModule.lib.buildSettings({ CATEGORY: {}, ANOTHER_CATEGORY: {} });
    describe('autoLink', function () {
        it('should link the given annotations', function () {
            var annotations = [
                { category: 'CATEGORY', text: 'Dupont' },
                { category: 'CATEGORY', text: 'Dupond' },
            ].map(annotation_1.annotationModule.generator.generate);
            var linkedAnnotations = autoLinker_1.autoLinker.autoLink([annotations[0]], annotations, settings);
            expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
        });
        it('should not link the given annotations', function () {
            var settings = settings_1.settingsModule.lib.buildSettings({
                CATEGORY: { autoLinkSensitivity: [{ kind: 'caseInsensitive' }] },
            });
            var annotations = [
                { category: 'CATEGORY', text: '12 rue de la grande Rue' },
                { category: 'CATEGORY', text: '11 rue de la grande Rue' },
            ].map(annotation_1.annotationModule.generator.generate);
            var linkedAnnotations = autoLinker_1.autoLinker.autoLink([annotations[0]], annotations, settings);
            expect(linkedAnnotations.sort()).toEqual(__spreadArrays(annotations).sort());
        });
    });
    describe('autoLinkAll', function () {
        it('should not link annotations of different category', function () {
            var annotations = [
                { category: 'CATEGORY', text: 'annotation' },
                { category: 'ANOTHER_CATEGORY', text: 'ANNOTATION' },
            ].map(annotation_1.annotationModule.generator.generate);
            var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
            expect(linkedAnnotations).toEqual(annotations);
        });
        describe('case sensitivity', function () {
            it('should link the annotations of a same category with only different case', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'annotation' },
                    { category: 'CATEGORY', text: 'ANNOTATION' },
                    { category: 'ANOTHER_CATEGORY', text: 'another_annotation' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
            });
        });
        describe('do not link category if subword not included', function () {
            var settings = settings_1.settingsModule.lib.buildSettings({
                CATEGORY: { autoLinkSensitivity: [{ kind: 'caseInsensitive' }, { kind: 'levenshteinDistance', threshold: 2 }] },
            });
            it('should not link the unrelated annotations', function () {
                var annotations = ['Jean', 'Jean Henri', 'Jean Marie'].map(function (text, index) {
                    return annotation_1.annotationModule.lib.buildAnnotation({ text: text, start: index * 10, category: 'CATEGORY' });
                });
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations[0].entityId).not.toBe(linkedAnnotations[1].entityId);
                expect(linkedAnnotations[0].entityId).not.toBe(linkedAnnotations[2].entityId);
                expect(linkedAnnotations[1].entityId).not.toBe(linkedAnnotations[2].entityId);
            });
        });
        describe('subword', function () {
            it('should link the annotations of a same category which are subword of another', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'longer annotation' },
                    { category: 'CATEGORY', text: 'annotation' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
            });
            it('should link the annotations of a same category which are subword of another (case insensitive)', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'longer aNnOTaTiOn' },
                    { category: 'CATEGORY', text: 'annotation' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
            });
            it('should not link the annotations of a same category which are only substring of another', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'longer_annotation' },
                    { category: 'CATEGORY', text: 'annotation' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotations);
            });
        });
        describe('similar word', function () {
            it('should link the annotations of a same category with a Levenshtein distance inferior to 1 for words less long than 4', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'Pont' },
                    { category: 'CATEGORY', text: 'Pond' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
            });
            it('should link the annotations of a same category with a Levenshtein distance inferior to 1 for words less long than 4 (case insensitive)', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'Pont' },
                    { category: 'CATEGORY', text: 'POND' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
            });
            it('should not link the annotations of a same category with a Levenshtein distance strictly superior to 1 for words less long than 4', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'Pont' },
                    { category: 'CATEGORY', text: 'Pomd' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotations);
            });
            it('should link the annotations of a same category with a Levenshtein distance inferior to 2 for words longer than 4', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'Dupont' },
                    { category: 'CATEGORY', text: 'Dupond' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
            });
            it('should link the annotations of a same category with a Levenshtein distance inferior to 2 for words longer than 4 (case insensitive)', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'Dupont' },
                    { category: 'CATEGORY', text: 'DUPOND' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations));
            });
            it('should not link the annotations of a same category with a Levenshtein distance strictly superior to 2 for words longer than 4', function () {
                var annotations = [
                    { category: 'CATEGORY', text: 'Dupont' },
                    { category: 'CATEGORY', text: 'Dubomb' },
                ].map(annotation_1.annotationModule.generator.generate);
                var linkedAnnotations = autoLinker_1.autoLinker.autoLinkAll(annotations, settings);
                expect(linkedAnnotations).toEqual(annotations);
            });
        });
    });
});

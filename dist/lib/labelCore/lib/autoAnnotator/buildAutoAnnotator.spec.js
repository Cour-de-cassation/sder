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
var annotation_1 = require("../../modules/annotation");
var settings_1 = require("../../modules/settings");
var buildAutoAnnotator_1 = require("./buildAutoAnnotator");
describe('buildAutoAnnotator', function () {
    describe('annotate', function () {
        it('should change the category of the annotations if they could be from another one', function () {
            var annotations = [
                { text: 'TEXT_1', category: 'CATEGORY_1' },
                { text: 'TEXT_1', category: 'CATEGORY_1' },
                { text: 'TEXT_1', category: 'CATEGORY_2' },
            ].map(annotation_1.annotationModule.generator.generate);
            var settings = settings_1.settingsModule.lib.buildSettings({
                CATEGORY_1: {
                    couldBe: 'CATEGORY_2',
                },
                CATEGORY_2: {},
            });
            var autoAnnotator = buildAutoAnnotator_1.buildAutoAnnotator(settings);
            var autoAnnotatedAnnotations = autoAnnotator.annotate(annotations);
            expect(annotation_1.annotationModule.lib.sortAnnotations(autoAnnotatedAnnotations)).toEqual(annotation_1.annotationModule.lib.sortAnnotations([
                __assign(__assign({}, annotations[0]), { category: 'CATEGORY_2', entityId: annotation_1.annotationModule.lib.entityIdHandler.compute('CATEGORY_2', 'TEXT_1') }),
                __assign(__assign({}, annotations[1]), { category: 'CATEGORY_2', entityId: annotation_1.annotationModule.lib.entityIdHandler.compute('CATEGORY_2', 'TEXT_1') }),
                annotations[2],
            ]));
        });
        it('should not change the category of the annotations if none could be from another one', function () {
            var annotations = [
                { text: 'TEXT_1', category: 'CATEGORY_1' },
                { text: 'TEXT_1', category: 'CATEGORY_1' },
                { text: 'TEXT_3', category: 'CATEGORY_2' },
            ].map(annotation_1.annotationModule.generator.generate);
            var settings = settings_1.settingsModule.lib.buildSettings({
                CATEGORY_1: {
                    couldBe: 'CATEGORY_2',
                },
                CATEGORY_2: {},
            });
            var autoAnnotator = buildAutoAnnotator_1.buildAutoAnnotator(settings);
            var autoAnnotatedAnnotations = autoAnnotator.annotate(annotations);
            expect(annotation_1.annotationModule.lib.sortAnnotations(autoAnnotatedAnnotations)).toEqual(annotation_1.annotationModule.lib.sortAnnotations(annotations));
        });
        it('should auto link the annotations', function () {
            var annotations = [
                { text: 'TEXT_1', category: 'CATEGORY_1' },
                { text: 'TEXT_2', category: 'CATEGORY_1' },
            ].map(annotation_1.annotationModule.generator.generate);
            var settings = settings_1.settingsModule.lib.buildSettings({
                CATEGORY_1: {
                    couldBe: 'CATEGORY_2',
                },
                CATEGORY_2: {},
            });
            var autoAnnotator = buildAutoAnnotator_1.buildAutoAnnotator(settings);
            var autoAnnotatedAnnotations = autoAnnotator.annotate(annotations);
            expect(annotation_1.annotationModule.lib.sortAnnotations(autoAnnotatedAnnotations)).toEqual(annotation_1.annotationModule.lib.sortAnnotations([
                __assign(__assign({}, annotations[0]), { category: 'CATEGORY_1', entityId: annotation_1.annotationModule.lib.entityIdHandler.compute('CATEGORY_1', 'TEXT_2') }),
                annotations[1],
            ]));
        });
        it('should apply an auto annotation (general case)', function () {
            var annotations = [
                { text: 'lala', category: 'CATEGORY_1' },
                { text: 'lolo', category: 'CATEGORY_1' },
                { text: 'làlà', category: 'CATEGORY_1' },
                { text: 'lâla', category: 'CATEGORY_2' },
            ].map(annotation_1.annotationModule.generator.generate);
            var settings = settings_1.settingsModule.lib.buildSettings({
                CATEGORY_1: {
                    couldBe: 'CATEGORY_2',
                },
                CATEGORY_2: {},
            });
            var autoAnnotator = buildAutoAnnotator_1.buildAutoAnnotator(settings);
            var autoAnnotatedAnnotations = autoAnnotator.annotate(annotations);
            expect(annotation_1.annotationModule.lib.sortAnnotations(autoAnnotatedAnnotations)).toEqual(annotation_1.annotationModule.lib.sortAnnotations([
                __assign(__assign({}, annotations[0]), { category: 'CATEGORY_2', entityId: annotation_1.annotationModule.lib.entityIdHandler.compute('CATEGORY_2', 'lâla') }),
                annotations[1],
                __assign(__assign({}, annotations[2]), { category: 'CATEGORY_2', entityId: annotation_1.annotationModule.lib.entityIdHandler.compute('CATEGORY_2', 'lâla') }),
                annotations[3],
            ]));
        });
    });
});

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
var annotationHandler_1 = require("./annotationHandler");
describe('annotationHandler', function () {
    var settings = settings_1.settingsModule.lib.buildSettings({
        CATEGORY: {},
        ANOTHER_CATEGORY: {},
        CATEGORY2: {},
        CATEGORY1: {},
    });
    describe('createAll', function () {
        it('should create all the annotations for the given texts and indices', function () {
            var category = 'CATEGORY';
            var annotationText = 'engineer';
            var annotationTextsAndIndices = [
                { index: 34, text: annotationText },
                { index: 66, text: annotationText },
            ];
            var annotations = [{}].map(generateFetchedAnnotation);
            var newAnnotations = annotationHandler_1.annotationHandler.createAll(annotations, category, annotationTextsAndIndices, settings);
            expect(newAnnotations).toEqual(__spreadArrays([
                {
                    category: category,
                    start: 34,
                    entityId: annotation_1.annotationModule.lib.entityIdHandler.compute(category, annotationText),
                    text: annotationText,
                },
                {
                    category: category,
                    start: 66,
                    entityId: annotation_1.annotationModule.lib.entityIdHandler.compute(category, annotationText),
                    text: annotationText,
                }
            ], annotations));
        });
    });
    describe('createManyLinked', function () {
        it('should create 3 annotations and link them together', function () {
            var category = 'CATEGORY';
            var annotationFieldsToCreate = [
                { category: category, start: 0, text: 'TextA' },
                { category: category, start: 10, text: 'TextB' },
                { category: category, start: 20, text: 'TextC' },
            ];
            var newAnnotations = annotationHandler_1.annotationHandler.createManyLinked([], annotationFieldsToCreate);
            expect(newAnnotations.length).toEqual(3);
            expect(annotationLinkHandler_1.annotationLinkHandler.isLinkedTo(newAnnotations[0], newAnnotations[1])).toBeTruthy();
            expect(annotationLinkHandler_1.annotationLinkHandler.isLinkedTo(newAnnotations[0], newAnnotations[2])).toBeTruthy();
        });
    });
    describe('deleteByTextAndCategory', function () {
        it('should delete an annotation according to its text and category', function () {
            var annotation1 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'FIRST_TEXT' });
            var annotation2 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'SECOND_TEXT' });
            var annotation3 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'THIRD_TEXT' });
            var annotations = [annotation1, annotation2, annotation3];
            var newAnnotations = annotationHandler_1.annotationHandler.deleteByTextAndCategory(annotations, annotation1);
            expect(newAnnotations).toEqual([annotation2, annotation3]);
        });
        it('should not conserve a link of a deleted annotation', function () {
            var annotation1 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'FIRST_TEXT' });
            var annotation2 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'SECOND_TEXT' });
            var annotation1Linked = annotation_1.annotationModule.lib.annotationLinker.link(annotation1, annotation2);
            var annotations = [annotation1Linked, annotation2];
            var newAnnotations = annotationHandler_1.annotationHandler.create(annotationHandler_1.annotationHandler.deleteByTextAndCategory(annotations, annotation2), annotation2, settings);
            expect(annotation_1.annotationModule.lib.sortAnnotations(newAnnotations)).toEqual(annotation_1.annotationModule.lib.sortAnnotations([annotation1, annotation2]));
        });
        it('should conserve a link even when the naming entity is deleted', function () {
            var annotation1 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'FIRST_TEXT' });
            var annotation2 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'SECOND_TEXT' });
            var annotation3 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'THIRD_TEXT' });
            var annotation1Linked = annotation_1.annotationModule.lib.annotationLinker.link(annotation1, annotation3);
            var annotation2Linked = annotation_1.annotationModule.lib.annotationLinker.link(annotation2, annotation3);
            var annotations = [annotation1Linked, annotation2Linked, annotation3];
            var newAnnotations = annotationHandler_1.annotationHandler.deleteByTextAndCategory(annotations, annotation3);
            expect(newAnnotations.length).toBe(2);
            expect(annotationLinkHandler_1.annotationLinkHandler.isLinkedTo(newAnnotations[0], newAnnotations[1])).toBeTruthy();
        });
    });
    describe('deleteByTextAndStart', function () {
        it('should delete an annotation according to its text and start position', function () {
            var annotation1 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'FIRST_TEXT' });
            var annotation2 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'SECOND_TEXT' });
            var annotations = [annotation1, annotation2];
            var newAnnotations = annotationHandler_1.annotationHandler.deleteByTextAndStart(annotations, annotation2);
            expect(newAnnotations).toEqual([annotation1]);
        });
        it('should not conserve a link of a deleted annotation', function () {
            var annotation1 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'FIRST_TEXT' });
            var annotation2 = annotation_1.annotationModule.generator.generate({ category: 'CATEGORY', text: 'SECOND_TEXT' });
            var annotation1Linked = annotation_1.annotationModule.lib.annotationLinker.link(annotation1, annotation2);
            var annotations = [annotation1Linked, annotation2];
            var newAnnotations = annotationHandler_1.annotationHandler.create(annotationHandler_1.annotationHandler.deleteByTextAndStart(annotations, annotation2), annotation2, settings);
            expect(annotation_1.annotationModule.lib.sortAnnotations(newAnnotations)).toEqual(annotation_1.annotationModule.lib.sortAnnotations([annotation1, annotation2]));
        });
    });
    describe('updateManyCategory', function () {
        it('should update the category of all the given annotations of the given entityId', function () {
            var newCategory = 'ANOTHER_CATEGORY';
            var text = 'TEXT';
            var annotations = [
                { category: 'CATEGORY1', text: text },
                { category: 'CATEGORY2' },
                { category: 'CATEGORY1', text: text },
            ].map(generateFetchedAnnotation);
            var updatedAnnotations = annotationHandler_1.annotationHandler.updateManyCategory(annotations, annotations[0].entityId, newCategory, settings);
            expect(updatedAnnotations.map(function (annotation) { return annotation.category; })).toEqual([
                newCategory,
                'CATEGORY2',
                newCategory,
            ]);
        });
    });
    describe('updateOneCategory', function () {
        it('should update the given annotation with the given category', function () {
            var newCategory = 'ANOTHER_CATEGORY';
            var annotations = [{ category: 'CATEGORY' }, { category: 'CATEGORY2' }].map(generateFetchedAnnotation);
            var updatedAnnotations = annotationHandler_1.annotationHandler.updateOneCategory(annotations, annotations[0].text, annotations[0].start, newCategory, settings);
            expect(updatedAnnotations[0].category).toEqual(newCategory);
        });
        it('should update the entityId if needed', function () {
            var newCategory = 'ANOTHER_CATEGORY';
            var text = 'TEXT';
            var annotations = [{ category: 'CATEGORY', text: text }, { category: 'CATEGORY2' }].map(generateFetchedAnnotation);
            var updatedAnnotations = annotationHandler_1.annotationHandler.updateOneCategory(annotations, annotations[0].text, annotations[0].start, newCategory, settings);
            expect(updatedAnnotations[0].entityId).toEqual(annotation_1.annotationModule.lib.entityIdHandler.compute(newCategory, text));
        });
    });
    describe('getAnnotationIndex', function () {
        it('should return the index and the total of the annotation of a same entity', function () {
            var annotations = [
                { category: 'CATEGORY', start: 4, text: 'TEXT' },
                { category: 'CATEGORY', start: 17, text: 'TEXT' },
                { category: 'ANOTHER_CATEGORY', start: 8, text: 'ANOTHER_TEXT' },
                { category: 'CATEGORY', start: 1, text: 'TEXT' },
                { category: 'ANOTHER_CATEGORY', start: 23, text: 'ANOTHER_TEXT' },
            ].map(generateFetchedAnnotation);
            var annotationIndex = annotationHandler_1.annotationHandler.getAnnotationIndex(annotations, annotations[0]);
            expect(annotationIndex).toEqual({ index: 2, total: 3 });
        });
    });
});
function generateFetchedAnnotation(fields) {
    return annotation_1.annotationModule.generator.generate(fields);
}

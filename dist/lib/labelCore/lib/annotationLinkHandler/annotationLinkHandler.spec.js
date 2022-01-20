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
var annotationLinkHandler_1 = require("./annotationLinkHandler");
describe('annotationLinker', function () {
    describe('countLinkedEntities', function () {
        it('should return the linked entities count', function () {
            var annotations = [
                { category: 'firstName', text: 'Nicolas' },
                { category: 'firstName', text: 'Nicolas' },
                { category: 'firstName', text: 'nicolas' },
                { category: 'firstName', text: 'Romain' },
                { category: 'firstName', text: 'Romain' },
                { category: 'firstName', text: 'romain' },
                { category: 'firstName', text: 'Romain' },
                { category: 'firstName', text: 'Benoit' },
            ].map(annotation_1.annotationModule.generator.generate);
            var linkedAnnotations = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[2], annotationLinkHandler_1.annotationLinkHandler.link(annotations[3], annotations[5], annotations));
            var linkedEntitiesCount = annotationLinkHandler_1.annotationLinkHandler.countLinkedEntities(linkedAnnotations);
            expect(linkedEntitiesCount).toEqual(2);
        });
    });
    describe('getLinkableAnnotations', function () {
        it('should return all the linkable annotations to the given annotation', function () {
            var category = 'CATEGORY';
            var annotations = [
                { category: category },
                { category: category, text: 'Z' },
                { category: category, text: 'A' },
                { category: category, text: 'A' },
                { category: 'ANOTHER_CATEGORY' },
            ].map(annotation_1.annotationModule.generator.generate);
            var linkableAnnotations = annotationLinkHandler_1.annotationLinkHandler.getLinkableAnnotations(annotations[0], annotations);
            expect(linkableAnnotations).toEqual([annotations[2], annotations[1]]);
        });
    });
    describe('getLinkedAnnotations', function () {
        it('should return all the linked annotations to the given annotation', function () {
            var category = 'CATEGORY';
            var annotations = [
                { category: category, text: 'TEXT1' },
                { category: category, text: 'TEXT2' },
                { category: category, text: 'TEXT3' },
                { category: category, text: 'TEXT3' },
                { category: 'ANOTHER_CATEGORY' },
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationsWithLinks1 = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[2], annotations);
            var annotationsWithLinks2 = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks1[0], annotationsWithLinks1[1], annotationsWithLinks1);
            var annotationsWithLinks3 = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks2[0], annotationsWithLinks2[2], annotationsWithLinks2);
            var linkedAnnotations = annotationLinkHandler_1.annotationLinkHandler.getLinkedAnnotations(annotationsWithLinks3[0].entityId, annotationsWithLinks3);
            expect(linkedAnnotations).toEqual([
                annotationsWithLinks3[0],
                annotationsWithLinks3[1],
                annotationsWithLinks3[2],
                annotationsWithLinks3[3],
            ]);
        });
    });
    describe('getLinkedAnnotationRepresentatives', function () {
        it('should return all the linked annotation representatives to the given annotation', function () {
            var category = 'CATEGORY';
            var annotations = [
                { category: category, text: 'TEXT1' },
                { category: category, text: 'TEXT2' },
                { category: category, text: 'TEXT3' },
                { category: category, text: 'TEXT3' },
                { category: 'ANOTHER_CATEGORY' },
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationsWithLinks1 = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[2], annotations);
            var annotationsWithLinks2 = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks1[0], annotationsWithLinks1[1], annotationsWithLinks1);
            var annotationsWithLinks3 = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks2[0], annotationsWithLinks2[2], annotationsWithLinks2);
            var linkedAnnotations = annotationLinkHandler_1.annotationLinkHandler.getLinkedAnnotationRepresentatives(annotationsWithLinks3[0].entityId, annotationsWithLinks3);
            expect(linkedAnnotations).toEqual([annotationsWithLinks3[0], annotationsWithLinks3[1], annotationsWithLinks3[2]]);
        });
    });
    describe('getRepresentatives', function () {
        it('should return all the representatives of the given annotations', function () {
            var category = 'CATEGORY';
            var annotations = [
                { category: category, text: 'B' },
                { category: category, text: 'Z' },
                { category: category, text: 'A' },
                { category: category, text: 'A' },
                { category: 'ANOTHER_CATEGORY', text: 'A' },
            ].map(annotation_1.annotationModule.generator.generate);
            var representatives = annotationLinkHandler_1.annotationLinkHandler.getRepresentatives(annotations);
            expect(representatives).toEqual([annotations[2], annotations[4], annotations[0], annotations[1]]);
        });
    });
    describe('isLinked', function () {
        it('should return true if the annotation is linked to another one', function () {
            var category = 'CATEGORY';
            var annotations = [{ category: category }, { category: category }].map(annotation_1.annotationModule.generator.generate);
            var annotationsWithLinks = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations);
            var annotationIsLinked = annotationLinkHandler_1.annotationLinkHandler.isLinked(annotationsWithLinks[0], annotationsWithLinks);
            expect(annotationIsLinked).toEqual(true);
        });
    });
    describe('link', function () {
        it('should link the annotations of the category/text source to the annotations of the category/text target', function () {
            var category = 'CATEGORY';
            var textSource = 'SOURCE';
            var textTarget = 'TARGET';
            var annotations = [
                { category: category, text: textSource },
                { category: category, text: textSource },
                { category: category, text: textTarget },
                {},
            ].map(annotation_1.annotationModule.generator.generate);
            var entityIdOfTextTarget = annotations[2].entityId;
            var newAnnotations = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[2], annotations);
            expect(newAnnotations).toEqual([
                __assign(__assign({}, annotations[0]), { entityId: entityIdOfTextTarget }),
                __assign(__assign({}, annotations[1]), { entityId: entityIdOfTextTarget }),
                __assign(__assign({}, annotations[2]), { entityId: entityIdOfTextTarget }),
                annotations[3],
            ]);
        });
        it('should work with forward links', function () {
            var category = 'CATEGORY';
            var text1 = '1';
            var text2 = '2';
            var text3 = '3';
            var annotations = [
                { category: category, text: text1 },
                { category: category, text: text2 },
                { category: category, text: text3 },
            ].map(annotation_1.annotationModule.generator.generate);
            var entityIdOfText3 = annotations[2].entityId;
            var annotationsWithLinks = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[1], annotations);
            var newAnnotations = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks[1], annotationsWithLinks[2], annotationsWithLinks);
            expect(newAnnotations).toEqual([
                __assign(__assign({}, annotations[0]), { entityId: entityIdOfText3 }),
                __assign(__assign({}, annotations[1]), { entityId: entityIdOfText3 }),
                __assign(__assign({}, annotations[2]), { entityId: entityIdOfText3 }),
            ]);
        });
        it('should work with backward links ', function () {
            var category = 'CATEGORY';
            var text1 = '1';
            var text2 = '2';
            var text3 = '3';
            var annotations = [
                { category: category, text: text1 },
                { category: category, text: text2 },
                { category: category, text: text3 },
            ].map(annotation_1.annotationModule.generator.generate);
            var entityIdOfText3 = annotations[2].entityId;
            var annotationsWithLinks = annotationLinkHandler_1.annotationLinkHandler.link(annotations[1], annotations[2], annotations);
            var newAnnotations = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks[0], annotationsWithLinks[1], annotationsWithLinks);
            expect(newAnnotations).toEqual([
                __assign(__assign({}, annotations[0]), { entityId: entityIdOfText3 }),
                __assign(__assign({}, annotations[1]), { entityId: entityIdOfText3 }),
                __assign(__assign({}, annotations[2]), { entityId: entityIdOfText3 }),
            ]);
        });
    });
    describe('unlink', function () {
        it('should unlink the given annotation (source of a link)', function () {
            var category = 'CATEGORY';
            var textSource = 'SOURCE';
            var textTarget = 'TARGET';
            var annotations = [
                { category: category, text: textSource },
                { category: category, text: textSource },
                { category: category, text: textTarget },
                {},
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationsWithLinks = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[2], annotations);
            var newAnnotations = annotationLinkHandler_1.annotationLinkHandler.unlink(annotationsWithLinks[0], annotationsWithLinks);
            expect(newAnnotations).toEqual(annotations);
        });
        it('should unlink the given annotation (target of a link)', function () {
            var category = 'CATEGORY';
            var textSource = 'SOURCE';
            var textTarget = 'TARGET';
            var annotations = [
                { category: category, text: textSource },
                { category: category, text: textSource },
                { category: category, text: textTarget },
                {},
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationsWithLinks = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[2], annotations);
            var newAnnotations = annotationLinkHandler_1.annotationLinkHandler.unlink(annotationsWithLinks[2], annotationsWithLinks);
            expect(newAnnotations).toEqual(annotations);
        });
    });
    describe('unlinkByCategoryAndText', function () {
        it('should unlink only the given annotation (source of a link)', function () {
            var category = 'CATEGORY';
            var textSource = 'SOURCE';
            var textTarget1 = 'TARGET1';
            var textTarget2 = 'TARGET2';
            var annotations = [
                { category: category, text: textSource },
                { category: category, text: textSource },
                { category: category, text: textTarget1 },
                { category: category, text: textTarget2 },
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationsWithLinks1 = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[3], annotations);
            var annotationsWithLinks2 = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks1[0], annotationsWithLinks1[2], annotationsWithLinks1);
            var newAnnotations = annotationLinkHandler_1.annotationLinkHandler.unlinkByCategoryAndText(annotationsWithLinks2[0], annotationsWithLinks2);
            expect(newAnnotations[0]).toEqual(annotations[0]);
            expect(newAnnotations[1]).toEqual(annotations[1]);
            expect(annotationLinkHandler_1.annotationLinkHandler.isLinkedTo(newAnnotations[2], newAnnotations[3])).toEqual(true);
        });
        it('should unlink the given annotation (target of a link)', function () {
            var category = 'CATEGORY';
            var textSource = 'SOURCE';
            var textTarget1 = 'TARGET1';
            var textTarget2 = 'TARGET2';
            var annotations = [
                { category: category, text: textSource },
                { category: category, text: textSource },
                { category: category, text: textTarget1 },
                { category: category, text: textTarget2 },
            ].map(annotation_1.annotationModule.generator.generate);
            var annotationsWithLinks1 = annotationLinkHandler_1.annotationLinkHandler.link(annotations[0], annotations[3], annotations);
            var annotationsWithLinks2 = annotationLinkHandler_1.annotationLinkHandler.link(annotationsWithLinks1[0], annotationsWithLinks1[2], annotationsWithLinks1);
            var newAnnotations = annotationLinkHandler_1.annotationLinkHandler.unlinkByCategoryAndText(annotationsWithLinks2[3], annotationsWithLinks2);
            expect(newAnnotations[3]).toEqual(annotations[3]);
            expect(annotationLinkHandler_1.annotationLinkHandler.isLinkedTo(newAnnotations[0], newAnnotations[2])).toEqual(true);
        });
    });
});

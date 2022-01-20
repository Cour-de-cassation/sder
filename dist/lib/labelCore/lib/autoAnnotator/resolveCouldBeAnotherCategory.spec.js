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
var resolveCouldBeAnotherCategory_1 = require("./resolveCouldBeAnotherCategory");
describe('resolveCouldBeAnotherCategory', function () {
    it('should change the category of the given annotation if it could be from another one', function () {
        var annotations = [
            { text: 'TEXT_1', category: 'CATEGORY_1' },
            { text: 'TEXT_2', category: 'CATEGORY_1' },
            { text: 'TEXT_1', category: 'CATEGORY_1' },
            { text: 'TEXT_1', category: 'CATEGORY_2' },
        ].map(annotation_1.annotationModule.generator.generate);
        var settings = settings_1.settingsModule.lib.buildSettings({
            CATEGORY_1: {
                couldBe: 'CATEGORY_2',
            },
            CATEGORY_2: {},
        });
        var resolvedAnnotation = resolveCouldBeAnotherCategory_1.resolveCouldBeAnotherCategory(annotations[0], annotations, settings);
        expect(resolvedAnnotation).toEqual(__assign(__assign({}, annotations[0]), { category: 'CATEGORY_2', entityId: annotation_1.annotationModule.lib.entityIdHandler.compute('CATEGORY_2', 'TEXT_1') }));
    });
    it('should not change the category of the given annotation if it could be from another one but there are no proof', function () {
        var annotations = [
            { text: 'TEXT_1', category: 'CATEGORY_1' },
            { text: 'TEXT_2', category: 'CATEGORY_1' },
            { text: 'TEXT_1', category: 'CATEGORY_1' },
            { text: 'TEXT_2', category: 'CATEGORY_2' },
        ].map(annotation_1.annotationModule.generator.generate);
        var settings = settings_1.settingsModule.lib.buildSettings({
            CATEGORY_1: {
                couldBe: 'CATEGORY_2',
            },
            CATEGORY_2: {},
        });
        var resolvedAnnotation = resolveCouldBeAnotherCategory_1.resolveCouldBeAnotherCategory(annotations[0], annotations, settings);
        expect(resolvedAnnotation).toEqual(annotations[0]);
    });
});

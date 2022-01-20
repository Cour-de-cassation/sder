"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../../modules/annotation");
var settings_1 = require("../../../modules/settings");
var buildEntityIdMapper_1 = require("./buildEntityIdMapper");
var isCapitalLetterCharCode_1 = require("./isCapitalLetterCharCode");
describe('buildEntityIdMapper', function () {
    var settings = settings_1.settingsModule.lib.buildSettings({
        prenom: { anonymization: '[%c]' },
        nom: { anonymization: '[%c]' },
        adresse: { anonymization: '[adresse %d]' },
    });
    var annotations = [
        { category: 'nom', start: 0, text: 'gle' },
        { category: 'nom', start: 5, text: 'gle' },
        { category: 'prenom', start: 10, text: 'romain' },
        { category: 'prenom', start: 20, text: 'benoit' },
        { category: 'adresse', start: 30, text: '10 rue' },
        { category: 'adresse', start: 40, text: '20 cour' },
    ].map(annotation_1.annotationModule.lib.buildAnnotation);
    var seed = 123;
    var entityIds = annotations.map(function (annotation) { return annotation.entityId; });
    it('should build an entityId mapper', function () {
        var entityIdMapper = buildEntityIdMapper_1.buildEntityIdMapper(settings, entityIds, seed);
        expect(isCapitalLetterCharCode_1.isCapitalLetterCharCode(entityIdMapper[annotations[3].entityId].charCodeAt(1))).toBeTruthy();
        expect(isCapitalLetterCharCode_1.isCapitalLetterCharCode(entityIdMapper[annotations[0].entityId].charCodeAt(1))).toBeTruthy();
        expect(isCapitalLetterCharCode_1.isCapitalLetterCharCode(entityIdMapper[annotations[2].entityId].charCodeAt(1))).toBeTruthy();
        expect(entityIdMapper[annotations[3].entityId]).not.toBe(entityIdMapper[annotations[0].entityId]);
        expect(entityIdMapper[annotations[3].entityId]).not.toBe(entityIdMapper[annotations[2].entityId]);
        expect(entityIdMapper[annotations[2].entityId]).not.toBe(entityIdMapper[annotations[0].entityId]);
        expect(entityIdMapper[annotations[4].entityId]).toEqual('[adresse 1]');
        expect(entityIdMapper[annotations[5].entityId]).toEqual('[adresse 2]');
    });
});

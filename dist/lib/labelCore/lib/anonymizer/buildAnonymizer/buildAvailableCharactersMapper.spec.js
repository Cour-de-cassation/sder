"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var annotation_1 = require("../../../modules/annotation");
var buildAvailableCharactersMapper_1 = require("./buildAvailableCharactersMapper");
var buildCharacterList_1 = require("./buildCharacterList");
describe('buildAvailableCharactersMapper', function () {
    var seed = 123;
    it('should build a mapper with 2 categories', function () {
        var entityId1 = annotation_1.annotationModule.lib.entityIdHandler.compute('prenom', 'benoit');
        var entityId2 = annotation_1.annotationModule.lib.entityIdHandler.compute('prenom', 'nicolas');
        var entityId3 = annotation_1.annotationModule.lib.entityIdHandler.compute('nom', 'gle');
        var mapper = buildAvailableCharactersMapper_1.buildAvailableCharactersMapper([entityId1, entityId2, entityId3], seed);
        expect(mapper['prenom']).toBeTruthy();
        expect(mapper['nom']).toBeTruthy();
        expect(__spreadArrays(mapper['nom']).sort()).toEqual(__spreadArrays(mapper['prenom']).sort());
        expect(mapper['nom']).not.toEqual(mapper['prenom']);
    });
    it('should build a mapper that prioritize the one-letter replacements', function () {
        var entityIds = lodash_1.range(26 - buildCharacterList_1.FORBIDDEN_CHARACTERS.length + 1).map(function (value) {
            return annotation_1.annotationModule.lib.entityIdHandler.compute('prenom', "" + value);
        });
        var mapper = buildAvailableCharactersMapper_1.buildAvailableCharactersMapper(entityIds, seed);
        expect(__spreadArrays(mapper['prenom'].slice(0, 26 - buildCharacterList_1.FORBIDDEN_CHARACTERS.length)).sort()).toEqual([
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ]);
    });
});

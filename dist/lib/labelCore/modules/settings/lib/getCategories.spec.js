"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildSettings_1 = require("./buildSettings");
var getCategories_1 = require("./getCategories");
describe('getCategories', function () {
    describe('filter by status', function () {
        var settings = buildSettings_1.buildSettings({
            prenom: { order: 1, text: 'Prénom', status: 'hidden', canBeAnnotatedBy: 'human' },
            nom: { order: 2, text: 'Nom', status: 'alwaysVisible', canBeAnnotatedBy: 'human' },
            adresse: { order: 3, text: 'Adresse', status: 'annotable', canBeAnnotatedBy: 'human' },
        });
        it('should get all the alwaysVisible and annotable categories', function () {
            var categories = getCategories_1.getCategories(settings, { status: ['alwaysVisible', 'annotable'], canBeAnnotatedBy: 'human' });
            expect(categories).toEqual(['nom', 'adresse']);
        });
        it('should get all the hidden and annotable categories', function () {
            var categories = getCategories_1.getCategories(settings, { status: ['hidden', 'annotable'], canBeAnnotatedBy: 'human' });
            expect(categories).toEqual(['prenom', 'adresse']);
        });
    });
    describe('filter by annotatibility', function () {
        var settings = buildSettings_1.buildSettings({
            prenom: { order: 1, text: 'Prénom', status: 'annotable', canBeAnnotatedBy: 'human' },
            nom: { order: 2, text: 'Nom', status: 'annotable', canBeAnnotatedBy: 'both' },
            adresse: { order: 3, text: 'Adresse', status: 'annotable', canBeAnnotatedBy: 'NLP' },
        });
        it('should get all the annotable and human categories', function () {
            var categories = getCategories_1.getCategories(settings, { status: ['annotable'], canBeAnnotatedBy: 'human' });
            expect(categories).toEqual(['prenom', 'nom']);
        });
        it('should get all the annotable and NLP categories', function () {
            var categories = getCategories_1.getCategories(settings, { status: ['annotable'], canBeAnnotatedBy: 'NLP' });
            expect(categories).toEqual(['nom', 'adresse']);
        });
    });
});

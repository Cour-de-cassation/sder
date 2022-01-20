"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var additionalAnnotationCategoryHandler_1 = require("./additionalAnnotationCategoryHandler");
var buildSettings_1 = require("./buildSettings");
var computeFilteredSettings_1 = require("./computeFilteredSettings");
describe('computeFilteredSettings', function () {
    var _a;
    var additionalAnnotationCategory = additionalAnnotationCategoryHandler_1.additionalAnnotationCategoryHandler.getCategoryName();
    var settings = buildSettings_1.buildSettings((_a = {
            prenom: { order: 1, text: 'Prénom', status: 'hidden' },
            professionnelMagistratGreffier: { order: 2, text: 'Magistrat et membre du greffe', status: 'visible' },
            professionnelAvocat: { order: 3, text: 'Avocat', status: 'alwaysVisible' }
        },
        _a[additionalAnnotationCategory] = { order: 4, text: 'Occultation supplémentaire', status: 'hidden' },
        _a));
    it('should compute filtered settings for an omitted hidden category', function () {
        var categoriesToOmit = ['prenom'];
        var additionalTermsToAnnotate = '';
        var filteredSettings = computeFilteredSettings_1.computeFilteredSettings(settings, categoriesToOmit, additionalTermsToAnnotate);
        expect(filteredSettings['prenom'].status).toBe('hidden');
        expect(filteredSettings['professionnelMagistratGreffier'].status).toBe('annotable');
        expect(filteredSettings['professionnelAvocat'].status).toBe('alwaysVisible');
        expect(filteredSettings[additionalAnnotationCategory].status).toBe('hidden');
    });
    it('should compute filtered settings for an omitted visible category', function () {
        var categoriesToOmit = ['professionnelMagistratGreffier'];
        var additionalTermsToAnnotate = '';
        var filteredSettings = computeFilteredSettings_1.computeFilteredSettings(settings, categoriesToOmit, additionalTermsToAnnotate);
        expect(filteredSettings['prenom'].status).toBe('annotable');
        expect(filteredSettings['professionnelMagistratGreffier'].status).toBe('visible');
        expect(filteredSettings['professionnelAvocat'].status).toBe('alwaysVisible');
        expect(filteredSettings[additionalAnnotationCategory].status).toBe('hidden');
    });
    it('should compute filtered settings for an omitted alwaysVisible category', function () {
        var categoriesToOmit = ['professionnelAvocat'];
        var additionalTermsToAnnotate = '';
        var filteredSettings = computeFilteredSettings_1.computeFilteredSettings(settings, categoriesToOmit, additionalTermsToAnnotate);
        expect(filteredSettings['prenom'].status).toBe('annotable');
        expect(filteredSettings['professionnelMagistratGreffier'].status).toBe('annotable');
        expect(filteredSettings['professionnelAvocat'].status).toBe('alwaysVisible');
        expect(filteredSettings[additionalAnnotationCategory].status).toBe('hidden');
    });
    it('should compute filtered settings for additional annotations', function () {
        var categoriesToOmit = ['prenom', 'professionnelAvocat', 'professionnelMagistratGreffier'];
        var additionalTermsToAnnotate = 'thing';
        var filteredSettings = computeFilteredSettings_1.computeFilteredSettings(settings, categoriesToOmit, additionalTermsToAnnotate);
        expect(filteredSettings['prenom'].status).toBe('hidden');
        expect(filteredSettings['professionnelMagistratGreffier'].status).toBe('visible');
        expect(filteredSettings['professionnelAvocat'].status).toBe('alwaysVisible');
        expect(filteredSettings[additionalAnnotationCategory].status).toBe('annotable');
    });
});

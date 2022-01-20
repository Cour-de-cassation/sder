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
var annotation_1 = require("../../annotation");
var annotationsDiff_1 = require("../../annotationsDiff");
var settings_1 = require("../../settings");
var generator_1 = require("../generator");
var update_1 = require("./update");
describe('update', function () {
    it('should return a new treatment with the updated fields', function () {
        var treatment = generator_1.treatmentGenerator.generate();
        var settings = settings_1.settingsModule.lib.buildSettings({
            personnePhysiqueNom: { isSensitive: true, isAnonymized: true },
            personnePhysiquePrenom: { isSensitive: false, isAnonymized: true },
            personneMorale: { isSensitive: false, isAnonymized: false },
        });
        var treatmentFields = {
            annotationsDiff: annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff([
                { start: 29, text: 'Dupuis', category: 'personnePhysiqueNom' },
                { start: 41, text: 'his cat', category: 'personnePhysiqueNom' },
                { start: 90, text: 'Gaston', category: 'personnePhysiqueNom' },
                { start: 100, text: 'truc', category: 'personnePhysiquePrenom' },
                { start: 120, text: 'machin', category: 'personneMorale' },
            ].map(annotation_1.annotationModule.generator.generate), [
                { start: 0, text: 'Spirou', category: 'personnePhysiqueNom' },
                { start: 10, text: 'et', category: 'personnePhysiquePrenom' },
                { start: 20, text: 'Editions Dupuis', category: 'personneMorale' },
                { start: 90, text: 'Gaston', category: 'personnePhysiquePrenom' },
            ].map(annotation_1.annotationModule.generator.generate)),
        };
        var updatedTreatment = update_1.update(treatment, treatmentFields, settings);
        expect(updatedTreatment).toEqual(__assign(__assign(__assign({}, treatment), treatmentFields), { _id: treatment._id, lastUpdateDate: updatedTreatment.lastUpdateDate, subAnnotationsNonSensitiveCount: 1, surAnnotationsCount: 3, subAnnotationsSensitiveCount: 1 }));
    });
});

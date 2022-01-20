"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertAnnotationsDiffAreConsistent = void 0;
var settings_1 = require("../../../modules/settings");
var assertAnnotationsDiffCompatibleWithPreviousAnnotations_1 = require("./assertAnnotationsDiffCompatibleWithPreviousAnnotations");
var assertAnnotationsDiffCompatibleWithAvailableCategories_1 = require("./assertAnnotationsDiffCompatibleWithAvailableCategories");
var assertAnnotationsDiffAutoConsistent_1 = require("./assertAnnotationsDiffAutoConsistent");
function assertAnnotationsDiffAreConsistent(annotationsDiff, _a, actionToPerform) {
    var previousAnnotations = _a.previousAnnotations, settings = _a.settings, treatmentSource = _a.treatmentSource;
    assertAnnotationsDiffCompatibleWithPreviousAnnotations_1.assertAnnotationsDiffCompatibleWithPreviousAnnotations(previousAnnotations, annotationsDiff, actionToPerform);
    assertAnnotationsDiffAutoConsistent_1.assertAnnotationsDiffAutoConsistent(annotationsDiff, actionToPerform);
    var availableCategoriesFilter = computeAvailableCategoriesFilter(treatmentSource);
    var availableCategories = settings_1.settingsModule.lib.getCategories(settings, availableCategoriesFilter);
    assertAnnotationsDiffCompatibleWithAvailableCategories_1.assertAnnotationsDiffCompatibleWithAvailableCategories(annotationsDiff, availableCategories, actionToPerform);
}
exports.assertAnnotationsDiffAreConsistent = assertAnnotationsDiffAreConsistent;
function computeAvailableCategoriesFilter(treatmentSource) {
    var status = ['visible', 'alwaysVisible', 'annotable'];
    var canBeAnnotatedBy;
    switch (treatmentSource) {
        case 'NLP':
            canBeAnnotatedBy = 'NLP';
            break;
        case 'postProcess':
            canBeAnnotatedBy = 'human';
            break;
        case 'admin':
            canBeAnnotatedBy = 'human';
            break;
        case 'annotator':
            canBeAnnotatedBy = 'human';
            break;
        case 'supplementaryAnnotations':
            canBeAnnotatedBy = 'human';
            break;
    }
    return { status: status, canBeAnnotatedBy: canBeAnnotatedBy };
}

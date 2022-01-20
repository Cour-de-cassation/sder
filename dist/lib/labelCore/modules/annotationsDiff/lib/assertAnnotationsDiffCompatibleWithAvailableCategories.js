"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertAnnotationsDiffCompatibleWithAvailableCategories = void 0;
var annotation_1 = require("../../annotation");
function assertAnnotationsDiffCompatibleWithAvailableCategories(annotationsDiff, availableCategories, actionToPerform) {
    var uncompatibleAnnotation = annotationsDiff.after.find(isUncompatibleWithAvailableCategories);
    if (uncompatibleAnnotation) {
        var errorMessage = computeErrorMessage(uncompatibleAnnotation);
        throw new Error(errorMessage);
    }
    return true;
    function isUncompatibleWithAvailableCategories(annotation) {
        return (!availableCategories.includes(annotation.category) ||
            !availableCategories.includes(annotation_1.annotationModule.lib.entityIdHandler.getCategory(annotation.entityId)));
    }
    function computeErrorMessage(annotation) {
        return "" + (actionToPerform ? "Could not " + actionToPerform + ": " : '') + annotation_1.annotationModule.lib.stringify(annotation, {
            displayEntityId: true,
        }) + " category is not in availableCategories: [" + availableCategories.join(', ') + "]";
    }
}
exports.assertAnnotationsDiffCompatibleWithAvailableCategories = assertAnnotationsDiffCompatibleWithAvailableCategories;

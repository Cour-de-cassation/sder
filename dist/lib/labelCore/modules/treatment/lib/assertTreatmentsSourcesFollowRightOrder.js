"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertTreatmentsSourcesFollowRightOrder = void 0;
var sortInConsistentOrder_1 = require("./sortInConsistentOrder");
var DOCUMENT_STEPS = [
    { treatmentSource: ['NLP'], quantity: '1' },
    { treatmentSource: ['supplementaryAnnotations'], quantity: '0|1' },
    { treatmentSource: ['postProcess'], quantity: '1' },
    { treatmentSource: ['admin', 'annotator'], quantity: '1+' },
];
function assertTreatmentsSourcesFollowRightOrder(treatments) {
    var sortedTreatments = sortInConsistentOrder_1.sortInConsistentOrder(treatments);
    var stepIndex = 0;
    var treatmentIndex = 0;
    var errorMessage = "Treatment sources do not follow the pattern: [" + sortedTreatments
        .map(function (_a) {
        var source = _a.source;
        return source;
    })
        .join(', ') + "]";
    while (stepIndex < DOCUMENT_STEPS.length && treatmentIndex < sortedTreatments.length) {
        var currentStep = DOCUMENT_STEPS[stepIndex];
        var currentTreatment = sortedTreatments[treatmentIndex];
        if (currentStep.quantity === '1') {
            if (!currentStep.treatmentSource.includes(currentTreatment.source)) {
                throw new Error(errorMessage);
            }
            treatmentIndex++;
            stepIndex++;
        }
        else if (currentStep.quantity === '0|1') {
            if (currentStep.treatmentSource.includes(currentTreatment.source)) {
                treatmentIndex++;
            }
            stepIndex++;
        }
        else {
            if (!currentStep.treatmentSource.includes(currentTreatment.source)) {
                throw new Error(errorMessage);
            }
            while (treatmentIndex + 1 < sortedTreatments.length &&
                currentStep.treatmentSource.includes(sortedTreatments[treatmentIndex + 1].source)) {
                treatmentIndex++;
            }
            stepIndex++;
        }
    }
    return true;
}
exports.assertTreatmentsSourcesFollowRightOrder = assertTreatmentsSourcesFollowRightOrder;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateTreatmentInfo = void 0;
var annotationsDiff_1 = require("../../annotationsDiff");
var assertTreatmentsSameDocumentId_1 = require("./assertTreatmentsSameDocumentId");
var computeTreatmentInfo_1 = require("./computeTreatmentInfo");
var sortInConsistentOrder_1 = require("./sortInConsistentOrder");
function aggregateTreatmentInfo(treatments, settings) {
    if (treatments.length === 0) {
        return {
            subAnnotationsNonSensitiveCount: 0,
            subAnnotationsSensitiveCount: 0,
            surAnnotationsCount: 0,
        };
    }
    assertTreatmentsSameDocumentId_1.assertTreatmentsSameDocumentId(treatments);
    var sortedTreatments = sortInConsistentOrder_1.sortInConsistentOrder(treatments);
    var annotationsDiff = annotationsDiff_1.annotationsDiffModule.lib.squash(sortedTreatments.map(function (treatment) { return treatment.annotationsDiff; }));
    var treatmentInfo = computeTreatmentInfo_1.computeTreatmentInfo(annotationsDiff, settings);
    return treatmentInfo;
}
exports.aggregateTreatmentInfo = aggregateTreatmentInfo;

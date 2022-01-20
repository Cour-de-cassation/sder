"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsCreator = void 0;
var treatment_1 = require("../../modules/treatment");
var statistic_1 = require("../../modules/statistic");
var annotationLinkHandler_1 = require("../annotationLinkHandler");
var statisticsCreator = { buildFromDocument: buildFromDocument };
exports.statisticsCreator = statisticsCreator;
function buildFromDocument(_a) {
    var document = _a.document, treatments = _a.treatments, humanTreatments = _a.humanTreatments, settings = _a.settings;
    var annotations = treatment_1.treatmentModule.lib.computeAnnotations(treatments);
    var linkedEntitiesCount = annotationLinkHandler_1.annotationLinkHandler.countLinkedEntities(annotations);
    var treatmentInfo = treatment_1.treatmentModule.lib.aggregateTreatmentInfo(humanTreatments.map(function (_a) {
        var treatment = _a.treatment;
        return treatment;
    }), settings);
    var lastUpdateDate = treatment_1.treatmentModule.lib.extractLastUpdateDate(treatments);
    var humanTreatmentsSummary = humanTreatments.map(function (_a) {
        var treatment = _a.treatment, userId = _a.userId;
        return ({
            userId: userId,
            treatmentDuration: treatment.duration,
        });
    });
    return statistic_1.statisticModule.lib.buildStatistic({
        annotationsCount: annotations.length,
        humanTreatmentsSummary: humanTreatmentsSummary,
        lastUpdateDate: lastUpdateDate,
        treatmentInfo: treatmentInfo,
        document: document,
        linkedEntitiesCount: linkedEntitiesCount,
    });
}

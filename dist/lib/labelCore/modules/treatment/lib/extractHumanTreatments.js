"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractHumanTreatments = void 0;
var id_1 = require("../../id");
function extractHumanTreatments(treatments, assignations) {
    var humanTreatments = assignations.map(function (assignation) {
        var treatment = treatments.find(function (treatment) { return id_1.idModule.lib.equalId(assignation.treatmentId, treatment._id); });
        if (!treatment) {
            throw new Error('Incompatible assignations/treatments');
        }
        return { treatment: treatment, userId: assignation.userId };
    });
    return humanTreatments.sort(function (_a, _b) {
        var treatment1 = _a.treatment;
        var treatment2 = _b.treatment;
        return treatment1.order - treatment2.order;
    });
}
exports.extractHumanTreatments = extractHumanTreatments;

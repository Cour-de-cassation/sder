"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTreatedDocuments = void 0;
var id_1 = require("../../id");
function filterTreatedDocuments(_a) {
    var ressourceFilter = _a.ressourceFilter, treatedDocuments = _a.treatedDocuments;
    return treatedDocuments.filter(function (_a) {
        var document = _a.document, humanTreatments = _a.humanTreatments;
        var isInTheFilter = true;
        if (ressourceFilter.mustHaveSurAnnotations) {
            isInTheFilter =
                isInTheFilter &&
                    humanTreatments.some(function (_a) {
                        var treatment = _a.treatment;
                        return treatment.surAnnotationsCount > 0;
                    });
        }
        if (ressourceFilter.mustHaveSubAnnotations) {
            isInTheFilter =
                isInTheFilter &&
                    humanTreatments.some(function (_a) {
                        var treatment = _a.treatment;
                        return treatment.subAnnotationsSensitiveCount > 0;
                    });
        }
        if (ressourceFilter.publicationCategory) {
            isInTheFilter = isInTheFilter && document.publicationCategory.includes(ressourceFilter.publicationCategory);
        }
        if (ressourceFilter.source) {
            isInTheFilter = isInTheFilter && document.source === ressourceFilter.source;
        }
        if (ressourceFilter.jurisdiction) {
            isInTheFilter = isInTheFilter && document.decisionMetadata.jurisdiction === ressourceFilter.jurisdiction;
        }
        if (ressourceFilter.startDate) {
            var startDate_1 = ressourceFilter.startDate;
            isInTheFilter = isInTheFilter && humanTreatments.some(function (_a) {
                var treatment = _a.treatment;
                return treatment.lastUpdateDate > startDate_1;
            });
        }
        if (ressourceFilter.endDate) {
            var endDate_1 = ressourceFilter.endDate;
            isInTheFilter = isInTheFilter && humanTreatments.some(function (_a) {
                var treatment = _a.treatment;
                return treatment.lastUpdateDate < endDate_1;
            });
        }
        if (ressourceFilter.userId) {
            var userIdToFilter_1 = ressourceFilter.userId;
            isInTheFilter =
                isInTheFilter && humanTreatments.some(function (_a) {
                    var userId = _a.userId;
                    return id_1.idModule.lib.equalId(userId, userIdToFilter_1);
                });
        }
        return isInTheFilter;
    });
}
exports.filterTreatedDocuments = filterTreatedDocuments;

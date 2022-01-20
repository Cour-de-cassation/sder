"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeAnnotationsDiff = exports.computeAnnotations = void 0;
var annotationsDiff_1 = require("../../annotationsDiff");
var id_1 = require("../../id");
var assertTreatmentsSourcesFollowRightOrder_1 = require("./assertTreatmentsSourcesFollowRightOrder");
var sortInConsistentOrder_1 = require("./sortInConsistentOrder");
function computeAnnotations(treatments) {
    if (treatments.length === 0) {
        return [];
    }
    var sortedTreatments = sortInConsistentOrder_1.sortInConsistentOrder(treatments);
    if (checkTreatmentsConsistency(sortedTreatments) && areAnnotationsInitiallyEmpty(treatments)) {
        assertTreatmentsSourcesFollowRightOrder_1.assertTreatmentsSourcesFollowRightOrder(treatments);
        var annotationsDiffs = sortedTreatments.map(function (treatment) { return treatment.annotationsDiff; });
        return annotationsDiff_1.annotationsDiffModule.lib.squash(annotationsDiffs).after;
    }
    else {
        throw new Error("Can not compute annotations from inconsistent treatments : [" + treatments.map(function (_a) {
            var _id = _a._id;
            return _id;
        }).join(', ') + "]");
    }
}
exports.computeAnnotations = computeAnnotations;
function computeAnnotationsDiff(treatments) {
    if (treatments.length === 0) {
        return { before: [], after: [] };
    }
    var sortedTreatments = sortInConsistentOrder_1.sortInConsistentOrder(treatments);
    if (checkTreatmentsConsistency(sortedTreatments)) {
        var annotationsDiffs = sortedTreatments.map(function (treatment) { return treatment.annotationsDiff; });
        return annotationsDiff_1.annotationsDiffModule.lib.squash(annotationsDiffs);
    }
    else {
        throw new Error("Can not compute annotations from inconsistent treatments : [" + treatments.map(function (_a) {
            var _id = _a._id;
            return _id;
        }).join(', ') + "]");
    }
}
exports.computeAnnotationsDiff = computeAnnotationsDiff;
function checkTreatmentsConsistency(treatments) {
    return (areOnTheSameDocument(treatments) && haveConsistentOrder(treatments) && doesNotHaveMissingTreatments(treatments));
}
function areOnTheSameDocument(treatments) {
    return treatments.every(function (treatment) { return id_1.idModule.lib.equalId(treatment.documentId, treatments[0].documentId); });
}
function haveConsistentOrder(treatments) {
    return treatments.reduce(function (hasConsistentOrder, treatment, index) {
        return hasConsistentOrder && (index === 0 || treatment.order > treatments[index - 1].order);
    }, true);
}
function doesNotHaveMissingTreatments(treatments) {
    return treatments.reduce(function (hasConsistentOrder, treatment, index) {
        return hasConsistentOrder && (index === 0 || treatment.order - treatments[index - 1].order === 1);
    }, true);
}
function areAnnotationsInitiallyEmpty(treatments) {
    return treatments[0].annotationsDiff.before.length === 0;
}

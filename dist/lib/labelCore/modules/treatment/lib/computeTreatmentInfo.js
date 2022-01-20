"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeTreatmentInfo = void 0;
var lodash_1 = require("lodash");
var annotation_1 = require("../../../modules/annotation");
function computeTreatmentInfo(annotationsDiff, settings) {
    var treatmentInfoEntities = {
        surAnnotationsEntities: [],
        subAnnotationsNonSensitiveEntities: [],
        subAnnotationsSensitiveEntities: [],
    };
    annotationsDiff.before.forEach(function (beforeAnnotation) {
        var _a, _b;
        if ((_a = settings[beforeAnnotation.category]) === null || _a === void 0 ? void 0 : _a.isAnonymized) {
            var afterAnnotationContainingBeforeAnnotation = annotationsDiff.after.find(function (afterAnnotation) {
                var inclusion = annotation_1.annotationModule.lib.areAnnotationsIncluded(beforeAnnotation, afterAnnotation);
                return inclusion !== undefined && inclusion <= 0;
            });
            if ((!afterAnnotationContainingBeforeAnnotation &&
                !annotation_1.annotationModule.lib.isAnnotationTextInAnnotations(beforeAnnotation, annotationsDiff.after)) ||
                (afterAnnotationContainingBeforeAnnotation &&
                    !((_b = settings[afterAnnotationContainingBeforeAnnotation.category]) === null || _b === void 0 ? void 0 : _b.isAnonymized))) {
                treatmentInfoEntities.surAnnotationsEntities.push(beforeAnnotation.entityId);
            }
        }
    });
    annotationsDiff.after.forEach(function (afterAnnotation) {
        var _a, _b, _c;
        var beforeAnnotationContainingAfterAnnotation = annotationsDiff.before.find(function (beforeAnnotation) {
            var inclusion = annotation_1.annotationModule.lib.areAnnotationsIncluded(beforeAnnotation, afterAnnotation);
            return inclusion !== undefined && inclusion >= 0;
        });
        if (settings[afterAnnotation.category].isSensitive) {
            if ((!beforeAnnotationContainingAfterAnnotation &&
                !annotation_1.annotationModule.lib.isAnnotationTextInAnnotations(afterAnnotation, annotationsDiff.before)) ||
                (beforeAnnotationContainingAfterAnnotation &&
                    !((_a = settings[beforeAnnotationContainingAfterAnnotation.category]) === null || _a === void 0 ? void 0 : _a.isAnonymized))) {
                treatmentInfoEntities.subAnnotationsSensitiveEntities.push(afterAnnotation.entityId);
            }
        }
        else if ((_b = settings[afterAnnotation.category]) === null || _b === void 0 ? void 0 : _b.isAnonymized) {
            if (!beforeAnnotationContainingAfterAnnotation ||
                !((_c = settings[beforeAnnotationContainingAfterAnnotation.category]) === null || _c === void 0 ? void 0 : _c.isAnonymized)) {
                treatmentInfoEntities.subAnnotationsNonSensitiveEntities.push(afterAnnotation.entityId);
            }
        }
    });
    return {
        surAnnotationsCount: lodash_1.uniq(treatmentInfoEntities.surAnnotationsEntities).length,
        subAnnotationsSensitiveCount: lodash_1.uniq(treatmentInfoEntities.subAnnotationsSensitiveEntities).length,
        subAnnotationsNonSensitiveCount: lodash_1.uniq(treatmentInfoEntities.subAnnotationsNonSensitiveEntities).length,
    };
}
exports.computeTreatmentInfo = computeTreatmentInfo;

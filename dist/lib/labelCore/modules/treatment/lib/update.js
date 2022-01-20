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
exports.update = void 0;
var computeTreatmentInfo_1 = require("./computeTreatmentInfo");
function update(treatment, treatmentFields, settings) {
    var newTreatment = __assign(__assign({}, treatment), treatmentFields);
    var _a = computeTreatmentInfo_1.computeTreatmentInfo(newTreatment.annotationsDiff, settings), subAnnotationsSensitiveCount = _a.subAnnotationsSensitiveCount, surAnnotationsCount = _a.surAnnotationsCount, subAnnotationsNonSensitiveCount = _a.subAnnotationsNonSensitiveCount;
    return __assign(__assign({}, newTreatment), { subAnnotationsNonSensitiveCount: subAnnotationsNonSensitiveCount,
        surAnnotationsCount: surAnnotationsCount,
        subAnnotationsSensitiveCount: subAnnotationsSensitiveCount, lastUpdateDate: new Date().getTime() });
}
exports.update = update;

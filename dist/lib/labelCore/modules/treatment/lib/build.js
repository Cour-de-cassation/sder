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
exports.build = void 0;
var id_1 = require("../../id");
var generator_1 = require("../generator");
var computeTreatmentInfo_1 = require("./computeTreatmentInfo");
function build(treatmentFields, settings) {
    var treatment = generator_1.treatmentGenerator.generate(treatmentFields);
    var _a = computeTreatmentInfo_1.computeTreatmentInfo(treatmentFields.annotationsDiff, settings), subAnnotationsSensitiveCount = _a.subAnnotationsSensitiveCount, surAnnotationsCount = _a.surAnnotationsCount, subAnnotationsNonSensitiveCount = _a.subAnnotationsNonSensitiveCount;
    return __assign(__assign({}, treatment), { _id: id_1.idModule.lib.buildId(), subAnnotationsNonSensitiveCount: subAnnotationsNonSensitiveCount,
        surAnnotationsCount: surAnnotationsCount,
        subAnnotationsSensitiveCount: subAnnotationsSensitiveCount, duration: 0, lastUpdateDate: new Date().getTime() });
}
exports.build = build;

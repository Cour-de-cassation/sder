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
exports.buildEmpty = void 0;
var id_1 = require("../../id");
var generator_1 = require("../generator");
function buildEmpty(treatmentFields) {
    var treatment = generator_1.treatmentGenerator.generate(treatmentFields);
    return __assign(__assign({}, treatment), { _id: id_1.idModule.lib.buildId(), subAnnotationsSensitiveCount: 0, surAnnotationsCount: 0, subAnnotationsNonSensitiveCount: 0, duration: 0, lastUpdateDate: new Date().getTime() });
}
exports.buildEmpty = buildEmpty;

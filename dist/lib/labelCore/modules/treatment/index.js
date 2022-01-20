"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treatmentModule = void 0;
var generator_1 = require("./generator");
var treatmentType_1 = require("./treatmentType");
var lib_1 = require("./lib");
var treatmentModule = {
    model: treatmentType_1.treatmentModel,
    generator: generator_1.treatmentGenerator,
    lib: {
        aggregateTreatmentInfo: lib_1.aggregateTreatmentInfo,
        assertTreatmentsSourcesFollowRightOrder: lib_1.assertTreatmentsSourcesFollowRightOrder,
        build: lib_1.build,
        buildEmpty: lib_1.buildEmpty,
        computeAnnotations: lib_1.computeAnnotations,
        computeAnnotationsDiff: lib_1.computeAnnotationsDiff,
        computeTreatmentInfo: lib_1.computeTreatmentInfo,
        extractHumanTreatments: lib_1.extractHumanTreatments,
        extractLastUpdateDate: lib_1.extractLastUpdateDate,
        getLastTreatment: lib_1.getLastTreatment,
        getTimeThresholdToUpdateDuration: lib_1.getTimeThresholdToUpdateDuration,
        sortInConsistentOrder: lib_1.sortInConsistentOrder,
        update: lib_1.update,
    },
};
exports.treatmentModule = treatmentModule;

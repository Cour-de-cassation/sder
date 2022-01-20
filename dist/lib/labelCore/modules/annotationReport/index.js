"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationReportModule = void 0;
var generator_1 = require("./generator");
var annotationReportType_1 = require("./annotationReportType");
var lib_1 = require("./lib");
var annotationReportModule = {
    model: annotationReportType_1.annotationReportModel,
    generator: generator_1.annotationReportGenerator,
    lib: { buildAnnotationReport: lib_1.buildAnnotationReport },
};
exports.annotationReportModule = annotationReportModule;

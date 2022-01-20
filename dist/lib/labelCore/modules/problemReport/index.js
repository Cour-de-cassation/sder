"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemReportModule = void 0;
var generator_1 = require("./generator");
var problemReportType_1 = require("./problemReportType");
var lib_1 = require("./lib");
var problemReportModule = {
    model: problemReportType_1.problemReportModel,
    generator: generator_1.problemReportGenerator,
    lib: { buildProblemReport: lib_1.buildProblemReport },
};
exports.problemReportModule = problemReportModule;

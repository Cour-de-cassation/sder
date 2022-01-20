"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoringEntryModule = void 0;
var generator_1 = require("./generator");
var monitoringEntryType_1 = require("./monitoringEntryType");
var lib_1 = require("./lib");
var monitoringEntryModule = {
    fetchedModel: monitoringEntryType_1.fetchedMonitoringEntryModel,
    model: monitoringEntryType_1.monitoringEntryModel,
    generator: generator_1.monitoringEntryGenerator,
    lib: {
        monitoringEntryBuilder: lib_1.monitoringEntryBuilder,
    },
};
exports.monitoringEntryModule = monitoringEntryModule;

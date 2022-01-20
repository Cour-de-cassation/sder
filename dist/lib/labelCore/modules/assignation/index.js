"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignationModule = void 0;
var assignationType_1 = require("./assignationType");
var generator_1 = require("./generator");
var lib_1 = require("./lib");
var assignationModule = {
    model: assignationType_1.assignationModel,
    generator: generator_1.assignationGenerator,
    lib: { buildAssignation: lib_1.buildAssignation },
};
exports.assignationModule = assignationModule;

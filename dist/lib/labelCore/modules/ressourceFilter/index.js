"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ressourceFilterModule = void 0;
var generator_1 = require("./generator");
var lib_1 = require("./lib");
var ressourceFilterType_1 = require("./ressourceFilterType");
var ressourceFilterModule = {
    model: ressourceFilterType_1.ressourceFilterModel,
    generator: generator_1.ressourceFilterGenerator,
    lib: { filterTreatedDocuments: lib_1.filterTreatedDocuments },
};
exports.ressourceFilterModule = ressourceFilterModule;

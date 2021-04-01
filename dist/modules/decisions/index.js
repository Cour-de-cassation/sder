"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decisionModule = void 0;
var decisionCollectionName_1 = require("./decisionCollectionName");
var indexes_1 = require("./indexes");
var lib_1 = require("./lib");
var repository_1 = require("./repository");
var service_1 = require("./service");
var validation_1 = require("./validation");
var decisionCollection = {
    indexes: indexes_1.decisionsIndexes,
    name: decisionCollectionName_1.decisionCollectionName,
    validationSchema: validation_1.decisionsValidationSchema,
};
var decisionModule = {
    buildRepository: repository_1.buildDecisionRepository,
    collection: decisionCollection,
    lib: { buildDecision: lib_1.buildDecision, generateDecision: lib_1.generateDecision },
    service: service_1.decisionService,
};
exports.decisionModule = decisionModule;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawJuricaModule = void 0;
var rawJuricaCollectionName_1 = require("./rawJuricaCollectionName");
var indexes_1 = require("./indexes");
var repository_1 = require("./repository");
var service_1 = require("./service");
var validation_1 = require("./validation");
var rawJuricaCollection = {
    indexes: indexes_1.rawJuricaIndexes,
    name: rawJuricaCollectionName_1.rawJuricaCollectionName,
    validationSchema: validation_1.rawJuricaCollectionValidationSchema,
};
var rawJuricaModule = {
    buildRepository: repository_1.buildRawJuricaRepository,
    collection: rawJuricaCollection,
    service: service_1.decisionService,
};
exports.rawJuricaModule = rawJuricaModule;

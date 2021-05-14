"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawJurinetModule = void 0;
var rawJurinetCollectionName_1 = require("./rawJurinetCollectionName");
var indexes_1 = require("./indexes");
var repository_1 = require("./repository");
var service_1 = require("./service");
var validation_1 = require("./validation");
var rawJurinetCollection = {
    indexes: indexes_1.rawJurinetIndexes,
    name: rawJurinetCollectionName_1.rawJurinetCollectionName,
    validationSchema: validation_1.rawJurinetCollectionValidationSchema,
};
var rawJurinetModule = {
    buildRepository: repository_1.buildRawJurinetRepository,
    collection: rawJurinetCollection,
    service: service_1.decisionService,
};
exports.rawJurinetModule = rawJurinetModule;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentModule = void 0;
var generator_1 = require("./generator");
var documentType_1 = require("./documentType");
var lib_1 = require("./lib");
var documentModule = {
    fetchedModel: documentType_1.fetchedDocumentModel,
    model: documentType_1.documentModel,
    generator: generator_1.documentGenerator,
    lib: {
        buildDocument: lib_1.buildDocument,
        comparator: lib_1.comparator,
        computeCaseNumber: lib_1.computeCaseNumber,
        countWords: lib_1.countWords,
        extractAdditionalAnnotationTerms: lib_1.extractAdditionalAnnotationTerms,
        getNextStatus: lib_1.getNextStatus,
        getMinutesBeforeFreeingPendingDocuments: lib_1.getMinutesBeforeFreeingPendingDocuments,
        publicationHandler: lib_1.publicationHandler,
    },
};
exports.documentModule = documentModule;

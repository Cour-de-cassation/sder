"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../../document");
var id_1 = require("../../id");
var treatment_1 = require("../../treatment");
var generator_1 = require("../generator");
var filterTreatedDocuments_1 = require("./filterTreatedDocuments");
describe('filterTreatedDocuments', function () {
    it('should filter all the given treated documents with added annotations', function () {
        var documents = [{}, {}].map(document_1.documentModule.generator.generate);
        var userId = id_1.idModule.lib.buildId();
        var treatments = [
            { subAnnotationsSensitiveCount: 5, documentId: documents[1]._id, order: 2 },
            { documentId: documents[1]._id, order: 0 },
            { documentId: documents[1]._id, order: 1 },
        ].map(treatment_1.treatmentModule.generator.generate);
        var ressourceFilter = generator_1.ressourceFilterGenerator.generate({
            mustHaveSubAnnotations: true,
        });
        var treatedDocuments = [
            { document: documents[0], treatments: [], humanTreatments: [] },
            {
                document: documents[1],
                treatments: treatments,
                humanTreatments: [{ userId: userId, treatment: treatments[0] }],
            },
        ];
        var filteredTreatedDocuments = filterTreatedDocuments_1.filterTreatedDocuments({
            ressourceFilter: ressourceFilter,
            treatedDocuments: treatedDocuments,
        });
        expect(filteredTreatedDocuments).toEqual([
            { document: documents[1], treatments: treatments, humanTreatments: [{ userId: userId, treatment: treatments[0] }] },
        ]);
    });
    it('should filter all the given treated documents with deleted annotations', function () {
        var documents = [{}, {}].map(document_1.documentModule.generator.generate);
        var userId = id_1.idModule.lib.buildId();
        var treatments = [
            { surAnnotationsCount: 5, documentId: documents[1]._id, order: 2 },
            { documentId: documents[1]._id, order: 0 },
            { documentId: documents[1]._id, order: 1 },
        ].map(treatment_1.treatmentModule.generator.generate);
        var ressourceFilter = generator_1.ressourceFilterGenerator.generate({
            mustHaveSurAnnotations: true,
        });
        var treatedDocuments = [
            { document: documents[0], treatments: [], humanTreatments: [] },
            {
                document: documents[1],
                treatments: treatments,
                humanTreatments: [{ userId: userId, treatment: treatments[0] }],
            },
        ];
        var filteredTreatedDocuments = filterTreatedDocuments_1.filterTreatedDocuments({
            ressourceFilter: ressourceFilter,
            treatedDocuments: treatedDocuments,
        });
        expect(filteredTreatedDocuments).toEqual([
            { document: documents[1], treatments: treatments, humanTreatments: [{ userId: userId, treatment: treatments[0] }] },
        ]);
    });
    it('should filter all the given treated documents according to the publication category', function () {
        var documents = [{ publicationCategory: ['P'] }, { publicationCategory: ['W'] }].map(document_1.documentModule.generator.generate);
        var ressourceFilter = generator_1.ressourceFilterGenerator.generate({
            publicationCategory: 'P',
        });
        var treatedDocuments = [
            { document: documents[0], treatments: [], humanTreatments: [] },
            { document: documents[1], treatments: [], humanTreatments: [] },
        ];
        var filteredTreatedDocuments = filterTreatedDocuments_1.filterTreatedDocuments({
            ressourceFilter: ressourceFilter,
            treatedDocuments: treatedDocuments,
        });
        expect(filteredTreatedDocuments).toEqual([{ document: documents[0], treatments: [], humanTreatments: [] }]);
    });
    it('should filter all the given treated documents according to the user id', function () {
        var userId1 = id_1.idModule.lib.buildId();
        var userId2 = id_1.idModule.lib.buildId();
        var ressourceFilter = generator_1.ressourceFilterGenerator.generate({
            userId: userId1,
        });
        var documents = [{ status: 'done' }, { status: 'done' }].map(document_1.documentModule.generator.generate);
        var treatments = [{ documentId: documents[0]._id }, { documentId: documents[1]._id }].map(treatment_1.treatmentModule.generator.generate);
        var treatedDocuments = [
            {
                document: documents[0],
                treatments: [treatments[0]],
                humanTreatments: [{ treatment: treatments[0], userId: userId1 }],
            },
            {
                document: documents[1],
                treatments: [treatments[1]],
                humanTreatments: [{ treatment: treatments[1], userId: userId2 }],
            },
        ];
        var filteredTreatedDocuments = filterTreatedDocuments_1.filterTreatedDocuments({
            ressourceFilter: ressourceFilter,
            treatedDocuments: treatedDocuments,
        });
        expect(filteredTreatedDocuments).toEqual([
            {
                document: documents[0],
                treatments: [treatments[0]],
                humanTreatments: [{ treatment: treatments[0], userId: userId1 }],
            },
        ]);
    });
    it('should filter all the given treated documents according to the jurisdiction', function () {
        var documents = [{ source: 'SOURCE1' }, { source: 'SOURCE2' }].map(document_1.documentModule.generator.generate);
        var ressourceFilter = generator_1.ressourceFilterGenerator.generate({
            source: 'SOURCE1',
        });
        var treatedDocuments = [
            { document: documents[0], treatments: [], humanTreatments: [] },
            { document: documents[1], treatments: [], humanTreatments: [] },
        ];
        var filteredTreatedDocuments = filterTreatedDocuments_1.filterTreatedDocuments({
            ressourceFilter: ressourceFilter,
            treatedDocuments: treatedDocuments,
        });
        expect(filteredTreatedDocuments).toEqual([{ document: documents[0], treatments: [], humanTreatments: [] }]);
    });
    it('should filter all the given treated documents according to the jurisdiction', function () {
        var decisionDate = new Date().getTime();
        var documents = [{ jurisdiction: 'JURISDICTION1' }, { jurisdiction: 'JURISDICTION2' }].map(function (_a) {
            var jurisdiction = _a.jurisdiction;
            return document_1.documentModule.generator.generate({
                decisionMetadata: {
                    jurisdiction: jurisdiction,
                    solution: '',
                    session: '',
                    occultationBlock: undefined,
                    criminalCaseCode: '',
                    civilCaseCode: '',
                    civilMatterCode: '',
                    chamberName: '',
                    date: decisionDate,
                    categoriesToOmit: [],
                    boundDecisionDocumentNumbers: [],
                    additionalTermsToAnnotate: '',
                    NACCode: '',
                    endCaseCode: '',
                    parties: [],
                    appealNumber: '',
                },
            });
        });
        var ressourceFilter = generator_1.ressourceFilterGenerator.generate({
            jurisdiction: 'JURISDICTION1',
        });
        var treatedDocuments = [
            { document: documents[0], treatments: [], humanTreatments: [] },
            { document: documents[1], treatments: [], humanTreatments: [] },
        ];
        var filteredTreatedDocuments = filterTreatedDocuments_1.filterTreatedDocuments({
            ressourceFilter: ressourceFilter,
            treatedDocuments: treatedDocuments,
        });
        expect(filteredTreatedDocuments).toEqual([{ document: documents[0], treatments: [], humanTreatments: [] }]);
    });
});

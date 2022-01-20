"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var computeCaseNumber_1 = require("./computeCaseNumber");
describe('computeCaseNumber', function () {
    var documentNumber = 12345;
    var boundDocumentNumber = 54321;
    var otherBoundDocumentNumber = 98765;
    var decisionDate = new Date().getTime();
    it('should return the first boundDocumentNumber', function () {
        var document = generator_1.documentGenerator.generate({
            decisionMetadata: {
                additionalTermsToAnnotate: '',
                appealNumber: '',
                boundDecisionDocumentNumbers: [boundDocumentNumber, otherBoundDocumentNumber],
                chamberName: '',
                criminalCaseCode: '',
                civilCaseCode: '',
                civilMatterCode: '',
                date: decisionDate,
                jurisdiction: '',
                NACCode: '',
                endCaseCode: '',
                solution: '',
                session: '',
                categoriesToOmit: [],
                parties: [],
                occultationBlock: undefined,
            },
            documentNumber: documentNumber,
        });
        var caseNumber = computeCaseNumber_1.computeCaseNumber(document);
        expect(caseNumber).toBe(boundDocumentNumber);
    });
    it('should return the documentNumber if no bound document number found', function () {
        var document = generator_1.documentGenerator.generate({
            decisionMetadata: {
                additionalTermsToAnnotate: '',
                appealNumber: '',
                boundDecisionDocumentNumbers: [],
                chamberName: '',
                criminalCaseCode: '',
                civilCaseCode: '',
                civilMatterCode: '',
                date: decisionDate,
                jurisdiction: '',
                NACCode: '',
                endCaseCode: '',
                solution: '',
                session: '',
                categoriesToOmit: [],
                parties: [],
                occultationBlock: undefined,
            },
            documentNumber: documentNumber,
        });
        var caseNumber = computeCaseNumber_1.computeCaseNumber(document);
        expect(caseNumber).toBe(documentNumber);
    });
});

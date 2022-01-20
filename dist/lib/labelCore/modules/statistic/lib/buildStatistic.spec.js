"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../../document");
var id_1 = require("../../id");
var buildStatistic_1 = require("./buildStatistic");
var TREATMENT_DATE = new Date(2021, 3, 30, 0, 0, 0);
describe('buildStatistic', function () {
    it('should build a new statistic', function () {
        var annotationsCount = 10;
        var documentNumber = 123456;
        var documentExternalId = 'DOCUMENT_EXTERNAL_ID';
        var documentPublicationCategory = ['P'];
        var documentSource = 'SOURCE';
        var linkedEntitiesCount = 2;
        var jurisdiction = 'Cour de cassation';
        var userId = id_1.idModule.lib.buildId();
        var decisionDate = new Date().getTime();
        var document = document_1.documentModule.generator.generate({
            decisionMetadata: {
                additionalTermsToAnnotate: '',
                appealNumber: 'TRUC',
                boundDecisionDocumentNumbers: [],
                categoriesToOmit: [],
                chamberName: 'Chambre criminelle',
                criminalCaseCode: '',
                civilCaseCode: '',
                civilMatterCode: '',
                date: decisionDate,
                jurisdiction: jurisdiction,
                NACCode: '',
                endCaseCode: '',
                occultationBlock: undefined,
                parties: [],
                session: 'FRH',
                solution: '',
            },
            documentNumber: documentNumber,
            externalId: documentExternalId,
            publicationCategory: documentPublicationCategory,
            source: documentSource,
            text: 'Some text with five words',
        });
        var treatmentInfo = {
            subAnnotationsNonSensitiveCount: 1,
            subAnnotationsSensitiveCount: 2,
            surAnnotationsCount: 3,
        };
        var lastUpdateDate = TREATMENT_DATE.getTime();
        var statistic = buildStatistic_1.buildStatistic({
            annotationsCount: annotationsCount,
            document: document,
            linkedEntitiesCount: linkedEntitiesCount,
            lastUpdateDate: lastUpdateDate,
            treatmentInfo: treatmentInfo,
            humanTreatmentsSummary: [{ userId: userId, treatmentDuration: 10 }],
        });
        expect(statistic).toEqual({
            _id: statistic._id,
            annotationsCount: annotationsCount,
            appealNumber: 'TRUC',
            chamberName: 'chambre criminelle',
            decisionDate: decisionDate,
            documentExternalId: documentExternalId,
            documentNumber: documentNumber,
            jurisdiction: 'cour de cassation',
            linkedEntitiesCount: linkedEntitiesCount,
            publicationCategory: documentPublicationCategory,
            session: 'FRH',
            source: documentSource,
            subAnnotationsNonSensitiveCount: 1,
            subAnnotationsSensitiveCount: 2,
            surAnnotationsCount: 3,
            treatmentDate: TREATMENT_DATE.getTime(),
            treatmentsSummary: [{ userId: userId, treatmentDuration: 10 }],
            wordsCount: 5,
        });
    });
});

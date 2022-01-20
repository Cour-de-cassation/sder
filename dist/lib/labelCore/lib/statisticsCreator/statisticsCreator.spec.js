"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../modules/annotation");
var annotationsDiff_1 = require("../../modules/annotationsDiff");
var document_1 = require("../../modules/document");
var id_1 = require("../../modules/id");
var treatment_1 = require("../../modules/treatment");
var settings_1 = require("../../modules/settings");
var statisticsCreator_1 = require("./statisticsCreator");
var TREATMENT_DATE = new Date(2021, 3, 30, 0, 0, 0);
describe('statisticsCreator', function () {
    var documentExternalId = 'DOCUMENT_EXTERNAL_ID';
    var documentPublicationCategory = ['P'];
    var documentSource = 'SOURCE';
    var documentNumber = 123456;
    var jurisdiction = 'Cour de cassation';
    var duration = 1500;
    var userId = id_1.idModule.lib.buildId();
    var decisionDate = new Date().getTime();
    var document = document_1.documentModule.generator.generate({
        decisionMetadata: {
            additionalTermsToAnnotate: '',
            appealNumber: 'MACHIN',
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
    var settings = settings_1.settingsModule.lib.buildSettings({
        personnePhysiqueNom: { isSensitive: true, isAnonymized: true },
        personnePhysiquePrenom: { isSensitive: false, isAnonymized: true },
        personneMorale: { isSensitive: false, isAnonymized: false },
        professionnelNom: { isSensitive: false, isAnonymized: false },
    });
    describe('buildFromDocument', function () {
        it('should build all the statistics of the given documents', function () {
            var treatments = [
                {
                    annotationsDiff: annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff([], [
                        { start: 29, text: 'Dupuis', category: 'personnePhysiqueNom' },
                        { start: 41, text: 'his cat', category: 'personnePhysiqueNom' },
                        { start: 90, text: 'Gaston', category: 'personnePhysiqueNom' },
                    ].map(annotation_1.annotationModule.generator.generate)),
                    documentId: document._id,
                    order: 0,
                    source: 'NLP',
                    lastUpdateDate: TREATMENT_DATE.getTime(),
                },
                {
                    annotationsDiff: annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff([
                        { start: 29, text: 'Dupuis', category: 'personnePhysiqueNom' },
                        { start: 41, text: 'his cat', category: 'personnePhysiqueNom' },
                        { start: 90, text: 'Gaston', category: 'personnePhysiqueNom' },
                    ].map(annotation_1.annotationModule.generator.generate), [
                        { start: 0, text: 'Spirou', category: 'personnePhysiqueNom' },
                        { start: 20, text: 'Editions Dupuis', category: 'personneMorale' },
                        { start: 90, text: 'Gaston', category: 'personnePhysiquePrenom' },
                    ].map(annotation_1.annotationModule.generator.generate)),
                    source: 'postProcess',
                    documentId: document._id,
                    duration: duration,
                    order: 1,
                    lastUpdateDate: TREATMENT_DATE.getTime(),
                },
            ].map(treatment_1.treatmentModule.generator.generate);
            var statistic = statisticsCreator_1.statisticsCreator.buildFromDocument({
                humanTreatments: [{ treatment: treatments[1], userId: userId }],
                document: document,
                treatments: treatments,
                settings: settings,
            });
            expect(statistic).toEqual({
                _id: statistic._id,
                annotationsCount: 3,
                appealNumber: 'MACHIN',
                chamberName: 'chambre criminelle',
                decisionDate: decisionDate,
                documentExternalId: documentExternalId,
                documentNumber: documentNumber,
                jurisdiction: 'cour de cassation',
                linkedEntitiesCount: 0,
                publicationCategory: documentPublicationCategory,
                session: 'FRH',
                source: documentSource,
                subAnnotationsNonSensitiveCount: 0,
                surAnnotationsCount: 2,
                subAnnotationsSensitiveCount: 1,
                treatmentDate: TREATMENT_DATE.getTime(),
                treatmentsSummary: [{ userId: userId, treatmentDuration: duration }],
                wordsCount: 5,
            });
        });
        it('should build all the statistics of the given document for one piece of statistics', function () {
            var treatments = [
                {
                    annotationsDiff: annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff([], [
                        { start: 29, text: 'Dupuis', category: 'personnePhysiqueNom' },
                        { start: 41, text: 'his cat', category: 'personnePhysiqueNom' },
                        { start: 90, text: 'Gaston', category: 'personnePhysiqueNom' },
                        { start: 100, text: 'Fantasio', category: 'professionnelNom' },
                    ].map(annotation_1.annotationModule.generator.generate)),
                    documentId: document._id,
                    order: 0,
                    source: 'NLP',
                    lastUpdateDate: TREATMENT_DATE.getTime(),
                },
                {
                    annotationsDiff: annotationsDiff_1.annotationsDiffModule.lib.computeAnnotationsDiff([{ start: 100, text: 'Fantasio', category: 'professionnelNom' }].map(annotation_1.annotationModule.generator.generate), [{ start: 100, text: 'Fantasio', category: 'personnePhysiqueNom' }].map(annotation_1.annotationModule.generator.generate)),
                    documentId: document._id,
                    duration: duration,
                    order: 1,
                    source: 'postProcess',
                    lastUpdateDate: TREATMENT_DATE.getTime(),
                },
            ].map(treatment_1.treatmentModule.generator.generate);
            var statistic = statisticsCreator_1.statisticsCreator.buildFromDocument({
                document: document,
                treatments: treatments,
                humanTreatments: [{ treatment: treatments[1], userId: userId }],
                settings: settings,
            });
            expect(statistic).toEqual({
                _id: statistic._id,
                annotationsCount: 4,
                appealNumber: 'MACHIN',
                chamberName: 'chambre criminelle',
                decisionDate: decisionDate,
                documentExternalId: documentExternalId,
                documentNumber: documentNumber,
                jurisdiction: 'cour de cassation',
                linkedEntitiesCount: 0,
                publicationCategory: documentPublicationCategory,
                session: 'FRH',
                source: documentSource,
                subAnnotationsNonSensitiveCount: 0,
                surAnnotationsCount: 0,
                subAnnotationsSensitiveCount: 1,
                treatmentDate: TREATMENT_DATE.getTime(),
                treatmentsSummary: [{ userId: userId, treatmentDuration: duration }],
                wordsCount: 5,
            });
        });
    });
});

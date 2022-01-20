"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../../modules/annotation");
var document_1 = require("../../../modules/document");
var settings_1 = require("../../../modules/settings");
var buildAnonymizer_1 = require("./buildAnonymizer");
describe('buildAnonymizer', function () {
    var settings = settings_1.settingsModule.lib.buildSettings({
        firstName: { anonymization: '[FIRST_NAME %d]', status: 'annotable' },
        lastName: { anonymization: '[LAST_NAME %d]', status: 'annotable' },
        adresse: { anonymization: '[ADRESSE %d]', status: 'alwaysVisible' },
        dateNaissance: { anonymization: '[BIRTHDATE %d]', status: 'visible' },
    });
    var annotations = [
        { category: 'firstName', text: 'Benoit', start: 0 },
        { category: 'lastName', text: 'Serrano', start: 7 },
        { category: 'firstName', text: 'Nicolas', start: 37 },
        { category: 'lastName', text: 'Assouad', start: 45 },
        { category: 'firstName', text: 'Romain', start: 77 },
        { category: 'lastName', text: 'Glé', start: 84 },
    ].map(annotation_1.annotationModule.lib.buildAnnotation);
    var seed = 123;
    var text = 'Benoit Serrano is software engineer. Nicolas Assouad is a software engineer. Romain Glé is a designer.';
    describe('anonymizeDocument', function () {
        it('should anonymize a document', function () {
            var document = document_1.documentModule.generator.generate({
                text: text,
            });
            var anonymizer = buildAnonymizer_1.buildAnonymizer(settings, annotations, seed);
            var anonymizedDocument = anonymizer.anonymizeDocument(document);
            expect(anonymizedDocument.text).toEqual('[FIRST_NAME 2] [LAST_NAME 6] is software engineer. [FIRST_NAME 4] [LAST_NAME 1] is a software engineer. [FIRST_NAME 5] [LAST_NAME 3] is a designer.');
        });
        it('should anonymize a different document with matching anonymization texts', function () {
            var text1 = 'Benoit Serrano is software engineer. Nicolas Assouad is a software engineer. Romain Glé is a designer.';
            var text2 = 'There are many people who work on this project, namely Nicolas Assouad, Benoit Serrano, not to mention Romain Glé, who works with Benoit and Nicolas.';
            var document1 = document_1.documentModule.generator.generate({
                text: text1,
            });
            var document2 = document_1.documentModule.generator.generate({
                text: text2,
            });
            var settings = settings_1.settingsModule.lib.buildSettings({
                firstName: { anonymization: '[FIRST_NAME %c]' },
                lastName: { anonymization: '[LAST_NAME %c]' },
            });
            var annotations1 = [
                { category: 'firstName', text: 'Benoit', start: 0 },
                { category: 'lastName', text: 'Serrano', start: 7 },
                { category: 'firstName', text: 'Nicolas', start: 37 },
                { category: 'lastName', text: 'Assouad', start: 45 },
                { category: 'firstName', text: 'Romain', start: 77 },
                { category: 'lastName', text: 'Glé', start: 84 },
            ].map(annotation_1.annotationModule.lib.buildAnnotation);
            var annotations2 = [
                { category: 'firstName', text: 'Nicolas', start: 55 },
                { category: 'lastName', text: 'Assouad', start: 63 },
                { category: 'firstName', text: 'Benoit', start: 72 },
                { category: 'lastName', text: 'Serrano', start: 79 },
                { category: 'firstName', text: 'Romain', start: 103 },
                { category: 'lastName', text: 'Glé', start: 110 },
                { category: 'firstName', text: 'BENOIT', start: 130 },
                { category: 'firstName', text: 'NICOLAS', start: 141 },
            ].map(annotation_1.annotationModule.lib.buildAnnotation);
            annotations2[6] = annotation_1.annotationModule.lib.annotationLinker.link(annotations2[6], annotations2[2]);
            annotations2[7] = annotation_1.annotationModule.lib.annotationLinker.link(annotations2[7], annotations2[0]);
            var anonymizer1 = buildAnonymizer_1.buildAnonymizer(settings, annotations1, seed);
            var anonymizer2 = buildAnonymizer_1.buildAnonymizer(settings, annotations2, seed);
            var anonymizedDocument1 = anonymizer1.anonymizeDocument(document1);
            var anonymizedDocument2 = anonymizer2.anonymizeDocument(document2);
            expect(anonymizedDocument1.text).toBe('[FIRST_NAME C] [LAST_NAME C] is software engineer. [FIRST_NAME J] [LAST_NAME O] is a software engineer. [FIRST_NAME R] [LAST_NAME M] is a designer.');
            expect(anonymizedDocument2.text).toBe('There are many people who work on this project, namely [FIRST_NAME J] [LAST_NAME O], [FIRST_NAME C] [LAST_NAME C], not to mention [FIRST_NAME R] [LAST_NAME M], who works with [FIRST_NAME C] and [FIRST_NAME J].');
        });
    });
    describe('anonymize', function () {
        var anonymizer = buildAnonymizer_1.buildAnonymizer(settings, annotations, seed);
        it('should anonymize a text with the given settings', function () {
            var anonymizedTexts = annotations.map(anonymizer.anonymize);
            expect(anonymizedTexts[0]).toEqual('[FIRST_NAME 2]');
        });
        it('should anonymize a second text with the given settings', function () {
            var anonymizedTexts = annotations.map(anonymizer.anonymize);
            expect(anonymizedTexts[1]).toEqual('[LAST_NAME 6]');
        });
        it('should conserve the same anonymisation every time it is called', function () {
            var settings = settings_1.settingsModule.lib.buildSettings({
                firstName: { anonymization: '[FIRST_NAME %c]' },
            });
            var annotations = [
                { category: 'firstName', text: 'Benoit', start: 0 },
                { category: 'firstName', text: 'Nicolas', start: 29 },
                { category: 'firstName', text: 'Romain', start: 61 },
            ].map(annotation_1.annotationModule.lib.buildAnnotation);
            var anonymizer = buildAnonymizer_1.buildAnonymizer(settings, annotations, seed);
            var anonymizedTextsFirstTime = annotations.map(anonymizer.anonymize);
            anonymizer = buildAnonymizer_1.buildAnonymizer(settings, annotations, seed);
            var anonymizedTextsSecondTime = annotations.map(anonymizer.anonymize);
            anonymizer = buildAnonymizer_1.buildAnonymizer(settings, annotations, seed);
            var anonymizedTextsThirdTime = annotations.map(anonymizer.anonymize);
            expect(anonymizedTextsFirstTime).toEqual(anonymizedTextsSecondTime);
            expect(anonymizedTextsFirstTime).toEqual(anonymizedTextsThirdTime);
        });
        it('should loop over the anonymization text if not enough are provided in the settings', function () {
            var anonymizedTexts = annotations.map(anonymizer.anonymize);
            expect(anonymizedTexts[2]).toEqual('[FIRST_NAME 4]');
        });
        it('should anonymize a text with a default string if the category is not in the settings', function () {
            var annotation = annotation_1.annotationModule.generator.generate({
                category: 'age',
                text: '25',
            });
            var anonymizedText = anonymizer.anonymize(annotation);
            expect(anonymizedText).toEqual('XXX');
        });
        it('should not anonymize a text if the category is set to not anonymized in the setting', function () {
            var annotation = annotation_1.annotationModule.generator.generate({
                category: 'professional',
                text: 'Leon',
            });
            var anonymizerWithNoAnomization = buildAnonymizer_1.buildAnonymizer(settings_1.settingsModule.lib.buildSettings({
                professional: { isAnonymized: false },
            }), [annotation], seed);
            var anonymizedText = anonymizerWithNoAnomization.anonymize(annotation);
            expect(anonymizedText).toEqual('Leon');
        });
    });
});

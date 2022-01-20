"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id_1 = require("../../id");
var ressourceFilter_1 = require("../../ressourceFilter");
var generator_1 = require("../generator");
var aggregate_1 = require("./aggregate");
describe('aggregate', function () {
    var userId1 = id_1.idModule.lib.buildId();
    var userId2 = id_1.idModule.lib.buildId();
    var statistics = [
        {
            annotationsCount: 10,
            documentNumber: 0,
            linkedEntitiesCount: 3,
            subAnnotationsSensitiveCount: 5,
            subAnnotationsNonSensitiveCount: 6,
            surAnnotationsCount: 7,
            treatmentsSummary: [
                { userId: userId1, treatmentDuration: 15 },
                { userId: userId2, treatmentDuration: 12 },
            ],
            wordsCount: 1,
        },
        {
            annotationsCount: 12,
            documentNumber: 1,
            linkedEntitiesCount: 4,
            subAnnotationsSensitiveCount: 8,
            subAnnotationsNonSensitiveCount: 9,
            surAnnotationsCount: 10,
            treatmentsSummary: [
                { userId: userId1, treatmentDuration: 17 },
                { userId: userId2, treatmentDuration: 50 },
            ],
            wordsCount: 2,
        },
    ].map(generator_1.statisticGenerator.generate);
    it('should aggregate statistics', function () {
        var aggregatedStatistics = aggregate_1.aggregate(statistics, ressourceFilter_1.ressourceFilterModule.generator.generate());
        expect(aggregatedStatistics).toEqual({
            cumulatedValue: {
                annotationsCount: 22,
                subAnnotationsNonSensitiveCount: 15,
                subAnnotationsSensitiveCount: 13,
                surAnnotationsCount: 17,
                treatmentDuration: 94,
                wordsCount: 3,
            },
            total: 2,
        });
    });
    it('should aggregate statistics for user', function () {
        var aggregatedStatistics = aggregate_1.aggregate(statistics, ressourceFilter_1.ressourceFilterModule.generator.generate({ userId: userId1 }));
        expect(aggregatedStatistics).toEqual({
            cumulatedValue: {
                annotationsCount: 22,
                subAnnotationsNonSensitiveCount: 15,
                subAnnotationsSensitiveCount: 13,
                surAnnotationsCount: 17,
                treatmentDuration: 32,
                wordsCount: 3,
            },
            total: 2,
        });
    });
});

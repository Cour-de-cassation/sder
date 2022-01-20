"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregate = void 0;
var lodash_1 = require("lodash");
var id_1 = require("../../id");
function aggregate(statistics, filter) {
    return {
        cumulatedValue: statistics.reduce(function (aggregatedStatistics, statistic) {
            var userIdToFilter = filter.userId;
            var treatmentDuration = userIdToFilter
                ? aggregatedStatistics.treatmentDuration +
                    lodash_1.sum(statistic.treatmentsSummary
                        .filter(function (_a) {
                        var userId = _a.userId;
                        return id_1.idModule.lib.equalId(userId, userIdToFilter);
                    })
                        .map(function (_a) {
                        var treatmentDuration = _a.treatmentDuration;
                        return treatmentDuration;
                    }))
                : aggregatedStatistics.treatmentDuration +
                    lodash_1.sumBy(statistic.treatmentsSummary, function (_a) {
                        var treatmentDuration = _a.treatmentDuration;
                        return treatmentDuration;
                    });
            return {
                annotationsCount: aggregatedStatistics.annotationsCount + statistic.annotationsCount,
                wordsCount: aggregatedStatistics.wordsCount + statistic.wordsCount,
                surAnnotationsCount: aggregatedStatistics.surAnnotationsCount + statistic.surAnnotationsCount,
                subAnnotationsSensitiveCount: aggregatedStatistics.subAnnotationsSensitiveCount + statistic.subAnnotationsSensitiveCount,
                subAnnotationsNonSensitiveCount: aggregatedStatistics.subAnnotationsNonSensitiveCount + statistic.subAnnotationsNonSensitiveCount,
                treatmentDuration: treatmentDuration,
            };
        }, {
            surAnnotationsCount: 0,
            subAnnotationsSensitiveCount: 0,
            subAnnotationsNonSensitiveCount: 0,
            treatmentDuration: 0,
            annotationsCount: 0,
            wordsCount: 0,
        }),
        total: statistics.length,
    };
}
exports.aggregate = aggregate;

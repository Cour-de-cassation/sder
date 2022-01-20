"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateBuilder = exports.buildDateBuilder = void 0;
var dateBuilder = buildDateBuilder(function () { return new Date(); });
exports.dateBuilder = dateBuilder;
function buildDateBuilder(now) {
    return {
        daysAgo: function (days) {
            var dateInSeveralDaysInThePast = now();
            dateInSeveralDaysInThePast.setDate(dateInSeveralDaysInThePast.getDate() - days);
            return dateInSeveralDaysInThePast.getTime();
        },
        minutesAgo: function (minutes) {
            var dateInSeveralMinutesInThePast = now();
            dateInSeveralMinutesInThePast.setMinutes(dateInSeveralMinutesInThePast.getMinutes() - minutes);
            return dateInSeveralMinutesInThePast.getTime();
        },
        monthsAgo: function (months) {
            var dateInSeveralMonthsInThePast = now();
            dateInSeveralMonthsInThePast.setMonth(dateInSeveralMonthsInThePast.getMonth() - months);
            return dateInSeveralMonthsInThePast.getTime();
        },
    };
}
exports.buildDateBuilder = buildDateBuilder;

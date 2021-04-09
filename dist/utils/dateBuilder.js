"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateBuilder = void 0;
var dateBuilder = {
    daysAgo: function (days) {
        var dateInSeveralDaysInThePast = new Date();
        dateInSeveralDaysInThePast.setDate(dateInSeveralDaysInThePast.getDate() - days);
        return dateInSeveralDaysInThePast.toISOString();
    },
};
exports.dateBuilder = dateBuilder;

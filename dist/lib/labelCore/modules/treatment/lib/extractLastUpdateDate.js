"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractLastUpdateDate = void 0;
function extractLastUpdateDate(treatments) {
    if (treatments.length === 0) {
        throw new Error("Cannot compute last update date of empty treatments");
    }
    return Math.max.apply(Math, treatments.map(function (treatment) { return treatment.lastUpdateDate; }));
}
exports.extractLastUpdateDate = extractLastUpdateDate;

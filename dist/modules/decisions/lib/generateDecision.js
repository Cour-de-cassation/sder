"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDecision = void 0;
var utils_1 = require("../../../utils");
function generateDecision(decisionFields) {
    if (decisionFields === void 0) { decisionFields = {}; }
    return __assign({ _id: utils_1.buildObjectId(), _rev: 0, analysis: {
            doctrine: "DOCTRINE_" + Math.random(),
            link: "LINK_" + Math.random(),
            reference: [],
            source: "SOURCE_" + Math.random(),
            summary: "SUMMARY_" + Math.random(),
            target: "TARGET_" + Math.random(),
            title: [],
        }, appeals: [], chamberId: "CHAMBER_ID_" + Math.random(), chamberName: "CHAMBER_NAME_" + Math.random(), dateCreation: new Date(), dateDecision: new Date(), jurisdictionCode: "JURISDICTION_CODE_" + Math.random(), jurisdictionId: "JURISDICTION_ID_" + Math.random(), jurisdictionName: "JURISDICTION_NAME_" + Math.random(), labelStatus: 'toBeTreated', labelTreatments: [], locked: "LOCKED_" + Math.random(), originalText: "ORIGINAL_TEXT_" + Math.random(), parties: "PARTIES_" + Math.random(), pseudoStatus: "PSEUDO_STATUS_" + Math.random(), pseudoText: "PSEUDO_TEXT_" + Math.random(), pubCategory: "PUB_CATEGORY_" + Math.random(), registerNumber: "REGISTER_NUMBER_" + Math.random(), solution: "SOLUTION_" + Math.random(), sourceId: "SOURCE_ID_" + Math.random(), sourceName: "SOURCE_NAME_" + Math.random(), zoning: {
            introduction_subzonage: {
                publication: [],
            },
        } }, decisionFields);
}
exports.generateDecision = generateDecision;

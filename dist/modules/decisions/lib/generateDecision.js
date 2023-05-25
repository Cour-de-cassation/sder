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
var id_1 = require("../../id");
var MAX_RAND_NUMBER = 1000000;
function generateDecision(decisionFields) {
    if (decisionFields === void 0) { decisionFields = {}; }
    return __assign({ _id: id_1.idModule.lib.buildId(), _rev: 0, _version: 0, analysis: {
            doctrine: "DOCTRINE_".concat(Math.random()),
            link: "LINK_".concat(Math.random()),
            reference: [],
            source: "SOURCE_".concat(Math.random()),
            summary: "SUMMARY_".concat(Math.random()),
            target: "TARGET_".concat(Math.random()),
            title: [],
            analyse: [],
        }, appeals: [], chamberId: "CHAMBER_ID_".concat(Math.random()), chamberName: "CHAMBER_NAME_".concat(Math.random()), dateCreation: new Date().toISOString(), dateDecision: new Date().toISOString(), decatt: undefined, jurisdictionCode: "JURISDICTION_CODE_".concat(Math.random()), jurisdictionId: "JURISDICTION_ID_".concat(Math.random()), jurisdictionName: "JURISDICTION_NAME_".concat(Math.random()), labelStatus: 'toBeTreated', labelTreatments: [], locked: false, occultation: {
            additionalTerms: '',
            categoriesToOmit: [],
        }, originalText: "ORIGINAL_TEXT_".concat(Math.random()), parties: ["PARTIES_".concat(Math.random())], pseudoStatus: "PSEUDO_STATUS_".concat(Math.random()), pseudoText: "PSEUDO_TEXT_".concat(Math.random()), pubCategory: "PUB_CATEGORY_".concat(Math.random()), public: null, registerNumber: "REGISTER_NUMBER_".concat(Math.random()), solution: "SOLUTION_".concat(Math.random()), sourceId: Math.floor(Math.random() * MAX_RAND_NUMBER), sourceName: "SOURCE_NAME_".concat(Math.random()), zoning: {
            introduction_subzonage: {
                publication: [],
            },
        }, natureAffaireCivil: "NATURE_AFFAIRE_CIVIL_".concat(Math.random()), natureAffairePenal: "NATURE_AFFAIRE_PENAL_".concat(Math.random()) }, decisionFields);
}
exports.generateDecision = generateDecision;

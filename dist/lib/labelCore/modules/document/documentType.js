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
exports.fetchedDocumentModel = exports.documentModel = void 0;
var modelType_1 = require("../modelType");
var documentModelCommonFields = {
    creationDate: {
        kind: 'or',
        content: [
            { kind: 'primitive', content: 'number' },
            { kind: 'primitive', content: 'undefined' },
        ],
    },
    decisionMetadata: {
        kind: 'object',
        content: {
            appealNumber: { kind: 'primitive', content: 'string' },
            additionalTermsToAnnotate: { kind: 'primitive', content: 'string' },
            boundDecisionDocumentNumbers: { kind: 'array', content: { kind: 'primitive', content: 'number' } },
            categoriesToOmit: { kind: 'array', content: { kind: 'primitive', content: 'string' } },
            chamberName: { kind: 'primitive', content: 'string' },
            civilCaseCode: { kind: 'primitive', content: 'string' },
            civilMatterCode: { kind: 'primitive', content: 'string' },
            criminalCaseCode: { kind: 'primitive', content: 'string' },
            date: {
                kind: 'or',
                content: [
                    { kind: 'primitive', content: 'number' },
                    { kind: 'primitive', content: 'undefined' },
                ],
            },
            jurisdiction: { kind: 'primitive', content: 'string' },
            occultationBlock: {
                kind: 'or',
                content: [
                    { kind: 'primitive', content: 'number' },
                    { kind: 'primitive', content: 'undefined' },
                ],
            },
            NACCode: { kind: 'primitive', content: 'string' },
            endCaseCode: { kind: 'primitive', content: 'string' },
            parties: { kind: 'array', content: { kind: 'primitive', content: 'string' } },
            session: { kind: 'primitive', content: 'string' },
            solution: { kind: 'primitive', content: 'string' },
        },
    },
    documentNumber: { kind: 'primitive', content: 'number' },
    _id: { kind: 'custom', content: 'id' },
    publicationCategory: { kind: 'array', content: { kind: 'primitive', content: 'string' } },
    reviewStatus: {
        kind: 'object',
        content: {
            viewerNames: { kind: 'array', content: { kind: 'primitive', content: 'string' } },
            hasBeenAmended: { kind: 'primitive', content: 'boolean' },
        },
    },
    route: {
        kind: 'constant',
        content: ['automatic', 'exhaustive', 'simple', 'confirmation', 'request', 'default'],
    },
    source: { kind: 'primitive', content: 'string' },
    status: {
        kind: 'constant',
        content: [
            'done',
            'free',
            'loaded',
            'nlpAnnotating',
            'pending',
            'rejected',
            'saved',
            'toBePublished',
            'toBeConfirmed',
        ],
    },
    title: { kind: 'primitive', content: 'string' },
    text: { kind: 'primitive', content: 'string' },
};
var fetchedDocumentModel = modelType_1.buildModel({
    kind: 'object',
    content: documentModelCommonFields,
});
exports.fetchedDocumentModel = fetchedDocumentModel;
var documentModel = modelType_1.buildModel({
    kind: 'object',
    content: __assign(__assign({}, documentModelCommonFields), { externalId: { kind: 'primitive', content: 'string' }, priority: { kind: 'primitive', content: 'number' }, updateDate: { kind: 'primitive', content: 'number' } }),
});
exports.documentModel = documentModel;

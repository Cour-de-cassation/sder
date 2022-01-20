"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ressourceFilterModel = void 0;
var modelType_1 = require("../modelType");
var ressourceFilterModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        mustHaveSurAnnotations: { kind: 'primitive', content: 'boolean' },
        mustHaveSubAnnotations: { kind: 'primitive', content: 'boolean' },
        publicationCategory: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'string' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        startDate: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'number' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        endDate: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'number' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        source: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'string' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        jurisdiction: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'string' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        userId: {
            kind: 'or',
            content: [
                { kind: 'custom', content: 'id' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
    },
});
exports.ressourceFilterModel = ressourceFilterModel;

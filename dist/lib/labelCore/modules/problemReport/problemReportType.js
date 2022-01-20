"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemReportModel = void 0;
var modelType_1 = require("../modelType");
var problemReportModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        _id: { kind: 'custom', content: 'id' },
        documentId: { kind: 'custom', content: 'id' },
        userId: { kind: 'custom', content: 'id' },
        date: { kind: 'primitive', content: 'number' },
        text: { kind: 'primitive', content: 'string' },
        hasBeenRead: { kind: 'primitive', content: 'boolean' },
        type: { kind: 'constant', content: ['bug', 'annotationProblem', 'suggestion'] },
    },
});
exports.problemReportModel = problemReportModel;

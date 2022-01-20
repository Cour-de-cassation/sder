"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationReportModel = void 0;
var modelType_1 = require("../modelType");
var annotationReportModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        checkList: { kind: 'array', content: { kind: 'primitive', content: 'string' } },
        documentId: { kind: 'custom', content: 'id' },
        _id: { kind: 'custom', content: 'id' },
    },
});
exports.annotationReportModel = annotationReportModel;

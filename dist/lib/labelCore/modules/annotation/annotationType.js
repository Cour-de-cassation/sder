"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationModel = void 0;
var modelType_1 = require("../modelType");
var annotationModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        category: { kind: 'primitive', content: 'string' },
        entityId: { kind: 'primitive', content: 'string' },
        start: { kind: 'primitive', content: 'number' },
        text: { kind: 'primitive', content: 'string' },
        certaintyScore: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'number' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
    },
});
exports.annotationModel = annotationModel;

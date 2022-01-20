"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationsDiffModel = void 0;
var annotation_1 = require("../annotation");
var modelType_1 = require("../modelType");
var annotationsDiffModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        before: { kind: 'array', content: annotation_1.annotationModule.model },
        after: { kind: 'array', content: annotation_1.annotationModule.model },
    },
});
exports.annotationsDiffModel = annotationsDiffModel;

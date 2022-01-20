"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignationModel = void 0;
var modelType_1 = require("../modelType");
var assignationModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        _id: { kind: 'custom', content: 'id' },
        documentId: { kind: 'custom', content: 'id' },
        treatmentId: { kind: 'custom', content: 'id' },
        userId: { kind: 'custom', content: 'id' },
    },
});
exports.assignationModel = assignationModel;

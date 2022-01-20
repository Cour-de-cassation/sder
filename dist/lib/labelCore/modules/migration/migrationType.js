"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationModel = void 0;
var modelType_1 = require("../modelType");
var migrationModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        _id: { kind: 'custom', content: 'id' },
        creationDate: { kind: 'primitive', content: 'number' },
        order: { kind: 'primitive', content: 'number' },
    },
});
exports.migrationModel = migrationModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordTimeValidityStatusModel = exports.userModel = void 0;
var modelType_1 = require("../modelType");
var userModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        _id: { kind: 'custom', content: 'id' },
        deletionDate: {
            kind: 'or',
            content: [
                { kind: 'primitive', content: 'number' },
                { kind: 'primitive', content: 'undefined' },
            ],
        },
        email: { kind: 'primitive', content: 'string' },
        hashedPassword: { kind: 'primitive', content: 'string' },
        isActivated: { kind: 'primitive', content: 'boolean' },
        name: { kind: 'primitive', content: 'string' },
        passwordLastUpdateDate: { kind: 'primitive', content: 'number' },
        role: {
            kind: 'constant',
            content: ['admin', 'annotator', 'publicator', 'scrutator'],
        },
    },
});
exports.userModel = userModel;
var passwordTimeValidityStatusModel = modelType_1.buildModel({ kind: 'constant', content: ['valid', 'outdated'] });
exports.passwordTimeValidityStatusModel = passwordTimeValidityStatusModel;

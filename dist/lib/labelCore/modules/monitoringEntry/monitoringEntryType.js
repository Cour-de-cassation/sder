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
exports.monitoringEntryModel = exports.fetchedMonitoringEntryModel = void 0;
var modelType_1 = require("../modelType");
var monitoringEntryModelCommonFields = {
    _id: { kind: 'custom', content: 'id' },
    action: { kind: 'primitive', content: 'string' },
    creationDate: { kind: 'primitive', content: 'number' },
    documentId: { kind: 'custom', content: 'id' },
    origin: { kind: 'constant', content: ['document', 'panel', 'footer', 'shortcut'] },
};
var fetchedMonitoringEntryModel = modelType_1.buildModel({
    kind: 'object',
    content: monitoringEntryModelCommonFields,
});
exports.fetchedMonitoringEntryModel = fetchedMonitoringEntryModel;
var monitoringEntryModel = modelType_1.buildModel({
    kind: 'object',
    content: __assign(__assign({}, monitoringEntryModelCommonFields), { userId: { kind: 'custom', content: 'id' } }),
});
exports.monitoringEntryModel = monitoringEntryModel;

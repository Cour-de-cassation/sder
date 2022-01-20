"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoringEntryBuilder = void 0;
var id_1 = require("../../id");
var monitoringEntryBuilder = {
    buildFetchedMonitoringEntry: buildFetchedMonitoringEntry,
};
exports.monitoringEntryBuilder = monitoringEntryBuilder;
function buildFetchedMonitoringEntry(_a) {
    var action = _a.action, documentId = _a.documentId, origin = _a.origin;
    return {
        _id: id_1.idModule.lib.buildId(),
        action: action,
        creationDate: new Date().getTime(),
        documentId: documentId,
        origin: origin,
    };
}

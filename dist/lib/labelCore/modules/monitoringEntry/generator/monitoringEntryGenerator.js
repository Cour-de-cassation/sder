"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoringEntryGenerator = void 0;
var id_1 = require("../../id");
var monitoringEntryGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, action = _b.action, creationDate = _b.creationDate, documentId = _b.documentId, origin = _b.origin, userId = _b.userId;
        return {
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            action: action ? action : '',
            creationDate: creationDate ? creationDate : new Date().getTime(),
            documentId: documentId ? id_1.idModule.lib.buildId(documentId) : id_1.idModule.lib.buildId(),
            origin: origin ? origin : 'document',
            userId: userId ? id_1.idModule.lib.buildId(userId) : id_1.idModule.lib.buildId(),
        };
    },
};
exports.monitoringEntryGenerator = monitoringEntryGenerator;

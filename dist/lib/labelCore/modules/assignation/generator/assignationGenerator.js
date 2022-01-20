"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignationGenerator = void 0;
var id_1 = require("../../id");
var assignationGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, documentId = _b.documentId, _id = _b._id, treatmentId = _b.treatmentId, userId = _b.userId;
        return ({
            documentId: documentId ? id_1.idModule.lib.buildId(documentId) : id_1.idModule.lib.buildId(),
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            treatmentId: treatmentId ? id_1.idModule.lib.buildId(treatmentId) : id_1.idModule.lib.buildId(),
            userId: userId ? id_1.idModule.lib.buildId(userId) : id_1.idModule.lib.buildId(),
        });
    },
};
exports.assignationGenerator = assignationGenerator;

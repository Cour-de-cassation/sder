"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.problemReportGenerator = void 0;
var id_1 = require("../../id");
var problemReportGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, documentId = _b.documentId, userId = _b.userId, _id = _b._id, date = _b.date, hasBeenRead = _b.hasBeenRead, text = _b.text, type = _b.type;
        return {
            documentId: id_1.idModule.lib.buildId(documentId),
            userId: id_1.idModule.lib.buildId(userId),
            date: date ? date : new Date().getTime(),
            hasBeenRead: hasBeenRead ? hasBeenRead : false,
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            text: text ? text : "TEXT_" + Math.random(),
            type: type ? type : 'bug',
        };
    },
};
exports.problemReportGenerator = problemReportGenerator;

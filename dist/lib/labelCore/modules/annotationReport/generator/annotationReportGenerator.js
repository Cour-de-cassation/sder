"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationReportGenerator = void 0;
var id_1 = require("../../id");
var annotationReportGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, checkList = _b.checkList, documentId = _b.documentId, _id = _b._id;
        return ({
            checkList: checkList ? checkList : [],
            documentId: documentId ? id_1.idModule.lib.buildId(documentId) : id_1.idModule.lib.buildId(),
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
        });
    },
};
exports.annotationReportGenerator = annotationReportGenerator;

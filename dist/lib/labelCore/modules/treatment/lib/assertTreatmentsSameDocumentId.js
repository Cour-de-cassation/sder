"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertTreatmentsSameDocumentId = void 0;
var id_1 = require("../../id");
var computeTreatmentIdsText_1 = require("./computeTreatmentIdsText");
function assertTreatmentsSameDocumentId(treatments) {
    if (treatments.length < 2) {
        return;
    }
    var documentId = treatments[0].documentId;
    for (var i = 1, l = treatments.length; i < l; i++) {
        if (!id_1.idModule.lib.equalId(documentId, treatments[i].documentId)) {
            throw new Error("The treatments " + computeTreatmentIdsText_1.computeTreatmentIdsText(treatments) + " are not on the same document");
        }
    }
}
exports.assertTreatmentsSameDocumentId = assertTreatmentsSameDocumentId;

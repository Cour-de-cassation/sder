"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeTreatmentIdsText = void 0;
var id_1 = require("../../id");
function computeTreatmentIdsText(treatments) {
    return "[" + treatments.map(function (treatment) { return id_1.idModule.lib.convertToString(treatment._id); }).join(', ') + "]";
}
exports.computeTreatmentIdsText = computeTreatmentIdsText;

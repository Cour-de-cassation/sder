"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastTreatment = void 0;
var sortInConsistentOrder_1 = require("./sortInConsistentOrder");
function getLastTreatment(treatments) {
    if (treatments.length === 0) {
        return undefined;
    }
    return sortInConsistentOrder_1.sortInConsistentOrder(treatments)[treatments.length - 1];
}
exports.getLastTreatment = getLastTreatment;

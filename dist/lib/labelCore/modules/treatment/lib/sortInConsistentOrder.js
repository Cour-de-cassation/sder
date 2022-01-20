"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortInConsistentOrder = void 0;
function sortInConsistentOrder(treatments) {
    return __spreadArrays(treatments).sort(function (treatment1, treatment2) { return treatment1.order - treatment2.order; });
}
exports.sortInConsistentOrder = sortInConsistentOrder;

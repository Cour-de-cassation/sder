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
exports.buildDecision = void 0;
var utils_1 = require("../../../utils");
function buildDecision(decisionFields) {
    return __assign(__assign({}, decisionFields), { _id: utils_1.buildObjectId(), labelTreatments: [] });
}
exports.buildDecision = buildDecision;

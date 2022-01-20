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
exports.buildDocument = void 0;
var id_1 = require("../../id");
function buildDocument(documentFields) {
    return __assign(__assign({}, documentFields), { _id: id_1.idModule.lib.buildId(), reviewStatus: { hasBeenAmended: false, viewerNames: [] }, status: 'loaded', updateDate: new Date().getTime() });
}
exports.buildDocument = buildDocument;

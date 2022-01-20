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
exports.annotationLinker = void 0;
var entityIdHandler_1 = require("./entityIdHandler");
var annotationLinker = {
    link: link,
    unlink: unlink,
};
exports.annotationLinker = annotationLinker;
function link(annotationSource, annotationTarget) {
    return __assign(__assign({}, annotationSource), { entityId: annotationTarget.entityId });
}
function unlink(annotation) {
    return __assign(__assign({}, annotation), { entityId: entityIdHandler_1.entityIdHandler.compute(annotation.category, annotation.text) });
}

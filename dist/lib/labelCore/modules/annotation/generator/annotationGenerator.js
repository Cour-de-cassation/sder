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
exports.annotationGenerator = void 0;
var lib_1 = require("../lib");
var annotationGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, category = _b.category, start = _b.start, text = _b.text, certaintyScore = _b.certaintyScore;
        var annotationFields = {
            category: category ? category : "CATEGORY_" + Math.random(),
            start: start ? start : 0,
            text: text ? text : "TEXT_" + Math.random(),
            certaintyScore: certaintyScore ? certaintyScore : undefined,
        };
        return __assign(__assign({}, annotationFields), { entityId: lib_1.entityIdHandler.compute(annotationFields.category, annotationFields.text) });
    },
};
exports.annotationGenerator = annotationGenerator;

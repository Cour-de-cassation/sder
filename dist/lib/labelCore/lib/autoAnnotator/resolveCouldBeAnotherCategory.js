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
exports.resolveCouldBeAnotherCategory = void 0;
var annotation_1 = require("../../modules/annotation");
var stringComparator_1 = require("../stringComparator");
function resolveCouldBeAnotherCategory(annotation, annotations, settings) {
    var _a;
    var couldBe = (_a = settings[annotation.category]) === null || _a === void 0 ? void 0 : _a.couldBe;
    if (!couldBe) {
        return annotation;
    }
    if (annotations.some(function (anotherAnnotation) {
        return anotherAnnotation.category === couldBe &&
            stringComparator_1.stringComparator.insensitiveEqual(anotherAnnotation.text, annotation.text);
    })) {
        return __assign(__assign({}, annotation), { category: couldBe, entityId: annotation_1.annotationModule.lib.entityIdHandler.compute(couldBe, annotation.text) });
    }
    else {
        return annotation;
    }
}
exports.resolveCouldBeAnotherCategory = resolveCouldBeAnotherCategory;

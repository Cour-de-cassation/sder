"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnnotationCategoryText = void 0;
function getAnnotationCategoryText(category, settings) {
    var _a;
    return ((_a = settings[category]) === null || _a === void 0 ? void 0 : _a.text) || category;
}
exports.getAnnotationCategoryText = getAnnotationCategoryText;

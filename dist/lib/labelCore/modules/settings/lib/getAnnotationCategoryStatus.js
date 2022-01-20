"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnnotationCategoryStatus = void 0;
function getAnnotationCategoryStatus(category, settings) {
    var _a;
    return ((_a = settings[category]) === null || _a === void 0 ? void 0 : _a.status) || 'hidden';
}
exports.getAnnotationCategoryStatus = getAnnotationCategoryStatus;

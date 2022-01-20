"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnnotationCategoryColor = void 0;
var DEFAULT_ANNOTATION_COLOR = ['grey', 700];
function getAnnotationCategoryColor(category, settings, displayMode) {
    var _a;
    return ((_a = settings[category]) === null || _a === void 0 ? void 0 : _a.color[displayMode]) || DEFAULT_ANNOTATION_COLOR;
}
exports.getAnnotationCategoryColor = getAnnotationCategoryColor;

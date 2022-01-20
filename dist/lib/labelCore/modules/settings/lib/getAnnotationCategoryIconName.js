"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnnotationCategoryIconName = void 0;
var DEFAULT_ANNOTATION_ICON_NAME = 'forbidden';
function getAnnotationCategoryIconName(category, settings) {
    var _a;
    return ((_a = settings[category]) === null || _a === void 0 ? void 0 : _a.iconName) || DEFAULT_ANNOTATION_ICON_NAME;
}
exports.getAnnotationCategoryIconName = getAnnotationCategoryIconName;

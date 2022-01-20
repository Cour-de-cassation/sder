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
exports.additionalAnnotationCategoryHandler = void 0;
var lodash_1 = require("lodash");
var additionalAnnotationCategoryHandler = buildAdditionalAnnotationCategoryHandler();
exports.additionalAnnotationCategoryHandler = additionalAnnotationCategoryHandler;
function buildAdditionalAnnotationCategoryHandler() {
    var ADDITIONAL_ANNOTATION_CATEGORY_NAME = 'annotationSupplementaire';
    var ADDITIONAL_ANNOTATION_CATEGORY_ICON_NAME = 'pencil';
    var ADDITIONAL_ANNOTATION_CATEGORY_COLOR = {
        lightMode: ['red', '300'],
        darkMode: ['red', '700'],
    };
    return { getCategoryName: getCategoryName, getCategoryColor: getCategoryColor, getCategoryIconName: getCategoryIconName, addCategoryToSettings: addCategoryToSettings };
    function getCategoryName() {
        return ADDITIONAL_ANNOTATION_CATEGORY_NAME;
    }
    function getCategoryColor(displayMode) {
        return ADDITIONAL_ANNOTATION_CATEGORY_COLOR[displayMode];
    }
    function getCategoryIconName() {
        return ADDITIONAL_ANNOTATION_CATEGORY_ICON_NAME;
    }
    function addCategoryToSettings(settings) {
        var _a;
        var order = (lodash_1.max(Object.values(settings).map(function (setting) { return setting.order; })) || 0) + 1;
        return __assign(__assign({}, settings), (_a = {}, _a[ADDITIONAL_ANNOTATION_CATEGORY_NAME] = {
            autoLinkSensitivity: [{ kind: 'levenshteinDistance', threshold: 2 }, { kind: 'caseInsensitive' }],
            anonymization: '[...]',
            color: ADDITIONAL_ANNOTATION_CATEGORY_COLOR,
            iconName: ADDITIONAL_ANNOTATION_CATEGORY_ICON_NAME,
            order: order,
            status: 'hidden',
            text: 'Occultation supplémentaire',
            canBeAnnotatedBy: 'human',
        }, _a));
    }
}

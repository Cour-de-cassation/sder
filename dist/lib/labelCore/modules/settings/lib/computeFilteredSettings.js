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
exports.computeFilteredSettings = void 0;
var additionalAnnotationCategoryHandler_1 = require("./additionalAnnotationCategoryHandler");
function computeFilteredSettings(settings, categoriesToOmit, additionalTermsToAnnotate) {
    var settingsForDocument = Object.entries(settings).reduce(function (accumulator, _a) {
        var _b, _c, _d, _e;
        var category = _a[0], categorySetting = _a[1];
        if (categorySetting.status === 'alwaysVisible') {
            return __assign(__assign({}, accumulator), (_b = {}, _b[category] = categorySetting, _b));
        }
        if (category === additionalAnnotationCategoryHandler_1.additionalAnnotationCategoryHandler.getCategoryName()) {
            if (!!additionalTermsToAnnotate) {
                return __assign(__assign({}, accumulator), (_c = {}, _c[category] = __assign(__assign({}, categorySetting), { status: 'annotable' }), _c));
            }
        }
        else if (!categoriesToOmit.includes(category)) {
            return __assign(__assign({}, accumulator), (_d = {}, _d[category] = __assign(__assign({}, categorySetting), { status: 'annotable' }), _d));
        }
        return __assign(__assign({}, accumulator), (_e = {}, _e[category] = categorySetting, _e));
    }, {});
    return settingsForDocument;
}
exports.computeFilteredSettings = computeFilteredSettings;

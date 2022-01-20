"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsModule = void 0;
var lib_1 = require("./lib");
var settingsType_1 = require("./settingsType");
var settingsModule = {
    model: settingsType_1.settingsModel,
    lib: {
        additionalAnnotationCategoryHandler: lib_1.additionalAnnotationCategoryHandler,
        buildSettings: lib_1.buildSettings,
        computeFilteredSettings: lib_1.computeFilteredSettings,
        parseFromJson: lib_1.parseFromJson,
        getAnnotationCategoryColor: lib_1.getAnnotationCategoryColor,
        getAnnotationCategoryIconName: lib_1.getAnnotationCategoryIconName,
        getAnnotationCategoryStatus: lib_1.getAnnotationCategoryStatus,
        getAnnotationCategoryText: lib_1.getAnnotationCategoryText,
        getCategories: lib_1.getCategories,
    },
};
exports.settingsModule = settingsModule;

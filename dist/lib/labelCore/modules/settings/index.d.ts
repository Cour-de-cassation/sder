import { buildSettings, computeFilteredSettings, parseFromJson, getAnnotationCategoryColor, getAnnotationCategoryIconName, getAnnotationCategoryStatus, getAnnotationCategoryText, getCategories } from './lib';
import { colorType, constantColorType, displayModeType, settingsType, shadeColorType, categoryIconNameType } from './settingsType';
export { settingsModule };
export type { colorType, constantColorType, displayModeType, settingsType, shadeColorType, categoryIconNameType };
declare const settingsModule: {
    model: {
        readonly kind: "object";
        readonly content: {
            readonly json: {
                readonly kind: "primitive";
                readonly content: "string";
            };
        };
    };
    lib: {
        additionalAnnotationCategoryHandler: {
            getCategoryName: () => string;
            getCategoryColor: (displayMode: displayModeType) => colorType;
            getCategoryIconName: () => "pencil";
            addCategoryToSettings: (settings: settingsType) => settingsType;
        };
        buildSettings: typeof buildSettings;
        computeFilteredSettings: typeof computeFilteredSettings;
        parseFromJson: typeof parseFromJson;
        getAnnotationCategoryColor: typeof getAnnotationCategoryColor;
        getAnnotationCategoryIconName: typeof getAnnotationCategoryIconName;
        getAnnotationCategoryStatus: typeof getAnnotationCategoryStatus;
        getAnnotationCategoryText: typeof getAnnotationCategoryText;
        getCategories: typeof getCategories;
    };
};

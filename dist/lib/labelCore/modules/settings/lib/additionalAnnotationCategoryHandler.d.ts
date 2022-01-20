import { colorType, displayModeType, settingsType } from '../settingsType';
export { additionalAnnotationCategoryHandler };
declare const additionalAnnotationCategoryHandler: {
    getCategoryName: () => string;
    getCategoryColor: (displayMode: displayModeType) => colorType;
    getCategoryIconName: () => "pencil";
    addCategoryToSettings: (settings: settingsType) => settingsType;
};

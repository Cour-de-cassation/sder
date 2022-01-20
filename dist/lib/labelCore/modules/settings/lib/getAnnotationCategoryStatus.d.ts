import { settingsType } from '../settingsType';
export { getAnnotationCategoryStatus };
declare function getAnnotationCategoryStatus(category: string, settings: settingsType): "hidden" | "visible" | "alwaysVisible" | "annotable";

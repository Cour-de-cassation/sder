import { categorySettingType, settingsType } from '../settingsType';
export { getCategories };
declare function getCategories(settings: settingsType, filter: {
    status: categorySettingType['status'][];
    canBeAnnotatedBy: 'human' | 'NLP';
}): string[];

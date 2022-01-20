import { categorySettingType, settingsType } from '../settingsType';
export { buildSettings };
export type { partialSettingsType };
declare type partialSettingsType = {
    [category: string]: Partial<categorySettingType>;
};
declare function buildSettings(partialSettings?: partialSettingsType): settingsType;

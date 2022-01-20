import { stringComparisonSensitivityType } from '../../lib';
export { categoryIconNames, constantColors, settingsModel, shadeColors };
export type { categoryIconNameType, categorySettingType, colorType, constantColorType, displayModeType, settingsType, shadeColorType, };
declare type settingsType = {
    [category: string]: categorySettingType;
};
declare type categorySettingType = {
    anonymization: string;
    color: {
        [displayMode in displayModeType]: colorType;
    };
    couldBe?: string;
    iconName: categoryIconNameType;
    autoLinkSensitivity: stringComparisonSensitivityType[];
    isAnonymized?: boolean;
    isSensitive?: boolean;
    order: number | undefined;
    status: 'hidden' | 'visible' | 'alwaysVisible' | 'annotable';
    text: string;
    canBeAnnotatedBy: 'both' | 'NLP' | 'human';
};
declare type displayModeType = 'lightMode' | 'darkMode';
declare const categoryIconNames: readonly ["bank", "book", "cake", "car", "child", "city", "cloud", "email", "forbidden", "judge", "heart", "location", "map", "pencil", "person", "phone", "store", "web", "work"];
declare type categoryIconNameType = typeof categoryIconNames[number];
declare const constantColors: readonly ["black", "white"];
declare const shadeColors: readonly ["blue", "blueGrey", "brown", "cyan", "deepOrange", "deepPurple", "green", "grey", "indigo", "lightBlue", "lightGreen", "lime", "orange", "pink", "purple", "red", "teal", "yellow"];
declare type constantColorType = typeof constantColors[number];
declare type shadeColorType = [typeof shadeColors[number], string];
declare type colorType = constantColorType | shadeColorType;
declare const settingsModel: {
    readonly kind: "object";
    readonly content: {
        readonly json: {
            readonly kind: "primitive";
            readonly content: "string";
        };
    };
};

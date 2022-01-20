import { normalizeString } from './normalizeString';
import { compareNormalizedStrings } from './compareNormalizedStrings';
export { stringComparator };
export type { stringComparisonSensitivityType };
declare type stringComparisonSensitivityType = {
    kind: 'levenshteinDistance';
    threshold: number;
} | {
    kind: 'caseInsensitive';
} | {
    kind: 'inclusion';
};
declare const stringComparator: {
    insensitiveEqual(str1: string, str2: string): boolean;
    normalizeString: typeof normalizeString;
    compareNormalizedStrings: typeof compareNormalizedStrings;
    similar(str1: string, str2: string, threshold: number): boolean;
};

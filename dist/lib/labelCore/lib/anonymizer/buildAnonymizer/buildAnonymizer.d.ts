import { annotationType } from '../../../modules/annotation';
import { fetchedDocumentType } from '../../../modules/document';
import { settingsType } from '../../../modules/settings';
export { buildAnonymizer };
export type { anonymizerType };
declare type anonymizerType<documentT extends fetchedDocumentType> = {
    anonymizeDocument: (document: documentT) => documentT;
    anonymize: (annotation: annotationType) => string;
};
declare function buildAnonymizer<documentT extends fetchedDocumentType>(settings: settingsType, annotations: annotationType[], seed: number): anonymizerType<documentT>;

import { documentType } from '../../document';
import { settingsType } from '../settingsType';
export { computeFilteredSettings };
declare function computeFilteredSettings(settings: settingsType, categoriesToOmit: documentType['decisionMetadata']['categoriesToOmit'], additionalTermsToAnnotate: documentType['decisionMetadata']['additionalTermsToAnnotate']): settingsType;

import { treatmentType } from '../../modules/treatment';
import { documentType } from '../../modules/document';
import { statisticType } from '../../modules/statistic';
import { userType } from '../../modules/user';
import { settingsType } from '../../modules/settings';
export { statisticsCreator };
declare const statisticsCreator: {
    buildFromDocument: typeof buildFromDocument;
};
declare function buildFromDocument({ document, treatments, humanTreatments, settings, }: {
    document: documentType;
    treatments: treatmentType[];
    humanTreatments: Array<{
        treatment: treatmentType;
        userId: userType['_id'];
    }>;
    settings: settingsType;
}): statisticType;

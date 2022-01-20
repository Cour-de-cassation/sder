import { documentType } from '../../document';
import { treatmentInfoType, treatmentType } from '../../treatment';
import { statisticType } from '../statisticType';
export { buildStatistic };
declare function buildStatistic({ annotationsCount, humanTreatmentsSummary, document, linkedEntitiesCount, treatmentInfo, lastUpdateDate, }: {
    annotationsCount: number;
    humanTreatmentsSummary: statisticType['treatmentsSummary'];
    document: documentType;
    linkedEntitiesCount: number;
    treatmentInfo: treatmentInfoType;
    lastUpdateDate: treatmentType['lastUpdateDate'];
}): statisticType;

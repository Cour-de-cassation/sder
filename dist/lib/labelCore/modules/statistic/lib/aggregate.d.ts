import { ressourceFilterType } from '../../ressourceFilter';
import { statisticType } from '../statisticType';
export { aggregate };
declare function aggregate(statistics: statisticType[], filter: ressourceFilterType): {
    cumulatedValue: {
        surAnnotationsCount: number;
        subAnnotationsSensitiveCount: number;
        subAnnotationsNonSensitiveCount: number;
        treatmentDuration: number;
        annotationsCount: number;
        wordsCount: number;
    };
    total: number;
};

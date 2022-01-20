import { settingsType } from '../../settings';
import { treatmentType } from '../treatmentType';
export { computeTreatmentInfo };
export type { treatmentInfoType };
declare type treatmentInfoType = {
    surAnnotationsCount: number;
    subAnnotationsSensitiveCount: number;
    subAnnotationsNonSensitiveCount: number;
};
declare function computeTreatmentInfo(annotationsDiff: treatmentType['annotationsDiff'], settings: settingsType): treatmentInfoType;

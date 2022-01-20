import { omitIdType } from '../../id';
import { treatmentType } from '../treatmentType';
export { buildEmpty };
declare function buildEmpty(treatmentFields: Omit<omitIdType<treatmentType>, 'duration' | 'lastUpdateDate' | 'subAnnotationsSensitiveCount' | 'subAnnotationsNonSensitiveCount' | 'surAnnotationsCount'>): treatmentType;

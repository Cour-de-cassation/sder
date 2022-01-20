import { settingsType } from '../../../modules/settings';
import { omitIdType } from '../../id';
import { treatmentType } from '../treatmentType';
export { build };
declare function build(treatmentFields: Omit<omitIdType<treatmentType>, 'duration' | 'lastUpdateDate' | 'subAnnotationsSensitiveCount' | 'subAnnotationsNonSensitiveCount' | 'surAnnotationsCount'>, settings: settingsType): treatmentType;

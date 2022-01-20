import { settingsType } from '../../settings';
import { treatmentType } from '../treatmentType';
import { treatmentInfoType } from './computeTreatmentInfo';
export { aggregateTreatmentInfo };
declare function aggregateTreatmentInfo(treatments: treatmentType[], settings: settingsType): treatmentInfoType;

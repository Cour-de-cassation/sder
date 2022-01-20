import { settingsType } from '../../settings';
import { treatmentType } from '../treatmentType';
export { update };
declare function update(treatment: treatmentType, treatmentFields: Partial<treatmentType>, settings: settingsType): treatmentType;

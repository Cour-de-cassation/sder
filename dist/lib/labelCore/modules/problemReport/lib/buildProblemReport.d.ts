import { omitIdType } from '../../id';
import { problemReportType } from '../problemReportType';
export { buildProblemReport };
declare function buildProblemReport(assignationFields: omitIdType<problemReportType>): problemReportType;

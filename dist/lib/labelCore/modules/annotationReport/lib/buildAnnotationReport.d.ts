import { omitIdType } from '../../id';
import { annotationReportType } from '../annotationReportType';
export { buildAnnotationReport };
declare function buildAnnotationReport(annotationReportFields: omitIdType<annotationReportType>): annotationReportType;

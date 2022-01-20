import { annotationType } from '../../annotation';
import { annotationsDiffType } from '../../annotationsDiff';
import { treatmentType } from '../treatmentType';
export { computeAnnotations, computeAnnotationsDiff };
declare function computeAnnotations(treatments: treatmentType[]): annotationType[];
declare function computeAnnotationsDiff(treatments: treatmentType[]): annotationsDiffType;

import { annotationType } from '../../annotation';
import { annotationsDiffType } from '../annotationsDiffType';
export { assertAnnotationsDiffCompatibleWithPreviousAnnotations };
declare function assertAnnotationsDiffCompatibleWithPreviousAnnotations(previousAnnotations: annotationType[], annotationsDiff: annotationsDiffType, actionToPerform?: string): boolean;

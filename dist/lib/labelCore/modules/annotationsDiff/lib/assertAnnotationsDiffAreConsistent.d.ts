import { annotationType } from '../../../modules/annotation';
import { settingsType } from '../../../modules/settings';
import { treatmentType } from '../../../modules/treatment';
import { annotationsDiffType } from '../annotationsDiffType';
export { assertAnnotationsDiffAreConsistent };
declare function assertAnnotationsDiffAreConsistent(annotationsDiff: annotationsDiffType, { previousAnnotations, settings, treatmentSource, }: {
    previousAnnotations: annotationType[];
    settings: settingsType;
    treatmentSource: treatmentType['source'];
}, actionToPerform: string): void;

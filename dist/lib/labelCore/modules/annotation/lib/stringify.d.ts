import { annotationType } from '../annotationType';
export { stringify };
declare function stringify(annotation: annotationType, options?: {
    displayEntityId?: boolean;
}): string;

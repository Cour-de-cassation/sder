import { annotationType } from '../annotationType';
export { comparator };
declare const comparator: {
    equal(annotation1: annotationType, annotation2: annotationType): boolean;
    equalModuloCategory(annotation1: annotationType, annotation2: annotationType): boolean;
    compareByText(annotation1: annotationType, annotation2: annotationType): number;
};

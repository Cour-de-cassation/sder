import { annotationType } from '../annotationType';
export { computeNearbyText };
declare function computeNearbyText(annotation: annotationType, text: string): {
    textStart: number;
    textEnd: number;
};

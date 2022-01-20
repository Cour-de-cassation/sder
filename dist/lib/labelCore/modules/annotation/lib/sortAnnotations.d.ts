import { annotationType } from '../annotationType';
export { sortAnnotations };
declare function sortAnnotations(annotations: annotationType[]): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
}[];

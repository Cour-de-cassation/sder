import { annotationType } from '../../annotation';
export { computeAnnotationsDiff };
declare function computeAnnotationsDiff(previousAnnotations: annotationType[], nextAnnotations: annotationType[]): {
    before: {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }[];
    after: {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }[];
};

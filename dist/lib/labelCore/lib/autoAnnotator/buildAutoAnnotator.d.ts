import { annotationType } from '../../modules/annotation';
import { settingsType } from '../../modules/settings';
export { buildAutoAnnotator };
declare function buildAutoAnnotator(settings: settingsType): {
    annotate(annotations: annotationType[]): {
        readonly category: string;
        readonly entityId: string;
        readonly start: number;
        readonly text: string;
        readonly certaintyScore: number | undefined;
    }[];
};

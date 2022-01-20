import { annotationType } from '../annotationType';
export { entityIdHandler };
declare const entityIdHandler: {
    compute: typeof compute;
    getCategory: typeof getCategory;
    getText: typeof getText;
    syncEntityId: typeof syncEntityId;
    syncEntityIdWithCategory: typeof syncEntityIdWithCategory;
};
declare function compute(category: string, text: string): string;
declare function syncEntityId(annotation: annotationType): annotationType;
declare function syncEntityIdWithCategory(annotation: annotationType): annotationType;
declare function getCategory(entityId: string): string;
declare function getText(entityId: string): string;

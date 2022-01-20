import { settingsType } from '../../modules/settings';
import { annotationType } from '../../modules/annotation';
export { annotationHandler };
declare const annotationHandler: {
    create: typeof create;
    createManyLinked: typeof createManyLinked;
    createAll: typeof createAll;
    deleteByTextAndCategory: typeof deleteByTextAndCategory;
    deleteByTextAndStart: typeof deleteByTextAndStart;
    deleteByEntityId: typeof deleteByEntityId;
    getAnnotationIndex: typeof getAnnotationIndex;
    updateManyCategory: typeof updateManyCategory;
    updateOneCategory: typeof updateOneCategory;
    updateOneText: typeof updateOneText;
};
declare function create(annotations: annotationType[], fields: {
    category: string;
    start: number;
    text: string;
}, settings: settingsType): annotationType[];
declare function createManyLinked(annotations: annotationType[], fieldsArray: Array<{
    category: string;
    start: number;
    text: string;
}>): annotationType[];
declare function createAll(annotations: annotationType[], category: string, annotationTextsAndIndices: {
    index: number;
    text: string;
}[], settings: settingsType): annotationType[];
declare function deleteByTextAndCategory(annotations: annotationType[], annotation: annotationType): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
}[];
declare function deleteByTextAndStart(annotations: annotationType[], annotation: annotationType): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
}[];
declare function deleteByEntityId(annotations: annotationType[], entityId: annotationType['entityId']): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
}[];
declare function updateManyCategory(annotations: annotationType[], entityId: string, category: string, settings: settingsType): annotationType[];
declare function updateOneCategory(annotations: annotationType[], text: string, start: number, category: string, settings: settingsType): annotationType[];
declare function updateOneText(annotations: annotationType[], oldText: string, start: number, newText: string, settings: settingsType): annotationType[];
declare function getAnnotationIndex(annotations: annotationType[], annotation: annotationType): {
    index: number;
    total: number;
};

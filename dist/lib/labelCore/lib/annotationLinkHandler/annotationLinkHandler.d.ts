import { annotationType } from '../../modules/annotation';
export { annotationLinkHandler };
declare const annotationLinkHandler: {
    countLinkedEntities: typeof countLinkedEntities;
    getLinkableAnnotations: typeof getLinkableAnnotations;
    getLinkedAnnotations: typeof getLinkedAnnotations;
    getLinkedAnnotationRepresentatives: typeof getLinkedAnnotationRepresentatives;
    getRepresentatives: typeof getRepresentatives;
    isLinked: typeof isLinked;
    isLinkedTo: typeof isLinkedTo;
    link: typeof link;
    unlink: typeof unlink;
    unlinkByCategoryAndText: typeof unlinkByCategoryAndText;
    updateMainLinkEntity: typeof updateMainLinkEntity;
};
declare function countLinkedEntities(annotations: annotationType[]): number;
declare function getLinkableAnnotations(annotation: annotationType, annotations: annotationType[]): annotationType[];
declare function getLinkedAnnotations(entityId: annotationType['entityId'], annotations: annotationType[]): annotationType[];
declare function getLinkedAnnotationRepresentatives(entityId: annotationType['entityId'], annotations: annotationType[]): annotationType[];
declare function getRepresentatives(annotations: annotationType[]): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
}[];
declare function isLinked(annotation: annotationType, annotations: annotationType[]): boolean;
declare function isLinkedTo(annotationSource: annotationType, annotationTarget: annotationType): boolean;
declare function link(annotationSource: annotationType, annotationTarget: annotationType, annotations: annotationType[]): annotationType[];
declare function unlink(annotationToUnlink: annotationType, annotations: annotationType[]): annotationType[];
declare function unlinkByCategoryAndText(annotation: annotationType, annotations: annotationType[]): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
}[];
declare function updateMainLinkEntity(annotation: annotationType, annotations: annotationType[]): {
    readonly category: string;
    readonly entityId: string;
    readonly start: number;
    readonly text: string;
    readonly certaintyScore: number | undefined;
}[];

import { annotationType } from '../annotationType';
export { annotationLinker };
declare const annotationLinker: {
    link: typeof link;
    unlink: typeof unlink;
};
declare function link(annotationSource: annotationType, annotationTarget: annotationType): annotationType;
declare function unlink(annotation: annotationType): annotationType;

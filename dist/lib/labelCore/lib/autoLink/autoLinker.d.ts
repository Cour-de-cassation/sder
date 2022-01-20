import { settingsType } from '../../modules/settings';
import { annotationType } from '../../modules/annotation';
export { autoLinker };
declare const autoLinker: {
    autoLink: typeof autoLink;
    autoLinkAll: typeof autoLinkAll;
};
declare function autoLinkAll(annotations: annotationType[], settings: settingsType): annotationType[];
declare function autoLink(annotationsToLink: annotationType[], annotations: annotationType[], settings: settingsType): annotationType[];

import { documentType } from '../documentType';
export { countWords };
declare function countWords({ text }: {
    text: documentType['text'];
}): number;

import { decode } from 'he';
export { juricaLib };
var juricaLib = {
    cleanText: function (text) {
        assertIsTextString(text);
        text = removeHTMLTags(text);
        text = handleNewLines(text);
        text = removeExtraSpaces(text);
        return decode(text); // Decode HTML entities
    },
};
function assertIsTextString(text) {
    if (typeof text !== 'string') {
        throw new Error('juricaLib.cleanText: text must be a string.');
    }
    if (text === '') {
        throw new Error('juricaLib.cleanText: empty text, the document could be malformed or corrupted.');
    }
}
function removeExtraSpaces(text) {
    text = text.replace(/\t/gim, '');
    text = text.replace(/\\t/gim, '');
    text = text.replace(/\f/gim, '');
    text = text.replace(/\\f/gim, '');
    text = text.replace(/  +/gm, ' ').trim();
    return text;
}
function handleNewLines(text) {
    text = text.replace(/\r\n/gim, '\n');
    text = text.replace(/\r/gim, '\n');
    return text;
}
function removeHTMLTags(text) {
    text = text.replace(/<\/?[^>]+(>|$)/gm, '');
    return text;
}

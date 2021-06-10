import { decode } from 'he';

export { juricaLib };

const juricaLib = {
  cleanText(text: string): string {
    assertIsTextString(text);
    text = removeHTMLTags(text);
    text = handleNewLines(text);
    text = removeExtraSpaces(text);

    return decode(text); // Decode HTML entities
  },
};

function assertIsTextString(text: string) {
  if (typeof text !== 'string') {
    throw new Error('juricaLib.cleanText: text must be a string.');
  }

  if (text === '') {
    throw new Error('juricaLib.cleanText: empty text, the document could be malformed or corrupted.');
  }
}

function removeExtraSpaces(text: string) {
  text = text.replace(/\t/gim, '');
  text = text.replace(/\\t/gim, '');
  text = text.replace(/\f/gim, '');
  text = text.replace(/\\f/gim, '');
  text = text.replace(/  +/gm, ' ').trim();
  return text;
}

function handleNewLines(text: string) {
  text = text.replace(/\r\n/gim, '\n');
  text = text.replace(/\r/gim, '\n');
  return text;
}

function removeHTMLTags(text: string) {
  text = text.replace(/<\/?[^>]+(>|$)/gm, '');
  return text;
}

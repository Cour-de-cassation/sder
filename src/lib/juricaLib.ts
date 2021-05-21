import { decode } from 'he';

export { juricaLib };

const juricaLib = {
  cleanText(text: string): string {
    if (typeof text !== 'string') {
      throw new Error('juricaLib.cleanText: text must be a string.');
    }

    if (text === '') {
      throw new Error('juricaLib.cleanText: empty text, the document could be malformed or corrupted.');
    }

    // Remove all HTML tags:
    text = text.replace(/<\/?[^>]+(>|$)/gm, '');

    // Handling newlines and carriage returns:
    text = text.replace(/\r\n/gim, '\n');
    text = text.replace(/\r/gim, '\n');

    // Remove extra spaces:
    text = text.replace(/\t/gim, '');
    text = text.replace(/\\t/gim, ''); // That could happen...
    text = text.replace(/\f/gim, '');
    text = text.replace(/\\f/gim, ''); // That could happen too...
    text = text.replace(/  +/gm, ' ').trim();

    // Decode HTML entities:
    return decode(text);
  },
};

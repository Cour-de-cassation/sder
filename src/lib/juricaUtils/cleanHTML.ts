import he from 'he';
import { removeMultipleSpaces } from './removeMultipleSpaces';
import { replaceErroneousChars } from './replaceErroneousChars';

export { cleanHTML };

function cleanHTML(html: string) {
  // Remove HTML tags:
  html = html.replace(/<\/?[^>]+(>|$)/gm, '');

  // Handling newlines and carriage returns:
  html = html.replace(/\r\n/gim, '\n');
  html = html.replace(/\r/gim, '\n');

  // Remove extra spaces:
  html = html.replace(/\t/gim, '');
  html = html.replace(/\\t/gim, ''); // That could happen...
  html = html.replace(/\f/gim, '');
  html = html.replace(/\\f/gim, ''); // That could happen too...
  html = removeMultipleSpaces(html);

  // Mysterious chars (cf. https://www.compart.com/fr/unicode/U+0080, etc.):
  html = replaceErroneousChars(html);

  // Decode HTML entities:
  return he.decode(html);
}

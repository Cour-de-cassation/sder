export { replaceErroneousChars };

function replaceErroneousChars(str: string) {
  return str.replace(/\x91/gm, '‘').replace(/\x92/gm, '’').replace(/\x80/gm, '€').replace(/\x96/gm, '–');
}

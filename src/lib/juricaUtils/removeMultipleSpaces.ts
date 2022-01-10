export { removeMultipleSpaces };

function removeMultipleSpaces(str: string) {
  return str.replace(/  +/gm, ' ').trim();
}

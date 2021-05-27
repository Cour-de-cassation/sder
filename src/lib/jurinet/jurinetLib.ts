export { jurinetLib };

const jurinetLib = {
  cleanText(text: string): string {
    if (typeof text !== 'string') {
      throw new Error('jurinetLib.cleanText: text must be a string.');
    }

    // There could be more than one <TEXTE_ARRET> tags, so we first split the text around them:
    const fragments = text.split(/<\/?texte_arret>/gi);

    if (fragments.length < 3) {
      throw new Error(
        'jurinetLib.cleanText: <TEXTE_ARRET> tag not found or incomplete, the document could be malformed or corrupted.',
      );
    }

    // Keep this info for later:
    const textNextToCatPub = text.indexOf('</CAT_PUB><TEXTE_ARRET>') !== -1;

    // Remove all <TEXT_ARRET> fragments from the text:
    text = text.replace(/<texte_arret>[\s\S]*<\/texte_arret>/gim, '');

    // Cleaning every <TEXTE_ARRET> fragment:
    const mergedText = [];
    for (let j = 1; j < fragments.length - 1; j++) {
      const cleanedTextArret = cleanTexteArret(fragments[j]);

      // Ignore empty fragment:
      if (cleanedTextArret !== '') {
        mergedText.push(cleanedTextArret);
      }
    }

    if (mergedText.length === 0) {
      throw new Error('jurinetLib.cleanText: empty text, the document could be malformed or corrupted.');
    }

    // Cleaning the rest of the text:
    text = text
      .replace(/&/g, '&amp;')
      .replace(/&amp;amp;/g, '&amp;')
      .replace(/&amp;#/g, '&#');
    text = text.replace(/\s<\s/g, ' &lt; ');
    text = text.replace(/\s>\s/g, ' &gt; ');

    // A bad XML could lead to a bad JSON (the related data does not matter):
    text = text.replace(/<\/numpourvoi><numpourvoi\s+id=\"\d+\">/gim, ',');

    // Reinject the merged <TEXTE_ARRET> fragments:
    if (textNextToCatPub === true) {
      text = text
        .replace('</CAT_PUB>', '</CAT_PUB><TEXTE_ARRET>' + mergedText.join(' ').trim() + '</TEXTE_ARRET>')
        .trim();
    } else if (text.indexOf('</LIEN_WWW>') !== -1) {
      text = text
        .replace('</LIEN_WWW>', '</LIEN_WWW><TEXTE_ARRET>' + mergedText.join(' ').trim() + '</TEXTE_ARRET>')
        .trim();
    } else {
      throw new Error(
        'jurinetLib.cleanText: End of <CAT_PUB> or <LIEN_WWW> tag not found, the document could be malformed or corrupted.',
      );
    }

    return text;
  },
};

function cleanTexteArret(texteArret: string) {
  let cleanedTextArret = texteArret;

  cleanedTextArret = cleanedTextArret.replace(/<br\s*\/>/gim, '\r\n');
  cleanedTextArret = cleanedTextArret.replace(/<hr\s*\/>/gim, '\r\n');
  cleanedTextArret = cleanedTextArret.replace(/<a\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<b\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<i\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<u\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<em\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<strong\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<font\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<span\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<p\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<h\d\s+[^>]+>/gim, '');
  cleanedTextArret = cleanedTextArret.replace(/<\/a>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/b>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/i>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/u>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/em>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/strong>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/font>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/span>/gim, ' ');
  cleanedTextArret = cleanedTextArret.replace(/<\/p>/gim, '\r\n');
  cleanedTextArret = cleanedTextArret.replace(/<\/h\d>/gim, '\r\n');

  // Handling newlines and carriage returns:
  cleanedTextArret = cleanedTextArret.replace(/\r\n/gim, '\n');
  cleanedTextArret = cleanedTextArret.replace(/\r/gim, '\n');

  // Remove extra spaces:
  cleanedTextArret = removeTabulation(cleanedTextArret);
  cleanedTextArret = removePageBreak(cleanedTextArret);
  cleanedTextArret = cleanedTextArret.replace(/  +/gm, ' ').trim();

  // Minimal set of entities for XML validation:
  cleanedTextArret = cleanedTextArret
    .replace(/&/g, '&amp;')
    .replace(/&amp;amp;/g, '&amp;')
    .replace(/&amp;#/g, '&#');
  cleanedTextArret = cleanedTextArret.replace(/</g, '&lt;');
  cleanedTextArret = cleanedTextArret.replace(/>/g, '&gt;');

  return cleanedTextArret;

  function removeTabulation(str: string) {
    return str.replace(/(\t|\\t)/gim, ''); // Tabulation could be ill formed
  }

  function removePageBreak(str: string) {
    return str.replace(/(\f|\\f)/gim, ''); // Page break could be ill formed
  }
}

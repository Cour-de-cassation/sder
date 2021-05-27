export { jurinetLib };

const jurinetLib = {
  cleanText(text: string): string {
    if (typeof text !== 'string') {
      throw new Error('jurinetLib.cleanText: text must be a string.');
    }

    // There could be more than one <TEXTE_ARRET> tags, so we first split the text around them:
    const texteArrets = extractTexteArrets(text);

    if (texteArrets.length === 0) {
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
    for (let j = 0; j < texteArrets.length; j++) {
      const cleanedTextArret = cleanTexteArret(texteArrets[j]);

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

function extractTexteArrets(decisionText: string) {
  return decisionText.split(/<\/?texte_arret>/gi).slice(1, -1);
}

function cleanTexteArret(texteArret: string) {
  let cleanedTextArret = texteArret;

  cleanedTextArret = removeHtmlTags(cleanedTextArret);
  cleanedTextArret = cleanNewLines(cleanedTextArret);
  cleanedTextArret = removeTabulation(cleanedTextArret);
  cleanedTextArret = removePageBreak(cleanedTextArret);
  cleanedTextArret = removeMultipleSpace(cleanedTextArret);
  cleanedTextArret = cleanXmlSpecialCharacter(cleanedTextArret);

  return cleanedTextArret;

  function removeHtmlTags(str: string) {
    return str
      .replace(/<br\s*\/>/gim, '\r\n')
      .replace(/<hr\s*\/>/gim, '\r\n')
      .replace(/<a\s+[^>]+>/gim, '')
      .replace(/<b\s+[^>]+>/gim, '')
      .replace(/<i\s+[^>]+>/gim, '')
      .replace(/<u\s+[^>]+>/gim, '')
      .replace(/<em\s+[^>]+>/gim, '')
      .replace(/<strong\s+[^>]+>/gim, '')
      .replace(/<font\s+[^>]+>/gim, '')
      .replace(/<span\s+[^>]+>/gim, '')
      .replace(/<p\s+[^>]+>/gim, '')
      .replace(/<h\d\s+[^>]+>/gim, '')
      .replace(/<\/a>/gim, ' ')
      .replace(/<\/b>/gim, ' ')
      .replace(/<\/i>/gim, ' ')
      .replace(/<\/u>/gim, ' ')
      .replace(/<\/em>/gim, ' ')
      .replace(/<\/strong>/gim, ' ')
      .replace(/<\/font>/gim, ' ')
      .replace(/<\/span>/gim, ' ')
      .replace(/<\/p>/gim, '\r\n')
      .replace(/<\/h\d>/gim, '\r\n');
  }

  function cleanNewLines(str: string) {
    return str.replace(/\r\n/gim, '\n').replace(/\r/gim, '\n');
  }

  function removeTabulation(str: string) {
    return str.replace(/(\t|\\t)/gim, ''); // Tabulation could be ill formed
  }

  function removePageBreak(str: string) {
    return str.replace(/(\f|\\f)/gim, ''); // Page break could be ill formed
  }

  function removeMultipleSpace(str: string) {
    return str.replace(/  +/gm, ' ').trim();
  }

  function cleanXmlSpecialCharacter(str: string) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/&amp;amp;/g, '&amp;')
      .replace(/&amp;#/g, '&#')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

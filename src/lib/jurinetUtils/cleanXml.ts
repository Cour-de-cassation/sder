export { cleanXml };

function cleanXml(xml: string) {
  // <TEXTE_ARRET> splitting and removing:
  const fragments = xml.split(/<\/?texte_arret>/gi);

  if (fragments.length < 3) {
    throw new Error(
      'JurinetUtils.CleanXML: <TEXTE_ARRET> tag not found or incomplete: the document could be malformed or corrupted.',
    );
  }

  // Keep this info for later:
  const textNextToCatPub = xml.indexOf('</CAT_PUB><TEXTE_ARRET>') !== -1;

  xml = xml.replace(/<texte_arret>[\s\S]*<\/texte_arret>/gim, '');

  // Cleaning of every <TEXTE_ARRET> fragment:
  const texteArret = [];
  for (let j = 1; j < fragments.length - 1; j++) {
    // Remove HTML tags:
    fragments[j] = fragments[j].replace(/<br\s*\/>/gim, '\r\n');
    fragments[j] = fragments[j].replace(/<hr\s*\/>/gim, '\r\n');
    fragments[j] = fragments[j].replace(/<a\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<b\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<i\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<u\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<em\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<strong\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<font\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<span\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<p\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<h\d\s+[^>]+>/gim, '');
    fragments[j] = fragments[j].replace(/<\/a>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/b>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/i>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/u>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/em>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/strong>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/font>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/span>/gim, ' ');
    fragments[j] = fragments[j].replace(/<\/p>/gim, '\r\n');
    fragments[j] = fragments[j].replace(/<\/h\d>/gim, '\r\n');

    // Handling newlines and carriage returns:
    fragments[j] = fragments[j].replace(/\r\n/gim, '\n');
    fragments[j] = fragments[j].replace(/\r/gim, '\n');

    // Remove extra spaces:
    fragments[j] = fragments[j].replace(/\t/gim, '');
    fragments[j] = fragments[j].replace(/\\t/gim, ''); // That could happen...
    fragments[j] = fragments[j].replace(/\f/gim, '');
    fragments[j] = fragments[j].replace(/\\f/gim, ''); // That could happen too...
    fragments[j] = fragments[j].replace(/  +/gm, ' ').trim();

    // Minimal set of entities for XML validation:
    fragments[j] = fragments[j]
      .replace(/&/g, '&amp;')
      .replace(/&amp;amp;/g, '&amp;')
      .replace(/&amp;#/g, '&#');
    fragments[j] = fragments[j].replace(/</g, '&lt;');
    fragments[j] = fragments[j].replace(/>/g, '&gt;');

    // Ignore empty fragment:
    if (fragments[j].length > 0) {
      texteArret.push(fragments[j]);
    }
  }

  if (texteArret.length === 0) {
    throw new Error('jurinetUtils.cleanXml: empty text, the document could be malformed or corrupted.');
  }

  // Cleaning the rest of the document:
  xml = xml
    .replace(/&/g, '&amp;')
    .replace(/&amp;amp;/g, '&amp;')
    .replace(/&amp;#/g, '&#');
  xml = xml.replace(/\s<\s/g, ' &lt; ');
  xml = xml.replace(/\s>\s/g, ' &gt; ');

  // Bad XML, bad JSON...
  xml = xml.replace(/<\/numpourvoi><numpourvoi\s+id=\"\d+\">/gim, ',');

  // Reinject the merged <TEXTE_ARRET> element(s):
  if (textNextToCatPub === true) {
    xml = xml.replace('</CAT_PUB>', '</CAT_PUB><TEXTE_ARRET>' + texteArret.join(' ').trim() + '</TEXTE_ARRET>').trim();
  } else if (xml.indexOf('</LIEN_WWW>') !== -1) {
    xml = xml
      .replace('</LIEN_WWW>', '</LIEN_WWW><TEXTE_ARRET>' + texteArret.join(' ').trim() + '</TEXTE_ARRET>')
      .trim();
  } else {
    throw new Error(
      'JurinetUtils.CleanXML: End of <CAT_PUB> tag not found: the document could be malformed or corrupted.',
    );
  }

  return xml;
}

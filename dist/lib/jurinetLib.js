"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jurinetLib = void 0;
var jurinetLib = {
    cleanText: function (text) {
        if (typeof text !== 'string') {
            throw new Error('jurinetLib.cleanText: text must be a string.');
        }
        // There could be more than one <TEXTE_ARRET> tags, so we first split the text around them:
        var fragments = text.split(/<\/?texte_arret>/gi);
        if (fragments.length < 3) {
            throw new Error('jurinetLib.cleanText: <TEXTE_ARRET> tag not found or incomplete, the document could be malformed or corrupted.');
        }
        // Keep this info for later:
        var textNextToCatPub = text.indexOf('</CAT_PUB><TEXTE_ARRET>') !== -1;
        // Remove all <TEXT_ARRET> fragments from the text:
        text = text.replace(/<texte_arret>[\s\S]*<\/texte_arret>/gim, '');
        // Cleaning every <TEXTE_ARRET> fragment:
        var mergedText = [];
        for (var j = 1; j < fragments.length - 1; j++) {
            // Remove HTML tags:
            // Note: we cannot perform the same global removing as the one
            // we apply on Jurica texts, because Jurinet texts - which are
            // not valid XML documents - can contain many unencoded and
            // meaningful < or > characters (e.g. "<96>", "<< ... >>", etc.)
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
            if (fragments[j] !== '') {
                mergedText.push(fragments[j]);
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
        }
        else if (text.indexOf('</LIEN_WWW>') !== -1) {
            text = text
                .replace('</LIEN_WWW>', '</LIEN_WWW><TEXTE_ARRET>' + mergedText.join(' ').trim() + '</TEXTE_ARRET>')
                .trim();
        }
        else {
            throw new Error('jurinetLib.cleanText: End of <CAT_PUB> or <LIEN_WWW> tag not found, the document could be malformed or corrupted.');
        }
        return text;
    },
};
exports.jurinetLib = jurinetLib;

export { jurinetLib };
var jurinetLib = {
    cleanText: function (text) {
        assertDecisionTextIsString(text);
        var texteArrets = extractTexteArrets(text);
        assertTexteArretsNotEmpty(texteArrets);
        var cleanedTexteArrets = texteArrets.map(cleanTexteArret).filter(function (cleanedTexteArret) { return cleanedTexteArret !== ''; });
        assertCleanedTexteArretsNotEmpty(cleanedTexteArrets);
        return replaceTextArrets(text, cleanedTexteArrets);
    },
};
function assertDecisionTextIsString(decisionText) {
    if (typeof decisionText !== 'string') {
        throw new Error('jurinetLib.cleanText: text must be a string.');
    }
}
function assertTexteArretsNotEmpty(texteArrets) {
    if (texteArrets.length === 0) {
        throw new Error('jurinetLib.cleanText: <TEXTE_ARRET> tag not found or incomplete, the document could be malformed or corrupted.');
    }
}
function assertCleanedTexteArretsNotEmpty(cleanedTexteArrets) {
    if (cleanedTexteArrets.length === 0) {
        throw new Error('jurinetLib.cleanText: empty text, the document could be malformed or corrupted.');
    }
}
function extractTexteArrets(decisionText) {
    return decisionText.split(/<\/?texte_arret>/gi).slice(1, -1);
}
function cleanTexteArret(texteArret) {
    var cleanedTextArret = texteArret;
    cleanedTextArret = removeHtmlTags(cleanedTextArret);
    cleanedTextArret = cleanNewLines(cleanedTextArret);
    cleanedTextArret = removeTabulation(cleanedTextArret);
    cleanedTextArret = removePageBreak(cleanedTextArret);
    cleanedTextArret = removeMultipleSpace(cleanedTextArret);
    cleanedTextArret = cleanXmlSpecialCharacter(cleanedTextArret);
    return cleanedTextArret;
    function removeHtmlTags(str) {
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
    function cleanNewLines(str) {
        return str.replace(/\r\n/gim, '\n').replace(/\r/gim, '\n');
    }
    function removeTabulation(str) {
        return str.replace(/(\t|\\t)/gim, ''); // Tabulation could be ill formed
    }
    function removePageBreak(str) {
        return str.replace(/(\f|\\f)/gim, ''); // Page break could be ill formed
    }
    function removeMultipleSpace(str) {
        return str.replace(/  +/gm, ' ').trim();
    }
    function cleanXmlSpecialCharacter(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/&amp;amp;/g, '&amp;')
            .replace(/&amp;#/g, '&#')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
}
function replaceTextArrets(decisionText, texteArrets) {
    var whereToInjectTexteArrets = computeWhereToInjectTexteArrets(decisionText);
    var newDecisionText = decisionText;
    newDecisionText = removeTextArrets(newDecisionText);
    newDecisionText = cleanXmlSpecialCharacter(newDecisionText);
    newDecisionText = serializeNumPourvoi(newDecisionText);
    return newDecisionText
        .replace(whereToInjectTexteArrets, whereToInjectTexteArrets + "<TEXTE_ARRET>" + texteArrets.join(' ').trim() + '</TEXTE_ARRET>')
        .trim();
    function computeWhereToInjectTexteArrets(str) {
        if (str.indexOf('</CAT_PUB><TEXTE_ARRET>') !== -1) {
            return '</CAT_PUB>';
        }
        else if (str.indexOf('</LIEN_WWW>') !== -1) {
            return '</LIEN_WWW>';
        }
        else {
            throw new Error('jurinetLib.cleanText: End of <CAT_PUB> or <LIEN_WWW> tag not found, the document could be malformed or corrupted.');
        }
    }
    function removeTextArrets(str) {
        return str.replace(/<texte_arret>[\s\S]*<\/texte_arret>/gim, '');
    }
    function cleanXmlSpecialCharacter(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/&amp;amp;/g, '&amp;')
            .replace(/&amp;#/g, '&#')
            .replace(/\s<\s/g, ' &lt; ')
            .replace(/\s>\s/g, ' &gt; ');
    }
    function serializeNumPourvoi(str) {
        return str.replace(/<\/numpourvoi><numpourvoi\s+id=\"\d+\">/gim, ',');
    }
}

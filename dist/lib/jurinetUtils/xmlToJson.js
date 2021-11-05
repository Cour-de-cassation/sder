import parser from 'fast-xml-parser';
import { convertKeysToLowerCase } from './convertKeysToLowerCase';
import { htmlDecode } from './htmlDecode';
export { xmlToJson };
var fastXmlParserOptions = {
    attributeNamePrefix: '$',
    attrNodeName: '$attributes',
    textNodeName: '$value',
    ignoreAttributes: false,
    ignoreNameSpace: true,
    allowBooleanAttributes: false,
    parseNodeValue: false,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: false,
    parseTrueNumberOnly: false,
    arrayMode: true,
};
function xmlToJson(xml, opt) {
    opt = opt || {};
    opt.filter = opt.filter || false;
    opt.htmlDecode = opt.htmlDecode || false;
    opt.toLowerCase = opt.toLowerCase || false;
    var valid = parser.validate(xml);
    if (valid === true) {
        // Convert the XML document to JSON:
        var finalData = parser.parse(xml, fastXmlParserOptions);
        finalData = finalData.DOCUMENT[0];
        if (opt.filter === true) {
            // Remove some undesirable data:
            finalData.PARTIES = undefined;
            finalData.AVOCATS = undefined;
        }
        if (opt.htmlDecode === true) {
            // HTML-decode JSON values:
            finalData = htmlDecode(finalData);
        }
        if (opt.toLowerCase === true) {
            // Convert JSON keys to lower case:
            finalData = convertKeysToLowerCase(finalData);
        }
        return finalData;
    }
    else {
        throw new Error("JurinetUtils.XMLToJSON: Invalid XML document: " + valid + ".");
    }
}

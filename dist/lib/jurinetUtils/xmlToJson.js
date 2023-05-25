"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToJson = void 0;
var fast_xml_parser_1 = require("fast-xml-parser");
var convertKeysToLowerCase_1 = require("./convertKeysToLowerCase");
var htmlDecode_1 = require("./htmlDecode");
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
    var valid = fast_xml_parser_1.XMLValidator.validate(xml);
    if (valid === true) {
        // Convert the XML document to JSON:
        var parser = new fast_xml_parser_1.XMLParser(fastXmlParserOptions);
        var finalData = parser.parse(xml);
        finalData = finalData.DOCUMENT[0];
        if (opt.filter === true) {
            // Remove some undesirable data:
            finalData.PARTIES = undefined;
            finalData.AVOCATS = undefined;
        }
        if (opt.htmlDecode === true) {
            // HTML-decode JSON values:
            finalData = (0, htmlDecode_1.htmlDecode)(finalData);
        }
        if (opt.toLowerCase === true) {
            // Convert JSON keys to lower case:
            finalData = (0, convertKeysToLowerCase_1.convertKeysToLowerCase)(finalData);
        }
        return finalData;
    }
    else {
        throw new Error("JurinetUtils.XMLToJSON: Invalid XML document: ".concat(valid, "."));
    }
}
exports.xmlToJson = xmlToJson;

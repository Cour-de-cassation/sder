"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToJson = void 0;
var fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
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
    var valid = fast_xml_parser_1.default.validate(xml);
    if (valid === true) {
        // Convert the XML document to JSON:
        var finalData = fast_xml_parser_1.default.parse(xml, fastXmlParserOptions);
        finalData = finalData.DOCUMENT[0];
        if (opt.filter === true) {
            // Remove some undesirable data:
            finalData.PARTIES = undefined;
            finalData.AVOCATS = undefined;
        }
        if (opt.htmlDecode === true) {
            // HTML-decode JSON values:
            finalData = htmlDecode_1.htmlDecode(finalData);
        }
        if (opt.toLowerCase === true) {
            // Convert JSON keys to lower case:
            finalData = convertKeysToLowerCase_1.convertKeysToLowerCase(finalData);
        }
        return finalData;
    }
    else {
        throw new Error("JurinetUtils.XMLToJSON: Invalid XML document: " + valid + ".");
    }
}
exports.xmlToJson = xmlToJson;

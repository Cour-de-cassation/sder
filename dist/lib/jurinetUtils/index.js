"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jurinetUtils = void 0;
var normalize_1 = require("./normalize");
var cleanXml_1 = require("./cleanXml");
var xmlToJson_1 = require("./xmlToJson");
var jurinetUtils = {
    normalize: normalize_1.normalize,
    cleanXml: cleanXml_1.cleanXml,
    xmlToJson: xmlToJson_1.xmlToJson,
};
exports.jurinetUtils = jurinetUtils;

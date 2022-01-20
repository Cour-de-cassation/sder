"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAnonymizer = void 0;
var textSplitter_1 = require("../../textSplitter");
var buildEntityIdMapper_1 = require("./buildEntityIdMapper");
var constants_1 = require("./constants");
function buildAnonymizer(settings, annotations, seed) {
    var mapper = buildEntityIdMapper_1.buildEntityIdMapper(settings, annotations.map(function (annotation) { return annotation.entityId; }), seed);
    return {
        anonymizeDocument: anonymizeDocument,
        anonymize: anonymize,
    };
    function anonymizeDocument(document) {
        var splittedText = textSplitter_1.textSplitter.splitTextAccordingToAnnotations(document.text, annotations);
        var splittedAnonymizedText = splittedText.map(function (chunk) {
            switch (chunk.type) {
                case 'text':
                    return chunk.content.text;
                case 'annotation':
                    return anonymize(chunk.annotation);
            }
        });
        return __assign(__assign({}, document), { text: splittedAnonymizedText.reduce(function (text, anonymizedText) { return "" + text + anonymizedText; }, '') });
    }
    function anonymize(annotation) {
        var _a, _b, _c;
        if (((_a = settings[annotation.category]) === null || _a === void 0 ? void 0 : _a.isAnonymized) === false ||
            ((_b = settings[annotation.category]) === null || _b === void 0 ? void 0 : _b.status) === 'visible' ||
            ((_c = settings[annotation.category]) === null || _c === void 0 ? void 0 : _c.status) === 'alwaysVisible') {
            return annotation.text;
        }
        var anonymizedText = mapper[annotation.entityId] || constants_1.ANONYMIZATION_DEFAULT_TEXT;
        return anonymizedText;
    }
}
exports.buildAnonymizer = buildAnonymizer;

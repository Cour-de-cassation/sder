"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSettings = void 0;
var settingsType_1 = require("../settingsType");
function buildSettings(partialSettings) {
    if (partialSettings === void 0) { partialSettings = {}; }
    var settings = {};
    Object.keys(partialSettings).forEach(function (category) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (settings[category] = {
            anonymization: ((_a = partialSettings[category]) === null || _a === void 0 ? void 0 : _a.anonymization) || '',
            autoLinkSensitivity: ((_b = partialSettings[category]) === null || _b === void 0 ? void 0 : _b.autoLinkSensitivity) || [
                {
                    kind: 'levenshteinDistance',
                    threshold: 2,
                },
                { kind: 'caseInsensitive' },
                { kind: 'inclusion' },
            ],
            color: {
                lightMode: buildColor((_d = (_c = partialSettings[category]) === null || _c === void 0 ? void 0 : _c.color) === null || _d === void 0 ? void 0 : _d.lightMode),
                darkMode: buildColor((_f = (_e = partialSettings[category]) === null || _e === void 0 ? void 0 : _e.color) === null || _f === void 0 ? void 0 : _f.darkMode),
            },
            canBeAnnotatedBy: ((_g = partialSettings[category]) === null || _g === void 0 ? void 0 : _g.canBeAnnotatedBy) || 'both',
            couldBe: (_h = partialSettings[category]) === null || _h === void 0 ? void 0 : _h.couldBe,
            iconName: buildIconName((_j = partialSettings[category]) === null || _j === void 0 ? void 0 : _j.iconName),
            isSensitive: !!partialSettings[category].isSensitive,
            isAnonymized: buildIsAnonymized((_k = partialSettings[category]) === null || _k === void 0 ? void 0 : _k.isAnonymized),
            order: (_l = partialSettings[category]) === null || _l === void 0 ? void 0 : _l.order,
            status: partialSettings[category].status || 'hidden',
            text: buildText((_m = partialSettings[category]) === null || _m === void 0 ? void 0 : _m.text),
        });
    });
    return settings;
}
exports.buildSettings = buildSettings;
function buildColor(color) {
    if (!color) {
        return 'white';
    }
    if (typeof color === 'string') {
        return buildConstantColor(color);
    }
    else {
        return buildShadeColor(color);
    }
    function buildConstantColor(constantColor) {
        if (settingsType_1.constantColors.includes(constantColor)) {
            return constantColor;
        }
        else {
            throw new Error("Invalid constant color: " + constantColor);
        }
    }
    function buildShadeColor(shadeColor) {
        if (settingsType_1.shadeColors.includes(shadeColor[0])) {
            return shadeColor;
        }
        else {
            throw new Error("Invalid shade color: " + shadeColor);
        }
    }
}
function buildIconName(iconName) {
    if (!iconName) {
        return 'forbidden';
    }
    if (settingsType_1.categoryIconNames.includes(iconName)) {
        return iconName;
    }
    else {
        throw new Error("Invalid category icon name: " + iconName);
    }
}
function buildIsAnonymized(isAnonymized) {
    if (isAnonymized === undefined) {
        return true;
    }
    else {
        return isAnonymized;
    }
}
function buildText(text) {
    return text ? text : 'category';
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFromJson = void 0;
var buildSettings_1 = require("./buildSettings");
function parseFromJson(json) {
    var partialSettings = JSON.parse(json);
    return buildSettings_1.buildSettings(partialSettings);
}
exports.parseFromJson = parseFromJson;

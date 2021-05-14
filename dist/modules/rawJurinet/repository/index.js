"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRawJurinetRepository = void 0;
var utils_1 = require("../../../utils");
var buildRawJurinetFakeRepository_1 = require("./buildRawJurinetFakeRepository");
var buildRawJurinetRepository_1 = require("./buildRawJurinetRepository");
var buildRepository = utils_1.dependencyManager.inject({
    defaultValue: buildRawJurinetRepository_1.buildRawJurinetRepository,
    testValue: buildRawJurinetFakeRepository_1.buildRawJurinetFakeRepository,
});
exports.buildRawJurinetRepository = buildRepository;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRawJuricaRepository = void 0;
var utils_1 = require("../../../utils");
var buildRawJuricaFakeRepository_1 = require("./buildRawJuricaFakeRepository");
var buildRawJuricaRepository_1 = require("./buildRawJuricaRepository");
var buildRepository = utils_1.dependencyManager.inject({
    defaultValue: buildRawJuricaRepository_1.buildRawJuricaRepository,
    testValue: buildRawJuricaFakeRepository_1.buildRawJuricaFakeRepository,
});
exports.buildRawJuricaRepository = buildRepository;

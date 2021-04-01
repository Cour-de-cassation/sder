"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDecisionRepository = void 0;
var utils_1 = require("../../../utils");
var buildDecisionFakeRepository_1 = require("./buildDecisionFakeRepository");
var buildDecisionRepository_1 = require("./buildDecisionRepository");
var buildRepository = utils_1.dependencyManager.inject({
    defaultValue: buildDecisionRepository_1.buildDecisionRepository,
    testValue: buildDecisionFakeRepository_1.buildDecisionFakeRepository,
});
exports.buildDecisionRepository = buildRepository;

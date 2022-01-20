"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticModule = void 0;
var generator_1 = require("./generator");
var lib_1 = require("./lib");
var statisticType_1 = require("./statisticType");
var statisticModule = {
    model: statisticType_1.statisticModel,
    generator: generator_1.statisticGenerator,
    lib: { aggregate: lib_1.aggregate, buildStatistic: lib_1.buildStatistic },
};
exports.statisticModule = statisticModule;

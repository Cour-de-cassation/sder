"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationModule = void 0;
var generator_1 = require("./generator");
var migrationType_1 = require("./migrationType");
var lib_1 = require("./lib");
var migrationModule = {
    model: migrationType_1.migrationModel,
    generator: generator_1.migrationGenerator,
    lib: {
        buildMigration: lib_1.buildMigration,
        fileNameHandler: lib_1.fileNameHandler,
    },
};
exports.migrationModule = migrationModule;

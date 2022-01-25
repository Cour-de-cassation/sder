"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironment = void 0;
var runModes = ['PREPROD', 'PROD'];
function getEnvironment() {
    var RUN_MODE = process.env.RUN_MODE;
    if (RUN_MODE && runModes.includes(RUN_MODE)) {
        return environment[RUN_MODE];
    }
    else {
        throw new Error("Found no environment for RUN_MODE: ".concat(RUN_MODE));
    }
}
exports.getEnvironment = getEnvironment;
var environment = {
    PREPROD: {
        port: 54321,
        SDER_DB_URL: 'mongodb://127.0.0.1:27017',
        SDER_DB_NAME: 'SDER',
    },
    PROD: {
        port: 54321,
        SDER_DB_URL: 'mongodb://172.16.118.100:27017',
        SDER_DB_NAME: 'SDER',
    },
};

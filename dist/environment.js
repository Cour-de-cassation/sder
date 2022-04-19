"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironment = void 0;
function getEnvironment() {
    return {
        port: 54321,
        SDER_DB_URL: process.env.SDER_DB_URL || 'mongodb://dbsder:27017',
        SDER_DB_NAME: process.env.SDER_DB_NAME || 'SDER',
    };
}
exports.getEnvironment = getEnvironment;

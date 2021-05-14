"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.config();
var environment = {
    port: 54321,
    SDER_DB_URL: 'mongodb://127.0.0.1:27017',
    SDER_DB_NAME: 'SDER',
    JURINET_DB_URL: process.env.JURINET_DB_URL,
    JURINET_DB_USER: process.env.JURINET_DB_USER,
    JURINET_DB_PWD: process.env.JURINET_DB_PWD,
    JURICA_DB_URL: process.env.JURICA_DB_URL,
    JURICA_DB_USER: process.env.JURICA_DB_USER,
    JURICA_DB_PWD: process.env.JURICA_DB_PWD,
};
exports.environment = environment;

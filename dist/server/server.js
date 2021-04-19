"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.server = void 0;
var body_parser_1 = __importDefault(require("body-parser"));
var express = require("express");
var environment_1 = require("../environment");
var server = express();
exports.server = server;
function startServer() {
    server.listen(environment_1.environment.port);
}
exports.startServer = startServer;
server.use(body_parser_1.default.json({ limit: '10mb' }));

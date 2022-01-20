"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentHandler = void 0;
var environmentHandler = {
    convertClientPortToServerPort: convertClientPortToServerPort,
    convertServerPortToClientPort: convertServerPortToClientPort,
};
exports.environmentHandler = environmentHandler;
function convertClientPortToServerPort(clientPort) {
    return clientPort - 2;
}
function convertServerPortToClientPort(serverPort) {
    return serverPort + 2;
}

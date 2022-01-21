"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildExtractUserIdFromAuthorizationHeader = void 0;
var id_1 = require("../../id");
var lib_1 = require("../../../lib");
function buildExtractUserIdFromAuthorizationHeader(privateKey) {
    return extractUserIdFromAuthorizationHeader;
    function extractUserIdFromAuthorizationHeader(authorization) {
        var jwtSigner = lib_1.buildJwtSigner(privateKey);
        if (authorization) {
            var token = authorization.split(' ')[1];
            var userId = jwtSigner.verifyToken(token);
            return id_1.idModule.lib.buildId(userId);
        }
        else {
            throw lib_1.errorHandlers.authenticationErrorHandler.build('No authorization value provided');
        }
    }
}
exports.buildExtractUserIdFromAuthorizationHeader = buildExtractUserIdFromAuthorizationHeader;

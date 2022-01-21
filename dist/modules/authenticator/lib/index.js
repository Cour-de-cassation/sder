"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAuthenticator = void 0;
var assertAuthorization_1 = require("./assertAuthorization");
var buildBaseUser_1 = require("./buildBaseUser");
var computeHashedPassword_1 = require("./computeHashedPassword");
var extractUserIdFromAuthorizationHeader_1 = require("./extractUserIdFromAuthorizationHeader");
var formatEmail_1 = require("./formatEmail");
var getTokenForUser_1 = require("./getTokenForUser");
var passwordHandler_1 = require("./passwordHandler");
function buildAuthenticator(privateKey) {
    return {
        assertAuthorization: assertAuthorization_1.assertAuthorization,
        buildBaseUser: buildBaseUser_1.buildBaseUser,
        computeHashedPassword: computeHashedPassword_1.computeHashedPassword,
        extractUserIdFromAuthorizationHeader: extractUserIdFromAuthorizationHeader_1.buildExtractUserIdFromAuthorizationHeader(privateKey),
        formatEmail: formatEmail_1.formatEmail,
        getTokenForUser: getTokenForUser_1.buildGetTokenForUser(privateKey),
        passwordHandler: passwordHandler_1.passwordHandler,
    };
}
exports.buildAuthenticator = buildAuthenticator;

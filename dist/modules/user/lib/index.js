"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUserLib = void 0;
var lib_1 = require("../../../lib");
var fetchAuthenticatedUserFromAuthorizationHeader_1 = require("./fetchAuthenticatedUserFromAuthorizationHeader");
var login_1 = require("./login");
var DELAY_BETWEEN_LOGIN_ATTEMPTS_IN_SECONDS = 1 * 1000;
var MAX_LOGIN_ATTEMPTS = 1;
function buildUserLib(privateKey) {
    var checkCallAttempts = lib_1.buildCallAttemptsRegulator(MAX_LOGIN_ATTEMPTS, DELAY_BETWEEN_LOGIN_ATTEMPTS_IN_SECONDS).checkCallAttempts;
    return {
        fetchAuthenticatedUserFromAuthorizationHeader: function (authorization, findById) { return fetchAuthenticatedUserFromAuthorizationHeader_1.fetchAuthenticatedUserFromAuthorizationHeader(authorization, { findById: findById, privateKey: privateKey }); },
        buildLogin: function (_a) {
            var findByEmail = _a.findByEmail;
            return login_1.buildLogin({ findByEmail: findByEmail, privateKey: privateKey, checkCallAttempts: checkCallAttempts });
        },
    };
}
exports.buildUserLib = buildUserLib;

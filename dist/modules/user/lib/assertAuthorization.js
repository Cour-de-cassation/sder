"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertAuthorization = void 0;
var lib_1 = require("../../../lib");
function assertAuthorization(user) {
    if (!user.isActivated) {
        throw lib_1.errorHandlers.authenticationErrorHandler.build("The user " + user.email + " is deactivated");
    }
    if (!!user.deletionDate) {
        throw lib_1.errorHandlers.authenticationErrorHandler.build("The user " + user.email + " has been deleted");
    }
}
exports.assertAuthorization = assertAuthorization;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertAuthorization = void 0;
var errors_1 = require("../../../errors");
function assertAuthorization(user) {
    if (!user.isActivated) {
        throw errors_1.errorHandlers.authenticationErrorHandler.build("The user " + user.email + " is deactivated");
    }
    if (!!user.deletionDate) {
        throw errors_1.errorHandlers.authenticationErrorHandler.build("The user " + user.email + " has been deleted");
    }
}
exports.assertAuthorization = assertAuthorization;

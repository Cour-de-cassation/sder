"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPermissions = void 0;
var errors_1 = require("../../../errors");
function assertPermissions(user, permissions) {
    if (!permissions.includes(user.role)) {
        throw errors_1.errorHandlers.permissionErrorHandler.build("user " + user._id + " has not the right permissions " + permissions);
    }
}
exports.assertPermissions = assertPermissions;

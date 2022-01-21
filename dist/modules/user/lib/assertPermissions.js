"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertPermissions = void 0;
var lib_1 = require("../../../lib");
function assertPermissions(user, permissions) {
    if (!permissions.includes(user.role)) {
        throw lib_1.errorHandlers.permissionErrorHandler.build("user " + user._id + " has not the right permissions " + permissions);
    }
}
exports.assertPermissions = assertPermissions;

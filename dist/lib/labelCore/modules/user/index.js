"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModule = void 0;
var generator_1 = require("./generator");
var lib_1 = require("./lib");
var userType_1 = require("./userType");
var userModule = {
    models: { user: userType_1.userModel, passwordTimeValidityStatus: userType_1.passwordTimeValidityStatusModel },
    generator: generator_1.userGenerator,
    lib: {
        assertAuthorization: lib_1.assertAuthorization,
        assertPermissions: lib_1.assertPermissions,
        buildUser: lib_1.buildUser,
        computeHashedPassword: lib_1.computeHashedPassword,
        formatEmail: lib_1.formatEmail,
        passwordHandler: lib_1.passwordHandler,
    },
};
exports.userModule = userModule;

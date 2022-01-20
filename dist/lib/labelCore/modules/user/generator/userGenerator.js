"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGenerator = void 0;
var id_1 = require("../../id");
var userGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, deletionDate = _b.deletionDate, email = _b.email, hashedPassword = _b.hashedPassword, _id = _b._id, isActivated = _b.isActivated, name = _b.name, passwordLastUpdateDate = _b.passwordLastUpdateDate, role = _b.role;
        return ({
            email: email ? email : 'EMAIL',
            deletionDate: deletionDate || undefined,
            hashedPassword: hashedPassword ? hashedPassword : 'HASHED_PASSWORD',
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            isActivated: isActivated !== undefined ? isActivated : true,
            name: name ? name : 'NAME',
            passwordLastUpdateDate: passwordLastUpdateDate ? passwordLastUpdateDate : new Date().getTime(),
            role: role ? role : 'annotator',
        });
    },
};
exports.userGenerator = userGenerator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationGenerator = void 0;
var id_1 = require("../../id");
var migrationGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, creationDate = _b.creationDate, order = _b.order;
        return {
            _id: _id ? id_1.idModule.lib.buildId(_id) : id_1.idModule.lib.buildId(),
            order: order ? order : 0,
            creationDate: creationDate ? creationDate : new Date().getTime(),
        };
    },
};
exports.migrationGenerator = migrationGenerator;

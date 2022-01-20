"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equalId = void 0;
var utils_1 = require("../utils");
function equalId(id1, id2) {
    return utils_1.areMongoIdEqual(id1, id2);
}
exports.equalId = equalId;

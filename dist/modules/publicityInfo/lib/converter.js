"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converter = void 0;
var converter = {
    convertParameters: convertParameters,
};
exports.converter = converter;
function convertParameters(params) {
    var _id = parseInt(params._id);
    var sourceDb = params.sourceDb === "jurica" || params.sourceDb === "jurinet"
        ? params.sourceDb
        : undefined;
    if (isNaN(_id) || sourceDb === undefined) {
        return undefined;
    }
    return { _id: _id, sourceDb: sourceDb };
}

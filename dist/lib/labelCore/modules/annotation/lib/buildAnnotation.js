"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAnnotation = void 0;
var entityIdHandler_1 = require("./entityIdHandler");
function buildAnnotation(_a) {
    var category = _a.category, start = _a.start, text = _a.text, certaintyScore = _a.certaintyScore;
    return {
        category: category,
        entityId: entityIdHandler_1.entityIdHandler.compute(category, text),
        start: start,
        text: text,
        certaintyScore: certaintyScore,
    };
}
exports.buildAnnotation = buildAnnotation;

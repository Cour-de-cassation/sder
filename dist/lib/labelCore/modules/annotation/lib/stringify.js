"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
function stringify(annotation, options) {
    return "(" + annotation.category + " / " + annotation.text + " " + ((options === null || options === void 0 ? void 0 : options.displayEntityId) ? "(" + annotation.entityId + ") " : '') + "/ " + annotation.start + ")";
}
exports.stringify = stringify;

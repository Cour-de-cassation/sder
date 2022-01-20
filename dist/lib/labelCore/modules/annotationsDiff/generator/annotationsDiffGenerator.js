"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationsDiffGenerator = void 0;
var annotationsDiffGenerator = {
    generate: function (_a) {
        var _b = _a === void 0 ? {} : _a, before = _b.before, after = _b.after;
        return {
            before: before ? before : [],
            after: after ? after : [],
        };
    },
};
exports.annotationsDiffGenerator = annotationsDiffGenerator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependencyManager = void 0;
var dependencyManager = {
    inject: function (_a) {
        var defaultValue = _a.defaultValue, testValue = _a.testValue;
        switch (process.env.RUN_MODE) {
            case 'TEST':
                return testValue || defaultValue;
            default:
                return defaultValue;
        }
    },
};
exports.dependencyManager = dependencyManager;

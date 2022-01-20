"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDependencyManager = void 0;
function buildDependencyManager(environmentValue) {
    var dependencyManager = {
        inject: function (injectionValues) {
            switch (environmentValue) {
                case 'LOCAL':
                    return injectionValues.forLocal || injectionValues.forProd;
                case 'PREPROD':
                    return injectionValues.forPreProd || injectionValues.forProd;
                case 'PROD':
                    return injectionValues.forProd;
                case 'TEST':
                    return injectionValues.forTest || injectionValues.forProd;
                default:
                    return injectionValues.forProd;
            }
        },
    };
    return { dependencyManager: dependencyManager };
}
exports.buildDependencyManager = buildDependencyManager;

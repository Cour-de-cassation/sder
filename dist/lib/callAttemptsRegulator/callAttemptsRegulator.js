"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCallAttemptsRegulator = void 0;
function buildCallAttemptsRegulator(maxAttempts, delayBetweenAttemptsInSeconds) {
    var callAttempts = {};
    return { checkCallAttempts: checkCallAttempts };
    function checkCallAttempts(identifier) {
        var now = new Date().getTime();
        if (!callAttempts[identifier]) {
            callAttempts[identifier] = [now];
            return;
        }
        callAttempts[identifier] = __spreadArrays(callAttempts[identifier].filter(function (timestamp) { return now - timestamp < delayBetweenAttemptsInSeconds; }), [
            now,
        ]);
        if (callAttempts[identifier].length > maxAttempts) {
            throw new Error("Too many call attempts for identifier " + identifier);
        }
    }
}
exports.buildCallAttemptsRegulator = buildCallAttemptsRegulator;

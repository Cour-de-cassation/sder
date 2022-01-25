"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
        callAttempts[identifier] = __spreadArray(__spreadArray([], callAttempts[identifier].filter(function (timestamp) { return now - timestamp < delayBetweenAttemptsInSeconds; }), true), [
            now,
        ], false);
        if (callAttempts[identifier].length > maxAttempts) {
            throw new Error("Too many call attempts for identifier ".concat(identifier));
        }
    }
}
exports.buildCallAttemptsRegulator = buildCallAttemptsRegulator;
